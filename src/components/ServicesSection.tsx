import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import { DynamicIcon } from './DynamicIcon';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  openConsultationModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  openConsultationModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Content', 'Strategy'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services-section" className="py-20 bg-white dark:bg-[#080B11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Digital Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Our Digital Marketing Services
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
            End-to-end digital marketing, web engineering, graphic design, and brand identity solutions tailored to grow your online presence.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* SERVICES GRID */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 font-medium">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-gray-50/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-blue-500/80 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between h-full backdrop-blur-sm"
              >
                {/* POPULAR BADGE IF APPLICABLE */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md pointer-events-none">
                    Popular Service
                  </div>
                )}

                <div className="space-y-4">
                  {/* PREMIUM ICON */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <DynamicIcon name={service.iconName} className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* CATEGORY BADGE */}
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 rounded-md">
                    {service.category}
                  </span>

                  {/* SHORT DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 font-sans">
                    {service.shortDescription}
                  </p>

                  {/* KEY DELIVERABLES */}
                  <ul className="space-y-1.5 pt-3 border-t border-gray-200/80 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400">
                    {service.keyDeliverables.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-6 mt-auto flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-3 px-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-white bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/923476811866?text=${encodeURIComponent(`Hello Nexovia Digital, I would like to discuss a project for ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1 shrink-0"
                    title="Discuss on WhatsApp"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM CONSULTATION CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-blue-800/60">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-widest">
              <Briefcase className="w-4 h-4" />
              <span>Tailored Digital Solutions</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold">
              Need a custom digital solution?
            </h3>
            <p className="text-sm text-blue-100 max-w-xl">
              Talk to Nexovia Digital. We help you design, engineer, and scale custom digital strategies tailored to your exact business objectives.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923476811866?text=Hello%20Nexovia%20Digital,%20I%20need%20a%20custom%20digital%20solution%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={openConsultationModal}
              className="px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/20 transition-all hover:-translate-y-0.5"
            >
              Book Strategy Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
