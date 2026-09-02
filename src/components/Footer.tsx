import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowUp, ShieldCheck, FileText, Share2, GraduationCap } from 'lucide-react';
import { PageTab } from '../types';
import { COMPANY_INFO, MANAGER_INFO, COURSES_DATA, SERVICES_DATA } from '../data/agencyData';
import { NexoviaLogo } from './NexoviaLogo';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  openLegalModal: (type: 'privacy' | 'terms') => void;
  openAdmissionsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openLegalModal, openAdmissionsModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* BACKGROUND ACCENT LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* COL 1: AGENCY PROFILE */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <NexoviaLogo size="md" isDark={true} showTagline={true} />
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              {COMPANY_INFO.tagline}. Premier digital marketing agency, full-stack web development studio, and high-income skills academy founded by Abeera Nadeem Bajwa in Sialkot, Pakistan.
            </p>

            <div className="pt-1 text-xs text-gray-400 font-sans space-y-1">
              <div>
                <span className="text-gray-500">Founder & Managing Director:</span>{' '}
                <strong className="text-gray-200 font-bold">{COMPANY_INFO.owner}</strong>
              </div>
              <div>
                <span className="text-gray-500">Agency Manager:</span>{' '}
                <strong className="text-emerald-400 font-bold">{MANAGER_INFO.name}</strong>
              </div>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="pt-3 space-y-2">
              <div className="text-[11px] font-extrabold uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Follow Our Social Channels</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 hover:bg-emerald-800 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800 text-blue-300 hover:bg-blue-800 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-pink-950/80 border border-pink-800 text-pink-300 hover:bg-pink-800 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-300 hover:bg-sky-800 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* COL 2: DIGITAL SERVICES */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-extrabold text-white uppercase tracking-wider">
              Digital Services
            </h3>
            <ul className="space-y-1.5 text-xs font-medium text-gray-400">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setActiveTab('services');
                      scrollToTop();
                    }}
                    className="hover:text-blue-400 transition-colors text-left truncate max-w-full block"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    scrollToTop();
                  }}
                  className="text-blue-400 font-bold hover:underline pt-1 block"
                >
                  View All 11 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* COL 3: PROFESSIONAL COURSES */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-extrabold text-white uppercase tracking-wider">
              Professional Courses
            </h3>
            <ul className="space-y-1.5 text-xs font-medium text-gray-400">
              {COURSES_DATA.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setActiveTab('courses');
                      scrollToTop();
                    }}
                    className="hover:text-blue-400 transition-colors text-left truncate max-w-full block"
                  >
                    • {c.name} {c.isPremium ? '(PKR 15,000)' : '(PKR 6,000)'}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setActiveTab('courses');
                    scrollToTop();
                  }}
                  className="text-blue-400 font-bold hover:underline pt-1 block"
                >
                  Enroll via WhatsApp →
                </button>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT INFORMATION & NEWSLETTER */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs font-extrabold text-white uppercase tracking-wider">
              Contact Information
            </h3>
            
            <div className="space-y-2.5 text-xs text-gray-300 font-sans">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}?text=${encodeURIComponent('Hello Abeera, I am contacting you from Nexovia Digital website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-bold break-all">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Newsletter Subscription</span>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email for updates"
                    required
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 pr-10 font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {newsletterSubscribed && (
                  <div className="p-2 rounded-lg bg-emerald-950/90 border border-emerald-800 text-emerald-300 text-[11px]">
                    ✓ Subscribed to Nexovia updates!
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

        {/* BOTTOM FOOTER BASELINE & COPYRIGHT */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans">
          <div>
            Copyright © Nexovia Digital. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms & Conditions</span>
            </button>
            {openAdmissionsModal && (
              <button
                onClick={openAdmissionsModal}
                className="hover:text-amber-400 text-blue-400 font-bold flex items-center gap-1 transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Admissions Portal</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-gray-300 hover:text-white transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
