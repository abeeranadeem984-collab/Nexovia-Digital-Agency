import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, Send, Calendar, Award, Play, Pause, Star, Clock, User, ArrowRight, ShieldCheck, Volume2, VolumeX, Maximize2, RotateCcw, Upload, Link, Sparkles, TrendingUp, GraduationCap, ShoppingBag, Video } from 'lucide-react';
import { Service, Course, PortfolioItem, BlogPost } from '../types';
import { COMPANY_INFO } from '../data/agencyData';
import { DynamicIcon } from './DynamicIcon';

/* 1. SERVICE DETAIL MODAL */
export const ServiceDetailModal: React.FC<{
  service: Service | null;
  onClose: () => void;
  openConsultationModal: () => void;
}> = ({ service, onClose, openConsultationModal }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto space-y-6 pr-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <DynamicIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                {service.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs">
            <strong className="text-blue-700 dark:text-blue-300 font-bold block mb-1">
              Ideal Target Profile:
            </strong>
            <span className="text-gray-700 dark:text-gray-300">{service.idealFor}</span>
          </div>

          <div className="space-y-2">
            <h4 className="font-heading text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Key Service Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-heading text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Implementation Process:
            </h4>
            <div className="space-y-2">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4 mt-4">
          <button
            onClick={() => {
              onClose();
              openConsultationModal();
            }}
            className="w-full py-3 px-6 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Book Strategy Session for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

/* 2. COURSE ENROLLMENT MODAL */
export const CourseEnrollmentModal: React.FC<{
  course: Course | null;
  onClose: () => void;
}> = ({ course, onClose }) => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!course) return null;

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentEmail.trim() || !studentPhone.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: studentName.trim(),
          studentEmail: studentEmail.trim(),
          studentPhone: studentPhone.trim(),
          courseName: course.name,
          courseDuration: course.duration,
          courseFee: course.pricePKR || `$${course.price}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit course registration. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting enrollment:', err);
      // Fallback: Store locally if backend is temporarily unreachable
      const fallbackRecord = {
        id: 'enr_' + Date.now(),
        studentName: studentName.trim(),
        studentEmail: studentEmail.trim(),
        studentPhone: studentPhone.trim(),
        courseName: course.name,
        courseDuration: course.duration,
        courseFee: course.pricePKR || `$${course.price}`,
        registrationDateFormatted: new Date().toLocaleString(),
        status: 'Pending Payment Contact',
      };
      try {
        const stored = JSON.parse(localStorage.getItem('nexovia_enrollments') || '[]');
        stored.unshift(fallbackRecord);
        localStorage.setItem('nexovia_enrollments', JSON.stringify(stored));
      } catch (e) {}
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setSubmitted(false);
    setErrorMessage('');
    setStudentName('');
    setStudentEmail('');
    setStudentPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between">
        
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto space-y-5 pr-2">
          <div className="flex items-center gap-3">
            <img
              src={course.image}
              alt={course.name}
              className="w-16 h-16 rounded-2xl object-cover shrink-0"
            />
            <div>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Nexovia Academy — Course Registration
              </span>
              <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
                {course.name}
              </h3>
              <div className="text-xs text-gray-500 font-semibold mt-0.5">
                Duration: {course.duration} | Fee: {course.pricePKR || `$${course.price}`}
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/923476811866?text=${encodeURIComponent(
              `Hello Nexovia Digital, I want to enroll in ${course.name}. Please send me the payment details and course information.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enroll in ${course.name} on WhatsApp`}
            title={`Enroll in ${course.name} on WhatsApp`}
            className="w-full py-3 px-4 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Enroll Now on WhatsApp (Instant)</span>
          </a>

          {!submitted ? (
            <form onSubmit={handleEnroll} className="space-y-4 pt-1">
              {errorMessage && (
                <div className="p-3 text-xs bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 rounded-xl">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                  Full Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="e.g. +92 347 6811866"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                />
              </div>

              <div className="p-3 bg-blue-50/50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/40 rounded-xl text-[11px] text-blue-700 dark:text-blue-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>Manual Payment Process</span>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-400">
                  Online payments are disabled on registration. You will receive bank transfer & class schedule details directly from our admissions team after submitting.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Submitting Registration...' : 'Complete Course Registration'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/90 border border-emerald-700 text-emerald-200 text-center space-y-4 shadow-xl">
              <Award className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-heading text-xl font-bold text-white">Registration Received!</h4>
              <p className="text-xs sm:text-sm leading-relaxed text-emerald-100 font-sans">
                Thank you for registering. Our academy admissions team will contact you shortly with payment and class details.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923476811866?text=${encodeURIComponent(
                    `Assalam o Alaikum! I want to enroll in the ${course.name}. Please share the payment details and enrollment procedure.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={handleModalClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

/* 3. CONSULTATION MODAL */
export const ConsultationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Abeera Nadeem Bajwa,\n\nI would like to book a 1-on-1 Strategy Call.\nName: ${name}\nWhatsApp: ${phone}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">
              1-on-1 Business Strategy Call
            </span>
            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
              Book Call with Abeera Nadeem Bajwa
            </h3>
            <p className="text-xs text-gray-500">
              Founder & Managing Director of Nexovia Digital
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Abeera Nadeem"
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +92 347 6811866"
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve Consultation Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-700 text-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-heading text-lg font-bold">Consultation Slot Reserved!</h4>
              <p className="text-xs">
                We will confirm your calendar slot on WhatsApp at {phone} within 30 minutes.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

/* 5. INTERACTIVE AGENCY INTRO VIDEO PLAYER MODAL */
export const VideoPlayerModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  openConsultationModal?: () => void;
}> = ({ isOpen, onClose, openConsultationModal }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [customVideoUrl, setCustomVideoUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'interactive' | 'customUrl'>('interactive');
  const [inputUrl, setInputUrl] = useState<string>('');

  const scenes = [
    {
      id: 0,
      time: '0:00 - 0:03',
      title: 'Welcome to Nexovia Digital',
      subtitle: 'Your trusted partner for smart digital solutions, creative design, and online growth. Nexovia Digital — Grow Smarter. Go Further.',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      badge: 'Official Brand Video',
      narration: `Welcome to Nexovia Digital. Your trusted partner for smart digital solutions, creative design, and online growth. Let us build your digital presence. Grow Smarter, Go Further.`
    },
    {
      id: 1,
      time: '0:03 - 0:06',
      title: 'Miliye Abeera Nadeem Bajwa se',
      subtitle: 'Founder, Digital Marketing Agency — Nexovia Digital',
      bgImage: COMPANY_INFO.ownerImage,
      badge: 'Founder Introduction',
      narration: `Miliye Abeera Nadeem Bajwa se, jo is platform ke peeche ek ba-salahiyat entrepreneur hain.`
    },
    {
      id: 2,
      time: '0:06 - 0:09',
      title: 'Proven Growth Milestones',
      subtitle: '500+ Successful Students • 99% Satisfaction Rate • $2.5M+ Ad Revenue',
      bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      badge: 'Proven Milestones',
      narration: `500+ successful students, 99 percent satisfaction rate, and $2.5 Million plus ad revenue generated for our clients.`
    },
    {
      id: 3,
      time: '0:09 - 0:12',
      title: 'Need a Custom Growth Strategy for Your Brand?',
      subtitle: 'Engineer your growth milestones today with tailored performance marketing',
      bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      badge: 'Brand Growth',
      narration: `Aaye aaj hi apne growth milestone ko engineer karein. Book your free strategy call with Nexovia Digital today.`
    }
  ];

  // SCENE PROGRESS TIMER
  useEffect(() => {
    let timer: any;
    if (isOpen && isPlaying && activeTab === 'interactive') {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentScene((scene) => {
              const next = (scene + 1) % scenes.length;
              return next;
            });
            return 0;
          }
          return prev + 2;
        });
      }, 250);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying, activeTab, scenes.length]);

  // VOICE NARRATION VIA WEB SPEECH API
  const speakScene = (sceneIndex: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (!isMuted) {
        const utterance = new SpeechSynthesisUtterance(scenes[sceneIndex].narration);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  useEffect(() => {
    if (isOpen && isPlaying && !isMuted && activeTab === 'interactive') {
      speakScene(currentScene);
    } else if (isMuted || !isPlaying) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }
  }, [currentScene, isMuted, isPlaying, isOpen, activeTab]);

  const handleClose = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsPlaying(false);
    onClose();
  };

  const handleSelectScene = (index: number) => {
    setCurrentScene(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl) {
      setCustomVideoUrl(inputUrl);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[95vh]">
        
        {/* HEADER BAR */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/50 text-blue-400 flex items-center justify-center">
              <Video className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Nexovia Digital — Official Intro Video</span>
                <span className="text-[10px] font-extrabold uppercase bg-blue-600 text-white px-2 py-0.5 rounded-full">HD 1080p</span>
              </h3>
              <p className="text-xs text-slate-400">
                Abeera Nadeem Bajwa presents agency overview, courses & performance marketing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* TAB TOGGLE: INTERACTIVE / CUSTOM MP4 or YOUTUBE */}
            <div className="hidden sm:flex bg-slate-800 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'interactive' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Interactive Presentation
              </button>
              <button
                onClick={() => setActiveTab('customUrl')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'customUrl' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Custom Video Link
              </button>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN VIDEO DISPLAY AREA */}
        {activeTab === 'interactive' ? (
          <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center group">
            
            {/* SCENE BACKGROUND IMAGE */}
            <img
              src={scenes[currentScene].bgImage}
              alt={scenes[currentScene].title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter brightness-50 contrast-110 scale-105"
            />

            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20"></div>

            {/* SCENE TOP BADGE & TIMER */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-3 py-1.5 rounded-xl text-xs font-extrabold backdrop-blur-md shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{scenes[currentScene].badge}</span>
              </div>

              <div className="bg-slate-900/80 text-slate-300 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-slate-700/80 backdrop-blur-md">
                Scene {currentScene + 1} of {scenes.length} • {scenes[currentScene].time}
              </div>
            </div>

            {/* FOUNDER BRANDING CARD (FOR SCENE 0) OR METRICS DISPLAY */}
            <div className="relative z-10 p-6 max-w-2xl text-center space-y-4">
              
              {currentScene === 0 && (
                <div className="inline-flex items-center gap-3 bg-slate-900/90 p-2.5 px-4 rounded-2xl border border-blue-500/40 shadow-2xl backdrop-blur-md mx-auto animate-in zoom-in-95 duration-300">
                  <img
                    src={COMPANY_INFO.ownerImage}
                    alt={COMPANY_INFO.owner}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-blue-500 shadow-md"
                  />
                  <div className="text-left">
                    <div className="text-xs font-bold text-blue-400">{COMPANY_INFO.owner}</div>
                    <div className="text-[11px] text-slate-300">Founder & Managing Director • Sialkot, Pakistan</div>
                  </div>
                </div>
              )}

              {currentScene === 1 && (
                <div className="flex justify-center gap-4 animate-in fade-in duration-300">
                  <div className="bg-blue-950/80 border border-blue-800/80 p-3 rounded-2xl text-center px-5">
                    <div className="text-2xl font-black text-blue-400">100+</div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold">Projects</div>
                  </div>
                  <div className="bg-emerald-950/80 border border-emerald-800/80 p-3 rounded-2xl text-center px-5">
                    <div className="text-2xl font-black text-emerald-400">$2.5M+</div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold">Ad Revenue</div>
                  </div>
                </div>
              )}

              {currentScene === 2 && (
                <div className="inline-flex items-center gap-2 bg-purple-950/90 border border-purple-800/80 px-4 py-2 rounded-2xl text-purple-300 text-xs font-bold">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Rs. 3,500 - 5,000 PKR Masterclasses • Certificates Included</span>
                </div>
              )}

              {currentScene === 3 && (
                <div className="inline-flex items-center gap-2 bg-emerald-950/90 border border-emerald-800/80 px-4 py-2 rounded-2xl text-emerald-300 text-xs font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Meta Ads, Gemini SEO & Conversion Rate Optimization</span>
                </div>
              )}

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                {scenes[currentScene].title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto font-medium leading-relaxed drop-shadow-sm">
                {scenes[currentScene].subtitle}
              </p>

              {/* CALL TO ACTION BUTTON IN SCENE 4 */}
              {currentScene === 4 && (
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  {openConsultationModal && (
                    <button
                      onClick={() => {
                        handleClose();
                        openConsultationModal();
                      }}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg flex items-center gap-2"
                    >
                      <span>Book Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700 hover:bg-emerald-900 rounded-xl flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Agency Desk</span>
                  </a>
                </div>
              )}

            </div>

            {/* NARRATION AUDIO WAVE ANIMATION */}
            {!isMuted && isPlaying && (
              <div className="absolute bottom-16 right-6 z-20 flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-slate-700/80 backdrop-blur-md">
                <Volume2 className="w-3.5 h-3.5 text-blue-400" />
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-1 bg-blue-400 rounded-full animate-bounce h-2" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-1 bg-blue-400 rounded-full animate-bounce h-3" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1 bg-blue-400 rounded-full animate-bounce h-1.5" style={{ animationDelay: '0.3s' }}></span>
                  <span className="w-1 bg-blue-400 rounded-full animate-bounce h-3" style={{ animationDelay: '0.4s' }}></span>
                </div>
                <span className="text-[10px] font-mono text-slate-300 font-bold ml-1">AI Voice On</span>
              </div>
            )}

            {/* PLAY/PAUSE CENTER OVERLAY ON HOVER */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute z-30 p-4 rounded-full bg-blue-600/80 hover:bg-blue-600 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>

          </div>
        ) : (
          /* CUSTOM VIDEO EMBED / LINK MODE */
          <div className="p-8 bg-slate-900 min-h-[350px] flex flex-col justify-center space-y-6 text-white">
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto">
                <Link className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold">Custom MP4 or YouTube Video Link</h4>
              <p className="text-xs text-slate-400">
                Paste your custom video link or YouTube embed URL to replace the interactive intro video.
              </p>
            </div>

            {customVideoUrl ? (
              <div className="aspect-video w-full rounded-2xl bg-black overflow-hidden border border-slate-700">
                {customVideoUrl.includes('youtube.com') || customVideoUrl.includes('youtu.be') ? (
                  <iframe
                    src={customVideoUrl.replace('watch?v=', 'embed/')}
                    title="Nexovia Digital Custom Intro Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video src={customVideoUrl} controls autoPlay className="w-full h-full object-contain" />
                )}
              </div>
            ) : (
              <form onSubmit={handleApplyUrl} className="max-w-md mx-auto w-full space-y-3">
                <input
                  type="url"
                  required
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="e.g. https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  className="w-full px-4 py-3 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md"
                >
                  Embed Custom Intro Video
                </button>
              </form>
            )}
          </div>
        )}

        {/* BOTTOM TIMELINE CONTROLS & CHAPTER SELECTOR */}
        {activeTab === 'interactive' && (
          <div className="bg-slate-900 border-t border-slate-800 p-4 space-y-3">
            
            {/* PROGRESS BAR */}
            <div className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
              <div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* CONTROLS ROW */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              
              <div className="flex items-center gap-3">
                {/* PLAY / PAUSE */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                {/* RESTART */}
                <button
                  onClick={() => {
                    setCurrentScene(0);
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Restart Presentation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* SOUND MUTE / UNMUTE */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-lg transition-colors ${isMuted ? 'bg-red-950/80 text-red-400 border border-red-800' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
                  title={isMuted ? 'Unmute Voice Narration' : 'Mute Voice Narration'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  {scenes[currentScene].title}
                </span>
              </div>

              {/* CHAPTER JUMP BUTTONS */}
              <div className="flex items-center gap-1 overflow-x-auto py-1">
                {scenes.map((sc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectScene(idx)}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-colors whitespace-nowrap ${currentScene === idx ? 'bg-blue-600 text-white' : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'}`}
                  >
                    {idx + 1}. {sc.badge}
                  </button>
                ))}
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

/* 6. PROJECT DETAIL MODAL */
export const ProjectDetailModal: React.FC<{
  project: PortfolioItem | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto space-y-4 pr-2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-16/9 rounded-2xl object-cover"
          />

          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
              {project.category} — {project.client}
            </span>
            <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {project.title}
            </h3>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-bold text-blue-700 dark:text-blue-300">
            📊 Achieved Results: {project.results}
          </div>

          <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
            <p><strong>The Challenge:</strong> {project.challenge}</p>
            <p><strong>Our Solution:</strong> {project.solution}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

/* 7. BLOG ARTICLE MODAL */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export const BlogArticleModal: React.FC<{
  post: BlogPost | null;
  onClose: () => void;
  openConsultationModal?: () => void;
}> = ({ post, onClose, openConsultationModal }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto space-y-6 pr-2">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-16/9 object-cover"
            />
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow-md">
              {post.category}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400 font-bold">{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              {post.title}
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-6">
            {post.content.map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                const headingText = paragraph.replace('### ', '');
                const hLower = headingText.toLowerCase();
                if (hLower.includes('need help') || hLower.includes('ready to') || hLower.includes('book a free strategy')) {
                  return (
                    <div key={idx} className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-900/60 via-indigo-950/80 to-slate-900 border border-blue-500/40 text-center space-y-4 shadow-2xl">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                        Strategy Consultation
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                        {headingText}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                        At Nexovia Digital, we engineer custom growth funnels, AI-driven SEO architectures, and high-converting performance marketing campaigns for growing brands.
                      </p>
                      <button
                        onClick={() => {
                          onClose();
                          if (openConsultationModal) {
                            openConsultationModal();
                          } else {
                            const contactElem = document.getElementById('contact-section');
                            if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
                      >
                        <span>👉 Book a Free Strategy Call with Our Agency Team Today</span>
                      </button>
                    </div>
                  );
                }
                return (
                  <h3 key={idx} className="font-heading text-lg sm:text-xl font-bold text-gray-900 dark:text-white pt-4 pb-1 border-b border-gray-100 dark:border-gray-800">
                    {headingText}
                  </h3>
                );
              }

              if (paragraph.startsWith('- ')) {
                const bulletText = paragraph.replace('- ', '');
                return (
                  <div key={idx} className="flex items-start gap-3 pl-2 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <div className="flex-1">{renderFormattedText(bulletText)}</div>
                  </div>
                );
              }

              if (paragraph.includes('At Nexovia Digital, we')) {
                return null;
              }

              return (
                <p key={idx} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {renderFormattedText(paragraph)}
                </p>
              );
            })}
          </div>

          {/* TAGS */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-2">
              {post.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

/* 7. ADMISSIONS & REGISTRATIONS DASHBOARD MODAL FOR SITE OWNER */
export const AdmissionsDashboardModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enrollments');
      const data = await res.json();
      if (data.success && Array.isArray(data.enrollments)) {
        setEnrollments(data.enrollments);
      } else {
        // Fallback to localStorage if offline
        const local = JSON.parse(localStorage.getItem('nexovia_enrollments') || '[]');
        setEnrollments(local);
      }
    } catch (err) {
      console.error('Error fetching enrollments:', err);
      const local = JSON.parse(localStorage.getItem('nexovia_enrollments') || '[]');
      setEnrollments(local);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchEnrollments();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student registration record?')) return;
    try {
      await fetch(`/api/enrollments/${id}`, { method: 'DELETE' });
      fetchEnrollments();
    } catch (err) {
      setEnrollments((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/enrollments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchEnrollments();
    } catch (err) {
      setEnrollments((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    }
  };

  const filtered = enrollments.filter((e) => {
    const matchesSearch =
      (e.studentName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.studentEmail || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.studentPhone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (e.courseName || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'All' || e.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between space-y-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Nexovia Academy Admissions Portal
              </span>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                Student Course Registrations Dashboard
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/api/enrollments/export.csv"
              download
              className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Export CSV (Wix CRM)</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CONTROLS BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student name, email, phone or course..."
            className="w-full sm:w-80 px-4 py-2 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
          />

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white font-bold"
            >
              <option value="All">All Statuses</option>
              <option value="Pending Payment Contact">Pending Payment Contact</option>
              <option value="Contacted">Contacted</option>
              <option value="Paid & Enrolled">Paid & Enrolled</option>
            </select>

            <button
              onClick={fetchEnrollments}
              className="px-3 py-2 text-xs font-bold bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600/20 transition-colors shrink-0"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>

        {/* REGISTRATIONS TABLE */}
        <div className="overflow-x-auto flex-1 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50">
          <table className="w-full text-left text-xs text-gray-700 dark:text-gray-300 font-sans">
            <thead className="bg-gray-100 dark:bg-gray-800/80 text-[11px] uppercase tracking-wider text-gray-500 font-extrabold border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">Contact Details</th>
                <th className="p-3.5">Course Name & Fee</th>
                <th className="p-3.5">Registration Date</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500 font-medium">
                    No student registrations found.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors">
                    <td className="p-3.5 font-bold text-gray-900 dark:text-white">
                      {item.studentName}
                    </td>
                    <td className="p-3.5 space-y-0.5">
                      <div className="font-medium text-gray-900 dark:text-gray-200">{item.studentEmail}</div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold">{item.studentPhone}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-extrabold text-blue-600 dark:text-blue-400">{item.courseName}</div>
                      <div className="text-[11px] text-amber-500 font-bold">Fee: {item.courseFee}</div>
                    </td>
                    <td className="p-3.5 text-gray-500 font-medium text-[11px]">
                      {item.registrationDateFormatted || item.registrationDate}
                    </td>
                    <td className="p-3.5">
                      <select
                        value={item.status || 'Pending Payment Contact'}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="Pending Payment Contact">Pending Contact</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Paid & Enrolled">Paid & Enrolled</option>
                      </select>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-xs text-rose-600 hover:text-rose-800 font-bold hover:bg-rose-100 dark:hover:bg-rose-950/50 rounded-lg transition-colors"
                        title="Delete record"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER WIX NOTE */}
        <div className="pt-2 text-center text-[11px] text-gray-500">
          Total Registrations Saved: <strong className="text-blue-600 dark:text-blue-400">{enrollments.length}</strong> | Auto-Forwarding to Wix Webhook Enabled when <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">WIX_WEBHOOK_URL</code> is set.
        </div>

      </div>
    </div>
  );
};
