import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Map, Share2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selection: 'Digital Marketing Course',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject = encodeURIComponent(`[Website Contact] ${formData.selection} - ${formData.fullName}`);
    const mailBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail Address: ${formData.email}\nPhone / WhatsApp: ${formData.phone || 'N/A'}\nCourse/Service Selected: ${formData.selection}\n\nMessage:\n${formData.message}`
    );
    
    window.open(`mailto:${COMPANY_INFO.email}?subject=${mailSubject}&body=${mailBody}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selection: 'Digital Marketing Course',
        message: '',
      });
    }, 6000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Abeera Nadeem Bajwa,\n\nName: ${formData.fullName || 'Guest'}\nSelection: ${formData.selection}\nMessage: ${formData.message || 'I would like to inquire about this program/service.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}?text=${text}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-20 bg-white dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Nexovia Digital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Let's Grow Your Digital Presence
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
            Have a project in mind or want to join a course? Get in touch with Nexovia Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* CONTACT INFO & SOCIAL LINKS (LEFT) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gray-50/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* WHATSAPP & PHONE */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}?text=${encodeURIComponent('Hello Abeera, I am reaching out from Nexovia Digital website.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 hover:border-blue-500 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400">Phone / WhatsApp</span>
                    <p className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {COMPANY_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 hover:border-blue-500 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400">Email Address</span>
                    <p className="text-base font-bold text-gray-900 dark:text-white break-all group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400">Headquarters</span>
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      {COMPANY_INFO.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* SOCIAL MEDIA CONNECT */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <div className="text-xs font-extrabold uppercase text-gray-500 dark:text-gray-400 tracking-wider flex items-center gap-1.5">
                  <Share2 className="w-4 h-4 text-blue-500" />
                  <span>Connect On Social Media</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-pink-50 dark:bg-pink-950/80 border border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-300 text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                  </a>

                  <a
                    href={COMPANY_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <span>Email</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* CONTACT FORM (RIGHT) */}
          <div className="lg:col-span-7 bg-gray-50/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 backdrop-blur-sm">
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                Enroll or Request Service
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 font-sans">
                Select your preferred course or agency service to get instant details and enrollment guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NAME */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Abeera Nadeem"
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* PHONE */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +92 347 6811866"
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                  />
                </div>

                {/* SELECT COURSE OR SERVICE */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                    Select Course or Service *
                  </label>
                  <select
                    value={formData.selection}
                    onChange={(e) => setFormData({ ...formData, selection: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                  >
                    <optgroup label="Paid Courses (1 Month)">
                      <option value="Digital Marketing Course">Digital Marketing</option>
                      <option value="Social Media Marketing Course">Social Media Marketing</option>
                      <option value="Meta Ads Course">Meta Ads</option>
                      <option value="Google Ads Course">Google Ads</option>
                      <option value="SEO Course">SEO</option>
                      <option value="Graphic Designing Course">Graphic Designing</option>
                      <option value="Canva Masterclass Course">Canva Masterclass</option>
                      <option value="Web Development Course">Web Development</option>
                      <option value="WordPress Course">WordPress</option>
                      <option value="Fiverr Freelancing Course">Fiverr Freelancing</option>
                      <option value="Upwork Freelancing Course">Upwork Freelancing</option>
                      <option value="Amazon VA Course">Amazon VA</option>
                      <option value="eBay Course">eBay</option>
                      <option value="Content Writing Course">Content Writing</option>
                      <option value="Video Editing Course">Video Editing</option>
                      <option value="YouTube Automation Course">YouTube Automation</option>
                    </optgroup>
                    <optgroup label="Agency Services">
                      <option value="Website Development Service">Website Development</option>
                      <option value="Landing Page Design Service">Landing Page Design</option>
                      <option value="WordPress Development Service">WordPress Development</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="Meta Ads Management Service">Meta Ads Management</option>
                      <option value="Google Ads Management Service">Google Ads Management</option>
                      <option value="Social Media Management Service">Social Media Management</option>
                      <option value="Graphic Design Service">Graphic Design</option>
                      <option value="Logo Design Service">Logo Design</option>
                      <option value="Brand Identity Design Service">Brand Identity Design</option>
                      <option value="Content Writing Service">Content Writing</option>
                      <option value="Video Editing Service">Video Editing</option>
                      <option value="Business Consultation Service">Business Consultation</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your background, requirements, or business goals..."
                  className="w-full px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white font-sans"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-extrabold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/90 border border-emerald-700 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your inquiry has been generated. We will respond promptly.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
