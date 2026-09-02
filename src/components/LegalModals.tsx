import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface LegalModalsProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] flex flex-col justify-between">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="overflow-y-auto space-y-4 pr-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                Privacy Policy
              </h3>
            </div>
            
            <p className="text-xs text-gray-500">Effective Date: January 1, 2026</p>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                At <strong>Nexovia Digital</strong>, accessible from our official agency website, the privacy of our visitors and clients is one of our main priorities.
              </p>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white pt-2">
                1. Information We Collect
              </h4>
              <p>
                We collect personal information that you voluntarily provide when inquiring about digital marketing services, requesting strategy consultations, or enrolling in Nexovia Academy courses. This includes your name, email address, phone/WhatsApp number, and business details.
              </p>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white pt-2">
                2. How We Use Your Information
              </h4>
              <p>
                Your information is used strictly to communicate regarding agency campaigns, deliver consultation insights or course credentials, and provide direct client support. We do NOT sell or share your personal data with third-party advertisers.
              </p>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white pt-2">
                3. Contact Information
              </h4>
              <p>
                For privacy inquiries, contact founder <strong>{COMPANY_INFO.owner}</strong> at <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 dark:text-blue-400 underline">{COMPANY_INFO.email}</a> or phone <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-blue-600 dark:text-blue-400 underline">{COMPANY_INFO.phone}</a>.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto space-y-4 pr-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <FileText className="w-6 h-6" />
              <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                Terms & Conditions
              </h3>
            </div>

            <p className="text-xs text-gray-500">Effective Date: January 1, 2026</p>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Welcome to <strong>Nexovia Digital</strong>! By using our website, requesting agency services, or enrolling in academy training programs, you agree to comply with the following terms.
              </p>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white pt-2">
                1. Agency Services & Retainers
              </h4>
              <p>
                Agency retainers and digital marketing projects are executed according to individualized client scope agreements. Campaign deliverables are optimized based on agreed milestones.
              </p>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white pt-2">
                2. Course Enrollment & Intellectual Property
              </h4>
              <p>
                Course training materials, videos, and Canva/Notion templates provided by Nexovia Academy are licensed strictly for personal or internal agency use. Redistribution or resale is strictly prohibited.
              </p>
              <h4 className="font-heading font-bold text-gray-900 dark:text-white pt-2">
                3. Ownership & Copyright
              </h4>
              <p>
                © 2026 Nexovia Digital. All Rights Reserved. Headquartered in Sialkot, Punjab, Pakistan.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
