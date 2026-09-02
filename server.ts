import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Persistent storage path
const DATA_DIR = path.join(process.cwd(), 'data');
const ENROLLMENTS_FILE = path.join(DATA_DIR, 'enrollments.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to read enrollments safely
function getEnrollments(): any[] {
  try {
    if (fs.existsSync(ENROLLMENTS_FILE)) {
      const content = fs.readFileSync(ENROLLMENTS_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Error reading enrollments file:', err);
  }
  return [];
}

// Helper to write enrollments safely
function saveEnrollments(enrollments: any[]) {
  try {
    fs.writeFileSync(ENROLLMENTS_FILE, JSON.stringify(enrollments, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving enrollments file:', err);
  }
}

// =========================================
// API ROUTES
// =========================================

// 1. POST /api/enrollments - Submit Course Registration
app.post('/api/enrollments', async (req, res) => {
  try {
    const { studentName, studentEmail, studentPhone, courseName, courseDuration, courseFee } = req.body;

    if (!studentName || !studentEmail || !studentPhone || !courseName) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields: Full Student Name, Email Address, WhatsApp Number, and Course Name.',
      });
    }

    const now = new Date();
    const newEnrollment = {
      id: 'enr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      studentName: String(studentName).trim(),
      studentEmail: String(studentEmail).trim(),
      studentPhone: String(studentPhone).trim(),
      courseName: String(courseName).trim(),
      courseDuration: courseDuration ? String(courseDuration).trim() : '1 Month',
      courseFee: courseFee ? String(courseFee).trim() : 'Paid Course',
      registrationDate: now.toISOString(),
      registrationDateFormatted: now.toLocaleString('en-US', {
        timeZone: 'Asia/Karachi',
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      status: 'Pending Payment Contact',
      source: 'Nexovia Academy Live Registration',
    };

    // Save to persistent file
    const currentList = getEnrollments();
    currentList.unshift(newEnrollment);
    saveEnrollments(currentList);

    console.log('--------------------------------------------------');
    console.log('NEW ACADEMY COURSE REGISTRATION RECEIVED:');
    console.log(`Student Name: ${newEnrollment.studentName}`);
    console.log(`Email: ${newEnrollment.studentEmail}`);
    console.log(`WhatsApp: ${newEnrollment.studentPhone}`);
    console.log(`Course: ${newEnrollment.courseName} (${newEnrollment.courseFee})`);
    console.log(`Timestamp: ${newEnrollment.registrationDateFormatted}`);
    console.log('--------------------------------------------------');

    // Forward to Wix Webhook if configured in environment
    if (process.env.WIX_WEBHOOK_URL) {
      try {
        console.log('Forwarding enrollment data to Wix Webhook:', process.env.WIX_WEBHOOK_URL);
        await fetch(process.env.WIX_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'Full Name': newEnrollment.studentName,
            'Email': newEnrollment.studentEmail,
            'Phone Number': newEnrollment.studentPhone,
            'Course Name': newEnrollment.courseName,
            'Course Fee': newEnrollment.courseFee,
            'Course Duration': newEnrollment.courseDuration,
            'Registration Date': newEnrollment.registrationDateFormatted,
            'Submission ID': newEnrollment.id,
          }),
        });
      } catch (wixErr) {
        console.error('Failed to forward submission to Wix Webhook:', wixErr);
      }
    }

    // Owner notification log
    console.log(`[EMAIL NOTIFICATION QUEUED FOR OWNER]: abeeranadeem984@gmail.com`);

    return res.status(200).json({
      success: true,
      message: 'Registration Received!\nThank you for registering. Our academy admissions team will contact you shortly with payment and class details.',
      enrollment: newEnrollment,
    });
  } catch (err: any) {
    console.error('Error handling course enrollment:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to process course registration. Please try again.',
    });
  }
});

// 2. GET /api/enrollments - List all registrations for site owner/dashboard
app.get('/api/enrollments', (req, res) => {
  const list = getEnrollments();
  return res.json({
    success: true,
    total: list.length,
    enrollments: list,
  });
});

// 3. DELETE /api/enrollments/:id - Delete registration entry
app.delete('/api/enrollments/:id', (req, res) => {
  const { id } = req.params;
  let list = getEnrollments();
  const initialLength = list.length;
  list = list.filter((item) => item.id !== id);

  if (list.length === initialLength) {
    return res.status(404).json({ success: false, error: 'Registration record not found.' });
  }

  saveEnrollments(list);
  return res.json({ success: true, message: 'Registration record deleted successfully.' });
});

// 4. PATCH /api/enrollments/:id - Update status
app.patch('/api/enrollments/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const list = getEnrollments();
  const itemIndex = list.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ success: false, error: 'Registration record not found.' });
  }

  if (status) list[itemIndex].status = status;
  if (notes !== undefined) list[itemIndex].notes = notes;

  saveEnrollments(list);
  return res.json({ success: true, enrollment: list[itemIndex] });
});

// 5. GET /api/enrollments/export.csv - Download CSV for Wix CRM / Excel
app.get('/api/enrollments/export.csv', (req, res) => {
  const list = getEnrollments();
  let csv = 'Registration ID,Full Student Name,Email Address,WhatsApp Number,Selected Course Name,Course Fee,Course Duration,Registration Date,Status\n';

  list.forEach((item) => {
    const escapeCsv = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;
    csv += [
      escapeCsv(item.id),
      escapeCsv(item.studentName),
      escapeCsv(item.studentEmail),
      escapeCsv(item.studentPhone),
      escapeCsv(item.courseName),
      escapeCsv(item.courseFee),
      escapeCsv(item.courseDuration),
      escapeCsv(item.registrationDateFormatted),
      escapeCsv(item.status),
    ].join(',') + '\n';
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="Nexovia_Academy_Enrollments.csv"');
  return res.send(csv);
});

// =========================================
// VITE MIDDLEWARE / PRODUCTION STATIC SERVER
// =========================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nexovia Digital server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
