import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

export const FloatingControls: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const defaultText = encodeURIComponent(
      'Hi Nexovia Digital! I am visiting your website and would like to inquire about your services/courses.'
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${defaultText}`, '_blank');
  };

  const handleSendLiveChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;
    const text = encodeURIComponent(chatMessage);
    window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${text}`, '_blank');
    setChatMessage('');
    setChatOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <div className="relative group">
        <button
          onClick={handleWhatsAppClick}
          className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all flex items-center justify-center relative"
          title="Chat on WhatsApp (+92 347 6811866)"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-ping"></span>
        </button>

        {/* TOOLTIP ON HOVER */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:block bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-gray-800">
          Chat with Abeera Nadeem (+92 347 6811866)
        </div>
      </div>

      {/* LIVE CHAT WIDGET PLACEHOLDER POPUP */}
      {chatOpen && (
        <div className="w-80 sm:w-88 bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-5 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-heading font-bold text-sm text-gray-900 dark:text-white">
                Live Support Desk
              </span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/60 p-3 rounded-2xl text-xs text-gray-700 dark:text-gray-300 space-y-1">
            <p className="font-bold text-blue-600 dark:text-blue-400">Nexovia Assistant:</p>
            <p>Hi! How can we assist your business growth today?</p>
          </div>

          <form onSubmit={handleSendLiveChat} className="flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

    </div>
  );
};
