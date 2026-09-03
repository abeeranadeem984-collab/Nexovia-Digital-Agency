import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  Search,
  Monitor,
  ShieldCheck,
  Layers,
  PlayCircle,
  Users,
  MessageSquare,
  Star,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/agencyData';

interface CoursesSectionProps {
  onEnrollCourse?: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onEnrollCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'CRM & Automation', 'E-Commerce', 'Development', 'Design', 'Content', 'Freelancing'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.subtitle && course.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses-section" className="py-20 bg-white dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <span>Nexovia Digital Academy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Professional & Practical Digital Courses
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
            Build in-demand practical digital skills with hands-on training, expert guidance, and personalized mentorship.
          </p>

          {/* PAYMENT & ENROLLMENT NOTICE BANNER */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-semibold max-w-2xl text-left sm:text-center mt-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>Direct enrollment & payment confirmation via official WhatsApp. Contact our team to secure your seat.</span>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
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
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* COURSES GRID */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 font-medium">No courses found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 underline cursor-pointer"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredCourses.map((course) => {
              const isEbayPremium = course.isPremium;

              return (
                <div
                  key={course.id}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-sm ${
                    isEbayPremium
                      ? 'bg-gradient-to-b from-amber-500/10 via-gray-50/95 to-gray-50/90 dark:from-amber-950/30 dark:via-gray-900/90 dark:to-gray-900/90 border-2 border-amber-500/60 dark:border-amber-500/50 shadow-xl shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500'
                      : 'bg-gray-50/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-blue-500/80 shadow-md hover:shadow-2xl hover:shadow-blue-500/10'
                  }`}
                >
                  {/* PREMIUM TOP RIBBON FOR EBAY */}
                  {isEbayPremium && (
                    <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-current text-slate-950" />
                      <span>Advanced Premium Course — High Demand</span>
                      <Star className="w-3.5 h-3.5 fill-current text-slate-950" />
                    </div>
                  )}

                  <div>
                    {/* COURSE IMAGE & BADGES */}
                    <div className="relative aspect-16/9 w-full bg-gray-900 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent"></div>

                      {/* TOP BADGES */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg shadow-sm ${
                          isEbayPremium ? 'bg-amber-500 text-slate-950 font-black' : 'bg-blue-600 text-white'
                        }`}>
                          Duration: {course.duration || '1 Month'}
                        </span>
                        <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                          <Monitor className="w-3 h-3" />
                          <span>Practical Online Training</span>
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1 ${
                          isEbayPremium ? 'bg-yellow-400 text-slate-950' : 'bg-amber-500 text-slate-950'
                        }`}>
                          <Award className="w-3 h-3" />
                          <span>Certified</span>
                        </span>
                      </div>

                      {/* LEVEL OVERLAY */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                        <span className={`px-2 py-0.5 rounded backdrop-blur-md border text-[11px] ${
                          isEbayPremium 
                            ? 'bg-amber-950/80 border-amber-400/50 text-amber-300 font-extrabold'
                            : 'bg-black/60 border-white/20 text-white'
                        }`}>
                          Level: {course.level}
                        </span>
                        <span className="text-amber-300 text-[11px] font-extrabold flex items-center gap-1 truncate max-w-[65%]">
                          <Sparkles className="w-3 h-3 shrink-0" />
                          <span className="truncate">By {course.instructor}</span>
                        </span>
                      </div>
                    </div>

                    {/* COURSE CONTENT */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                            isEbayPremium
                              ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                              : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900'
                          }`}>
                            {course.category}
                          </span>
                          {course.badge && (
                            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">
                              • {course.badge}
                            </span>
                          )}
                        </div>

                        <h3 className={`font-heading text-xl font-bold leading-snug transition-colors ${
                          isEbayPremium
                            ? 'text-amber-950 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                            : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                        }`}>
                          {course.name}
                        </h3>

                        {course.subtitle && (
                          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 leading-snug">
                            {course.subtitle}
                          </p>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                        {course.description}
                      </p>

                      {/* SYLLABUS & HIGHLIGHTS */}
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-800 space-y-2.5">
                        <div className={`text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 ${
                          isEbayPremium ? 'text-amber-600 dark:text-amber-400' : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          <Layers className="w-3.5 h-3.5" />
                          <span>{isEbayPremium ? 'Advanced Training Syllabus' : 'Practical Training Includes'}</span>
                        </div>

                        <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                          {(course.highlights || course.syllabus.slice(0, 5)).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                isEbayPremium ? 'text-amber-500' : 'text-emerald-500'
                              }`} />
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* TARGET STUDENTS IF AVAILABLE */}
                      {course.targetStudents && course.targetStudents.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                            Who is this for:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {course.targetStudents.slice(0, 4).map((ts, idx) => (
                              <span key={idx} className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded font-medium">
                                {ts}
                              </span>
                            ))}
                            {course.targetStudents.length > 4 && (
                              <span className="text-[10px] text-gray-400 font-semibold px-1 py-0.5">
                                +{course.targetStudents.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* PRICE DISPLAY */}
                      <div className={`pt-3.5 flex items-center justify-between border-t ${
                        isEbayPremium ? 'border-amber-200 dark:border-amber-900/60' : 'border-gray-200 dark:border-gray-800'
                      }`}>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block">
                            Course Fee
                          </span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                            {isEbayPremium ? '★ Full Mentorship Included' : '✓ Mentorship Included'}
                          </span>
                        </div>
                        <div className="text-right">
                          {course.pricePKR && (
                            <div className="flex items-baseline gap-2 justify-end">
                              <span className={`font-heading text-2xl font-black ${
                                isEbayPremium
                                  ? 'text-amber-600 dark:text-amber-400'
                                  : 'text-blue-600 dark:text-blue-400'
                              }`}>
                                {course.pricePKR}
                              </span>
                              {course.originalPricePKR && (
                                <span className="text-xs text-gray-400 line-through font-semibold">
                                  {course.originalPricePKR}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* ACTION BUTTONS: ENROLL NOW & DETAILS */}
                  <div className="p-6 pt-0 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        onClick={() => onEnrollCourse && onEnrollCourse(course)}
                        className={`w-full py-3 px-3 text-xs sm:text-sm font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer ${
                          isEbayPremium
                            ? 'text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 shadow-amber-500/25 hover:shadow-amber-500/40 font-black'
                            : 'text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-blue-600/20 hover:shadow-blue-600/30'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Enroll Now</span>
                      </button>

                      <a
                        href={`https://wa.me/923476811866?text=${encodeURIComponent(
                          `Hello Nexovia Digital, I want to enroll in ${course.name} (${course.pricePKR}). Please send me the payment details and course information.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enroll in ${course.name} on WhatsApp`}
                        title={`Enroll in ${course.name} on WhatsApp`}
                        className="w-full py-3 px-3 text-xs sm:text-sm font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-emerald-600/20 hover:shadow-emerald-600/30 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    {onEnrollCourse && (
                      <button
                        onClick={() => onEnrollCourse(course)}
                        className="w-full py-2 px-3 text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>View Details & Syllabus</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}

                    <p className="text-[10px] text-center text-gray-500 dark:text-gray-400 font-medium">
                      Direct registration form & instant WhatsApp assistance available
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
