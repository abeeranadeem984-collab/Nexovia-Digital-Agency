import React, { useState, useEffect, useRef, useId } from 'react';
import {
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Video,
  ShieldCheck,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
  UserCheck,
  MessageSquare,
  BookOpen,
  Briefcase,
  Layers,
  GraduationCap,
  Headphones
} from 'lucide-react';
import { PageTab } from '../types';
import { COMPANY_INFO, MANAGER_INFO, CLIENT_LOGOS } from '../data/agencyData';

interface HeroProps {
  setActiveTab: (tab: PageTab) => void;
  openConsultationModal: () => void;
  openVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  setActiveTab,
  openConsultationModal,
  openVideoModal,
}) => {
  const componentId = useId();
  // INTRO VIDEO INTERACTIVE PLAYER STATE
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const videoSlides = [
    {
      id: 0,
      badge: 'Official Introduction',
      title: 'Welcome to Nexovia Digital',
      subtitle: 'Professional digital services and practical digital courses for modern online growth.',
      narration: 'Welcome to Nexovia Digital. Professional digital services and career-focused digital courses for online growth.',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      isOfficialIntro: true,
    },
    {
      id: 1,
      badge: 'Founder & Managing Director',
      title: 'Abeera Nadeem Bajwa',
      subtitle: 'Founder & Managing Director, Nexovia Digital',
      narration: 'Meet Abeera Nadeem Bajwa, Founder and Managing Director of Nexovia Digital.',
      bgImage: COMPANY_INFO.ownerImage,
      isProfile: true,
    },
    {
      id: 2,
      badge: 'Agency Management',
      title: 'Himani Bhandari',
      subtitle: 'Agency Manager • Digital Copywriting, Web Content & UI/UX Design',
      narration: 'Meet Himani Bhandari, Agency Manager at Nexovia Digital leading copywriting, web content, and UI/UX design strategy.',
      bgImage: MANAGER_INFO.image,
      isManagerProfile: true,
    },
    {
      id: 3,
      badge: 'Core Focus Areas',
      title: 'Professional Services & Practical Training',
      subtitle: 'Helping businesses scale their reach and helping individuals master high-demand digital skills.',
      narration: 'Nexovia Digital offers practical digital training, professional digital services, and client-focused solutions.',
      bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      isPillars: true,
    },
    {
      id: 4,
      badge: 'Consultation & Inquiries',
      title: 'Discuss Your Project or Course Plan',
      subtitle: 'Connect with our team to explore digital marketing services or career-ready skill programs.',
      narration: 'Connect with Nexovia Digital today to discuss your digital marketing project or enroll in a professional course.',
      bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      isCTA: true,
    },
  ];

  // AUTOMATIC SLIDE PROGRESSION
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100;
    const increment = (intervalTime / 5000) * 100; // 5 seconds per slide

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((slide) => (slide + 1) % videoSlides.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, videoSlides.length]);

  // VOICE NARRATION VIA SPEECH SYNTHESIS (SAFE CLEANUP ON UNMOUNT)
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    // Always cancel previous speech
    window.speechSynthesis.cancel();

    if (isPlaying && !isMuted) {
      try {
        const textToSpeak = videoSlides[currentSlide]?.narration;
        if (textToSpeak) {
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          speechRef.current = utterance;
          window.speechSynthesis.speak(utterance);
        }
      } catch (err) {
        // Gracefully ignore browser restriction errors
      }
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentSlide, isMuted, isPlaying]);

  // Non-numeric trust highlights replacing unverified metrics
  const heroTrustHighlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-sky-300 shrink-0" />,
      title: 'Practical Digital Training',
      desc: 'Career-Focused Skill Courses',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-300 shrink-0" />,
      title: 'Professional Digital Services',
      desc: 'Marketing, Web & Creative Solutions',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-300 shrink-0" />,
      title: 'Client-Focused Solutions',
      desc: 'Tailored Strategies for Growth',
    },
    {
      icon: <Headphones className="w-5 h-5 text-indigo-300 shrink-0" />,
      title: 'Direct WhatsApp Support',
      desc: 'Responsive Guidance & Consultation',
    },
  ];

  return (
    <section
      id="hero-section"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white transition-colors duration-300"
    >
      {/* GRID OVERLAY BACKGROUND */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true"></div>

      {/* AMBIENT GLOW ORBS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BADGE / SMALL LABEL */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-100 text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span>NEXOVIA DIGITAL</span>
          </div>
        </div>

        {/* HEADLINE & SUBTEXT */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-10">
          {/* EXACT H1 AS SPECIFIED */}
          <h1
            id={`hero-heading-${componentId}`}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.15]"
          >
            Digital Services & Professional Courses for Online Growth
          </h1>

          {/* EXACT SUBTEXT AS SPECIFIED */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-medium">
            We help businesses grow their digital presence through professional marketing, web development, branding and creative services, while helping individuals build practical digital skills through career-focused courses.
          </p>

          {/* THREE MAIN CTA BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            
            {/* 1. EXPLORE SERVICES */}
            <button
              id="hero-explore-services-btn"
              type="button"
              onClick={() => setActiveTab('services')}
              className="px-6 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg shadow-amber-400/20 transition-all hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-blue-950 cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* 2. VIEW COURSES */}
            <button
              id="hero-view-courses-btn"
              type="button"
              onClick={() => setActiveTab('courses')}
              className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-950 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>View Courses</span>
            </button>

            {/* 3. CHAT ON WHATSAPP */}
            <a
              id="hero-whatsapp-cta-btn"
              href="https://wa.me/923476811866"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Nexovia Digital on WhatsApp"
              title="Chat with Nexovia Digital on WhatsApp"
              className="px-6 py-3.5 text-sm sm:text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-blue-950"
            >
              <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

          </div>
        </div>

        {/* HERO MEDIA: FOUNDER & BRAND SHOWCASE (LEFT) + INTERACTIVE INTRO SLIDES (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mt-12">
          
          {/* OFFICIAL AGENCY BRAND SHOWCASE & FOUNDER PHOTO CARD (LEFT) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-blue-500/30 rounded-3xl p-6 text-center backdrop-blur-md relative overflow-hidden group shadow-2xl flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

            <div className="flex flex-col items-center justify-center space-y-4">
              
              {/* LEADERSHIP & MANAGEMENT PHOTO CARD */}
              <div className="flex items-center gap-3 w-full p-3.5 rounded-2xl bg-blue-950/80 border border-blue-800/80 text-left">
                <div className="flex -space-x-3 shrink-0">
                  <img
                    src={COMPANY_INFO.ownerImage}
                    alt="Abeera Nadeem Bajwa - Founder & Managing Director of Nexovia Digital"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover border-2 border-blue-400 shadow-md relative z-20"
                    title="Founder & Managing Director: Abeera Nadeem Bajwa"
                  />
                  <img
                    src={MANAGER_INFO.image}
                    alt="Himani Bhandari - Agency Manager at Nexovia Digital"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover border-2 border-emerald-400 shadow-md relative z-10"
                    title={`Agency Manager: ${MANAGER_INFO.name}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-sky-300 flex items-center gap-1 truncate">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">{COMPANY_INFO.owner}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-300 truncate">
                    Founder & Managing Director, Nexovia Digital
                  </div>
                  <div className="text-[11px] font-bold text-emerald-300 flex items-center gap-1 mt-0.5 truncate">
                    <UserCheck className="w-3 h-3 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">Manager: {MANAGER_INFO.name}</span>
                  </div>
                </div>
              </div>

              {/* HERO SERVICE HIGHLIGHTS (EXACT WORDING REQUESTED) */}
              <div className="w-full space-y-2 text-left text-xs text-blue-100">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="font-medium">Digital Marketing & Paid Advertising</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="font-medium">Web Development & E-Commerce Solutions</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="font-medium">Practical Digital Skills Training</span>
                </div>
              </div>

              {/* LOCATION BADGE (WITHOUT UNVERIFIED BADGE WORD) */}
              <div className="w-full pt-1 flex items-center justify-center gap-2 text-xs font-bold text-blue-200 bg-blue-900/60 px-4 py-2.5 rounded-xl border border-blue-700/60">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span>Sialkot, Punjab, Pakistan</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE INTRO VIDEO PLAYER SHOWCASE (RIGHT) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-video w-full rounded-3xl bg-slate-950 overflow-hidden border-2 border-blue-500/60 shadow-2xl group transition-all">
              
              {/* VIDEO BACKGROUND IMAGE / FRAME */}
              <img
                src={videoSlides[currentSlide].bgImage}
                alt={videoSlides[currentSlide].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 scale-105 transition-all duration-700 filter brightness-90 contrast-110"
              />

              {/* OVERLAY GRADIENTS */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" aria-hidden="true"></div>

              {/* TOP CONTROL BADGES */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-3 py-1.5 rounded-xl text-xs font-extrabold backdrop-blur-md shadow-md border border-blue-400/40">
                  <Video className="w-3.5 h-3.5 text-amber-300 animate-pulse" aria-hidden="true" />
                  <span>{videoSlides[currentSlide].badge}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="hero-video-mute-toggle-btn"
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label={isMuted ? 'Unmute Audio Narration' : 'Mute Audio Narration'}
                    title={isMuted ? 'Unmute Audio Narration' : 'Mute Audio Narration'}
                    className={`p-2 rounded-xl text-xs font-bold backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                      isMuted ? 'bg-slate-900/80 text-slate-400 border border-slate-700 hover:text-white' : 'bg-blue-600 text-white border border-blue-400'
                    }`}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4 animate-bounce" aria-hidden="true" />}
                  </button>

                  <button
                    id="hero-video-fullscreen-modal-btn"
                    type="button"
                    onClick={openVideoModal}
                    aria-label="Open fullscreen interactive presentation"
                    title="Fullscreen Interactive Mode"
                    className="p-2 rounded-xl bg-slate-900/80 text-white border border-slate-700 hover:bg-blue-600 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* CENTER OVERLAY TEXT & FOUNDER/MANAGER CARDS */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white z-10 space-y-3">
                
                {/* OFFICIAL INTRO BRAND BADGE FOR SLIDE 0 */}
                {currentSlide === 0 && (
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 p-2.5 px-4 rounded-2xl border border-sky-400/50 shadow-2xl backdrop-blur-md mx-auto animate-in zoom-in-95 duration-300">
                    <Sparkles className="w-4 h-4 text-amber-300 animate-spin" aria-hidden="true" />
                    <span className="text-xs font-bold text-white">Nexovia Digital — Digital Services & Practical Skills</span>
                  </div>
                )}

                {/* FOUNDER AVATAR BADGE FOR SLIDE 1 */}
                {currentSlide === 1 && (
                  <div className="inline-flex items-center gap-3 bg-slate-900/90 p-2.5 px-4 rounded-2xl border border-blue-400/50 shadow-2xl backdrop-blur-md mx-auto animate-in zoom-in-95 duration-300">
                    <img
                      src={COMPANY_INFO.ownerImage}
                      alt="Abeera Nadeem Bajwa - Founder"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-blue-400 shadow-md"
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-sky-300">Abeera Nadeem Bajwa</div>
                      <div className="text-[11px] text-slate-300">Founder & Managing Director, Nexovia Digital</div>
                    </div>
                  </div>
                )}

                {/* MANAGER AVATAR BADGE FOR SLIDE 2 */}
                {currentSlide === 2 && (
                  <div className="inline-flex items-center gap-3 bg-slate-900/90 p-2.5 px-4 rounded-2xl border border-emerald-400/50 shadow-2xl backdrop-blur-md mx-auto animate-in zoom-in-95 duration-300">
                    <img
                      src={MANAGER_INFO.image}
                      alt={MANAGER_INFO.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-emerald-400 shadow-md"
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-emerald-300">{MANAGER_INFO.name}</div>
                      <div className="text-[11px] text-slate-300">Agency Manager • Nexovia Digital</div>
                    </div>
                  </div>
                )}

                {/* PILLARS SHOWCASE FOR SLIDE 3 (REPLACED UNVERIFIED METRICS) */}
                {currentSlide === 3 && (
                  <div className="flex flex-wrap justify-center gap-2 animate-in fade-in duration-300 max-w-md">
                    <div className="bg-blue-950/90 border border-blue-700 p-2 px-3 rounded-xl text-center">
                      <div className="text-xs font-extrabold text-amber-300">Practical Training</div>
                      <div className="text-[9px] text-slate-300">Career-Focused Courses</div>
                    </div>
                    <div className="bg-blue-950/90 border border-blue-700 p-2 px-3 rounded-xl text-center">
                      <div className="text-xs font-extrabold text-sky-300">Digital Services</div>
                      <div className="text-[9px] text-slate-300">Marketing & Web Solutions</div>
                    </div>
                    <div className="bg-blue-950/90 border border-blue-700 p-2 px-3 rounded-xl text-center">
                      <div className="text-xs font-extrabold text-emerald-300">Client Focused</div>
                      <div className="text-[9px] text-slate-300">Measurable Outcomes</div>
                    </div>
                  </div>
                )}

                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {videoSlides[currentSlide].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto font-medium leading-relaxed drop-shadow-sm">
                  {videoSlides[currentSlide].subtitle}
                </p>

                {/* SLIDE CTA BUTTON */}
                {(currentSlide === 3 || currentSlide === 4) && (
                  <button
                    id="hero-slide-consultation-btn"
                    type="button"
                    onClick={openConsultationModal}
                    className="mt-2 px-5 py-2.5 text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* BOTTOM CONTROL BAR */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-20 space-y-2">
                
                {/* PROGRESS BAR */}
                <div
                  className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Slide progression timer"
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-amber-400 rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <button
                      id="hero-video-play-toggle-btn"
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                      className="p-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />}
                    </button>
                    <span className="text-[11px] font-mono text-slate-400">
                      {currentSlide + 1} / {videoSlides.length}
                    </span>
                  </div>

                  {/* SCENE INDICATOR BUTTONS */}
                  <div className="flex items-center gap-1" role="tablist" aria-label="Slides">
                    {videoSlides.map((s, idx) => (
                      <button
                        key={idx}
                        id={`hero-slide-nav-btn-${idx}`}
                        type="button"
                        role="tab"
                        aria-selected={currentSlide === idx}
                        aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                        onClick={() => {
                          setCurrentSlide(idx);
                          setProgress(0);
                        }}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-amber-300 cursor-pointer ${
                          currentSlide === idx ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* NON-NUMERIC TRUST HIGHLIGHTS (REPLACED UNVERIFIED STATS CLAIMS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto">
          {heroTrustHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-950/60 border border-blue-800/80 p-5 rounded-2xl text-left shadow-lg backdrop-blur-md flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-blue-900/80 border border-blue-700/80">
                {item.icon}
              </div>
              <div>
                <div className="font-heading text-sm sm:text-base font-extrabold text-white">
                  {item.title}
                </div>
                <div className="text-xs text-blue-200/80 font-medium mt-0.5 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AUDIENCE FOCUS SECTION (REPLACED FAKE PARTNERSHIP HEADLINE) */}
        <div className="mt-16 pt-8 border-t border-blue-800/60 text-center space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200/90">
            Built for Businesses, Creators & Digital Learners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-90">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-800/90 text-xs sm:text-sm font-bold font-heading text-blue-100 tracking-wide hover:border-blue-400 transition-colors"
              >
                {client.logoText}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


