import React, { useState, useEffect } from 'react';
import { PageTab, Service, Course, PortfolioItem, BlogPost } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsSection } from './components/MetricsSection';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  ServiceDetailModal,
  CourseEnrollmentModal,
  ConsultationModal,
  VideoPlayerModal,
  ProjectDetailModal,
  BlogArticleModal,
  AdmissionsDashboardModal,
} from './components/Modals';
import { LegalModals } from './components/LegalModals';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // MODAL STATES
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState<boolean>(false);

  // SYNC DARK MODE WITH HTML CLASS
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // SCROLL TO SECTION WHEN TAB CHANGES
  const handleTabChange = (tab: PageTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionMap: Record<PageTab, string> = {
      home: 'hero-section',
      about: 'about-section',
      services: 'services-section',
      courses: 'courses-section',
      portfolio: 'portfolio-section',
      blog: 'blog-section',
      faq: 'faq-section',
      contact: 'contact-section',
    };

    const targetId = sectionMap[tab];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#080b11] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      
      {/* HEADER NAVBAR */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN CONTENT LANDING / MULTI-SECTION PAGE */}
      <main>
        {/* HERO SECTION */}
        <div id="hero-section">
          <Hero
            setActiveTab={handleTabChange}
            openConsultationModal={() => setIsConsultationOpen(true)}
            openVideoModal={() => setIsVideoOpen(true)}
          />
        </div>

        {/* NUMBERS THAT MATTER SECTION */}
        <MetricsSection
          openConsultationModal={() => setIsConsultationOpen(true)}
        />

        {/* TRUST BADGES SECTION */}
        <TrustSection />

        {/* ABOUT SECTION */}
        <AboutSection
          openConsultationModal={() => setIsConsultationOpen(true)}
        />

        {/* SERVICES SECTION */}
        <ServicesSection
          onSelectService={(srv) => setSelectedService(srv)}
          openConsultationModal={() => setIsConsultationOpen(true)}
        />

        {/* PORTFOLIO & CASE STUDIES SECTION */}
        <PortfolioSection
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* ACADEMY COURSES SECTION */}
        <CoursesSection
          onEnrollCourse={(course) => setSelectedCourse(course)}
        />

        {/* TESTIMONIALS & REVIEWS SECTION */}
        <TestimonialsSection />

        {/* BLOG & INSIGHTS SECTION */}
        <BlogSection
          onSelectPost={(post) => setSelectedBlog(post)}
        />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FaqSection
          openConsultationModal={() => setIsConsultationOpen(true)}
        />

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer
        setActiveTab={handleTabChange}
        openLegalModal={(type) => setLegalModalType(type)}
        openAdmissionsModal={() => setIsAdmissionsOpen(true)}
      />

      {/* INTERACTIVE MODALS */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        openConsultationModal={() => setIsConsultationOpen(true)}
      />

      <CourseEnrollmentModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <AdmissionsDashboardModal
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <VideoPlayerModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        openConsultationModal={() => setIsConsultationOpen(true)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogArticleModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        openConsultationModal={() => setIsConsultationOpen(true)}
      />

      <LegalModals
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* FLOATING CONTROLS (BACK TO TOP & WHATSAPP) */}
      <FloatingControls />

    </div>
  );
}
