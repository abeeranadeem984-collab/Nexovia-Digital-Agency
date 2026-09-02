import React, { useState } from 'react';
import { Phone, Sun, Moon, Menu, X, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/agencyData';
import { NexoviaLogo } from './NexoviaLogo';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: string; label: string; tab: PageTab }[] = [
    { id: 'nav-home', label: 'Home', tab: 'home' },
    { id: 'nav-services', label: 'Services', tab: 'services' },
    { id: 'nav-courses', label: 'Courses', tab: 'courses' },
    { id: 'nav-about', label: 'About', tab: 'about' },
    { id: 'nav-why-us', label: 'Why Us', tab: 'about' },
    { id: 'nav-contact', label: 'Contact', tab: 'contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-[#080B11]/90 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* OFFICIAL AGENCY LOGO */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group py-1"
        >
          <NexoviaLogo size="md" showTagline={false} />
        </div>

        {/* DESKTOP NAV MENU */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.tab)}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeTab === item.tab && (item.id === 'nav-about' ? true : item.id !== 'nav-why-us')
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-bold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* HEADER RIGHT ACTIONS */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* SOCIAL MEDIA LINKS */}
          <div className="hidden sm:flex items-center gap-1">
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              title="Facebook"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* DARK / LIGHT MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>

          {/* WHATSAPP CTA BUTTON */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}?text=${encodeURIComponent('Hello Nexovia Digital, I would like to inquire about your services and courses.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.2 text-xs font-extrabold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER NAV */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0c1017] border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.tab)}
                className={`px-4 py-3 text-left text-sm font-semibold rounded-xl transition-colors ${
                  activeTab === item.tab && (item.id === 'nav-about' ? true : item.id !== 'nav-why-us')
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a
              href={COMPANY_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappClean || '923476811866'}?text=${encodeURIComponent('Hello Abeera, I would like to get in touch with you.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/20"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Now: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      )}
    </header>
  );
};
