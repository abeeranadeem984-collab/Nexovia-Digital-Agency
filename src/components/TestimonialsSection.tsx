import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 bg-white dark:bg-[#080b11] transition-colors duration-300 relative overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Trusted by Leaders & Entrepreneurs
          </h2>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative bg-gray-50/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl backdrop-blur-md">
          
          <Quote className="w-12 h-12 text-blue-500/20 dark:text-blue-400/20 absolute top-6 left-6 pointer-events-none" />

          <div className="space-y-6 text-center max-w-3xl mx-auto">
            
            {/* STARS */}
            <div className="flex items-center justify-center text-amber-400 gap-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* QUOTE CONTENT */}
            <p className="text-base sm:text-xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed">
              "{currentTestimonial.content}"
            </p>

            {/* RESULTS METRIC BADGE */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-extrabold">
              🏆 Verified Outcome: {currentTestimonial.results}
            </div>

            {/* CLIENT AVATAR & INFO */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.clientName}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
              />
              <div className="text-left">
                <h4 className="font-heading font-bold text-gray-900 dark:text-white text-base">
                  {currentTestimonial.clientName}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {currentTestimonial.role} — <span className="text-blue-600 dark:text-blue-400 font-semibold">{currentTestimonial.company}</span>
                </p>
              </div>
            </div>

          </div>

          {/* NAV CONTROLS */}
          <div className="flex items-center justify-between mt-8 pt-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* DOT INDICATORS */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
