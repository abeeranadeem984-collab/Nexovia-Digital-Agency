import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Award, CheckCircle2, MapPin, Mail, Phone, GraduationCap, Briefcase, Sparkles, Heart, BookOpen, Code, PenTool, Layout, Globe, UserCheck } from 'lucide-react';
import { COMPANY_INFO, MANAGER_INFO } from '../data/agencyData';

interface AboutSectionProps {
  openConsultationModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ openConsultationModal }) => {
  return (
    <section id="about-section" className="py-20 bg-gray-50 dark:bg-[#07090f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* SECTION HEADER: ABOUT NEXOVIA DIGITAL */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            About Nexovia Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            About Nexovia Digital
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
            Nexovia Digital is a digital agency and learning platform focused on helping businesses strengthen their online presence while helping individuals develop practical digital skills.
          </p>
        </div>

        {/* 1. FOUNDER SPOTLIGHT: ABEERA NADEEM BAJWA (PLACED ON TOP) */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-blue-800/50">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* FOUNDER IMAGE PORTRAIT */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden bg-gray-900 border-2 border-white/20 aspect-4/5 shadow-2xl">
                  <img
                    src={COMPANY_INFO.ownerImage}
                    alt={COMPANY_INFO.owner}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Founder & Visionary
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                      {COMPANY_INFO.owner}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        Sialkot, Punjab, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOUNDER BIOGRAPHY & PURPOSE */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase">
                <Heart className="w-3.5 h-3.5 text-orange-400" />
                <span>Meet The Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                About Abeera Nadeem Bajwa
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
                <p>
                  <strong>Abeera Nadeem Bajwa</strong> is a visionary digital entrepreneur hailing from <strong>Sialkot, Punjab, Pakistan</strong>. Driven by ambition and a passion for technology, she established <strong>Nexovia Digital</strong> as a multi-purpose platform designed to empower individuals and businesses alike.
                </p>
                <p>
                  Her platform uniquely integrates key growth pillars: an <strong>Online Academy</strong> empowering students with high-income digital skills, a full-service <strong>Digital Marketing & Web Engineering Agency</strong> scaling client revenue, and an authoritative <strong>Growth Blog & SEO Research Center</strong>.
                </p>
              </div>

              {/* HIGHLIGHT PILLARS MINI CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-blue-300 font-bold text-xs">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>For Students</span>
                  </div>
                  <p className="text-[11px] text-gray-300">Online skill learning & practical courses</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-orange-300 font-bold text-xs">
                    <Briefcase className="w-4 h-4 text-orange-400" />
                    <span>For Clients</span>
                  </div>
                  <p className="text-[11px] text-gray-300">Meta/Google Ads & Website Development</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span>Growth Blog</span>
                  </div>
                  <p className="text-[11px] text-gray-300">SEO, Meta Ads & AI strategy research</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-5 text-sm sm:text-base font-bold text-white">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-md group/contact"
                >
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 group-hover/contact:scale-110 transition-transform" />
                  <span className="text-white font-bold tracking-wide">{COMPANY_INFO.email}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-md group/contact"
                >
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 group-hover/contact:scale-110 transition-transform" />
                  <span className="text-white font-bold tracking-wide">{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. MANAGER SPOTLIGHT: HIMANI BHANDARI (PLACED BELOW FOUNDER) */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-indigo-800/50">
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* MANAGER IMAGE PORTRAIT */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-blue-500 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden bg-gray-900 border-2 border-white/20 aspect-4/5 shadow-2xl">
                  <img
                    src={MANAGER_INFO.image}
                    alt={MANAGER_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
                    <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5" />
                      {MANAGER_INFO.title}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                      {MANAGER_INFO.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-medium">
                      Operations, Content & UI/UX Management Lead
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MANAGER BIOGRAPHY & SKILLS */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Meet Our Manager</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                About Himani Bhandari
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
                {MANAGER_INFO.bio}
              </p>

              {/* MANAGER CORE SKILLS DISPLAY */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Manager Core Expertise & Skills
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                      <PenTool className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Digital Copywriting</div>
                      <div className="text-[11px] text-gray-300">High-converting ad copy, landing pages & sales text</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Web Content Creation</div>
                      <div className="text-[11px] text-gray-300">Engaging website copy, SEO blogs & brand messaging</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 shrink-0">
                      <Layout className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">UI/UX Design + Idea</div>
                      <div className="text-[11px] text-gray-300">User experience prototyping & creative direction</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 shrink-0">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Programming Basics</div>
                      <div className="text-[11px] text-gray-300">Technical Web HTML/CSS/JS fundamentals & logic</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={openConsultationModal}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-all shadow-lg flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Connect With Management</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3 CORE PILLARS OF NEXOVIA DIGITAL */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              Triple Platform Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
              One Platform, Three Empowering Pillars
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nexovia Digital serves students seeking financial independence, businesses demanding predictable digital revenue, and brands looking for high-converting marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* PILLAR 1: FOR STUDENTS */}
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl space-y-4 hover:border-blue-500 dark:hover:border-blue-500 transition-all group flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  1. Online Learning for Students
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Comprehensive online courses engineered for students in Pakistan and globally. Master Meta Ads, SEO, Graphic Design, Web Development, and AI tools with hands-on live mentoring.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-gray-700 dark:text-gray-300 pt-4 border-t border-gray-100 dark:border-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Hands-On Practical Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Freelance & Client Acquisition Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Verified Course Certificates</span>
                </li>
              </ul>
            </div>

            {/* PILLAR 2: FOR CLIENTS */}
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl space-y-4 hover:border-orange-500 dark:hover:border-orange-500 transition-all group flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  2. Digital Agency Services for Clients
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Data-driven agency solutions for businesses, startups, and brands. We run high-ROAS Meta & Google ads, craft custom websites, execute SEO, and build automated sales funnels.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-gray-700 dark:text-gray-300 pt-4 border-t border-gray-100 dark:border-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Meta & Google Paid Ad Funnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Full-Stack Website & Store Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Brand Identity & Video Production</span>
                </li>
              </ul>
            </div>

            {/* PILLAR 3: THOUGHT LEADERSHIP & GROWTH BLOG */}
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl space-y-4 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  3. Growth Research & SEO Blog
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Authoritative digital marketing publications and technical guides. We publish actionable strategies on Meta Ads scaling, Google Gemini SEO, Generative Engine Optimization, and high-converting web design.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-gray-700 dark:text-gray-300 pt-4 border-t border-gray-100 dark:border-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Meta & Google Paid Media Scaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Google Gemini & AI Search Engine SEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Conversion Rate Optimization (CRO)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* MISSION & VISION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* MISSION */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-[#1e293b] shadow-xl space-y-4 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          {/* VISION */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-[#1e293b] shadow-xl space-y-4 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>

        {/* CORE VALUES SECTION */}
        <div className="space-y-8 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              The fundamental principles that guide Abeera Nadeem Bajwa and the Nexovia Digital team across every initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col justify-between space-y-4 shadow-xs hover:border-blue-500/40 transition-colors h-full"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug break-words">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
              Why Choose Nexovia Digital
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Headquartered in Sialkot, Punjab, Pakistan — driving digital success through reliable services and skill-focused learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/50">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WHAT YOU CAN EXPECT */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                What You Can Expect
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Our standard of service across every project and course enrollment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMPANY_INFO.whatYouCanExpect.map((expect, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{expect.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {expect.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

