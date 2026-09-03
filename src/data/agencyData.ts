import { Service, Course, PortfolioItem, BlogPost, Testimonial, FAQItem } from '../types';
import abeeraPortrait from '../assets/images/abeera_nadeem_bajwa_1785834732951.jpg';
import himaniPortrait from '../assets/images/himani_manager_portrait_1787813568593.jpg';

export const MANAGER_INFO = {
  name: 'Himani Bhandari',
  title: 'Agency Manager',
  image: himaniPortrait,
  bio: 'Himani Bhandari is our dedicated Agency Manager leading strategy, client communications, digital content creation, and UI/UX design concepts at Nexovia Digital. She brings specialized expertise in high-converting copy and web development basics to elevate every agency project.',
  skills: [
    'Digital Copywriting',
    'Web Content Creation',
    'UI/UX Design + Idea',
    'Programming Basics'
  ],
  email: 'abeeranadeem984@gmail.com',
  phone: '+92 347 6811866'
};

export const COMPANY_INFO = {
  name: 'Nexovia Digital',
  tagline: 'Professional Digital Services + Practical Digital Courses',
  owner: 'Abeera Nadeem Bajwa',
  ownerLocation: 'Sialkot, Punjab, Pakistan',
  ownerImage: abeeraPortrait,
  title: 'Founder & Managing Director',
  email: 'abeeranadeem984@gmail.com',
  phone: '+92 347 6811866',
  phoneClean: '923476811866',
  whatsappClean: '923476811866',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61576040694277',
  linkedinUrl: 'https://www.linkedin.com/in/abeera-nadeem-34a016377/',
  location: 'Sialkot, Punjab, Pakistan',
  establishedYear: '2023',
  founderBio: 'Abeera Nadeem Bajwa is a digital entrepreneur from Sialkot, Punjab, Pakistan. She founded Nexovia Digital with a vision to build an all-in-one ecosystem for digital growth, practical online skill learning, and professional agency solutions.',
  platformPillars: [
    {
      title: 'Digital Services for Clients',
      desc: 'Delivering end-to-end digital marketing, Meta & Google ads management, website development, branding, video editing, and AI solutions for modern businesses.',
      icon: 'Briefcase'
    },
    {
      title: 'Nexovia Digital Academy',
      desc: 'Offering structured 1-month courses in Meta Ads, SEO, Graphic Design, Web Development, and Freelancing to help individuals develop practical digital skills.',
      icon: 'GraduationCap'
    },
    {
      title: 'Growth Research & Blog',
      desc: 'Publishing actionable SEO, AI search engine optimization, Meta Ads scaling, and UI/UX conversion rate optimization insights.',
      icon: 'BookOpen'
    }
  ],
  mission: 'To empower individuals with practical digital skills, deliver high-converting marketing solutions for business clients, and build a trusted digital growth agency.',
  vision: "To position Nexovia Digital as a premier digital agency and practical learning ecosystem, connecting talent, client innovation, and modern digital strategies.",
  aboutText: 'Nexovia Digital is a digital agency and learning platform focused on helping businesses strengthen their online presence while helping individuals develop practical digital skills.',
  coreValues: [
    { title: 'Practical Solutions', desc: 'Real-world digital strategies engineered for measurable business and career growth.' },
    { title: 'Professional Approach', desc: 'Clear deliverables, transparent timelines, and dedicated client & student support.' },
    { title: 'Skill-Focused Learning', desc: 'Hands-on curriculum structured to build job-ready and freelance-ready skills fast.' },
    { title: 'Responsive Communication', desc: 'Direct WhatsApp and email communication ensuring questions get answered quickly.' }
  ],
  whyChooseUs: [
    { title: 'Practical Digital Solutions', desc: 'Custom strategies built around your specific business goals, not generic templates.' },
    { title: 'Professional Service Approach', desc: 'Transparent communication, reliable project execution, and structured workflows.' },
    { title: 'Skill-Focused Learning', desc: 'Hands-on project work, live exercises, and practical real-world training.' },
    { title: 'Modern Digital Strategies', desc: 'Up-to-date Meta Ads, SEO algorithms, AI tools, and full-stack web technologies.' },
    { title: 'Responsive Communication', desc: 'Direct communication via WhatsApp at +92 347 6811866 with prompt assistance.' },
    { title: 'Business & Career Growth Focus', desc: 'Designed to help businesses expand market reach and individuals launch rewarding careers.' }
  ],
  whatYouCanExpect: [
    { title: 'Clear Communication', desc: 'Open, transparent, and prompt updates at every stage of the project or course.' },
    { title: 'Professional Delivery', desc: 'High standards of code quality, creative design, and ad campaign execution.' },
    { title: 'Practical Learning', desc: 'No fluff — only actionable, applicable skills that translate to real online success.' },
    { title: 'Transparent Process', desc: 'No hidden fees or unrealistic promises; straightforward guidance you can trust.' }
  ],
  stats: [
    { label: 'Successful Students & Clients', value: '500+' },
    { label: 'Satisfaction Rate', value: '99%' },
    { label: 'Ad Revenue Generated', value: '$2.5M+' },
    { label: 'Active Retainers & Projects', value: '85+' }
  ]
};

export const TRUST_BADGES = [
  {
    title: 'Verified Agency',
    description: 'Officially registered digital marketing agency & academy based in Sialkot, Pakistan',
    icon: 'ShieldCheck',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication, ethical practices, and straightforward project roadmaps',
    icon: 'Lock',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Professional Delivery',
    description: 'Dedicated support & rigorous quality standards across all deliverables',
    icon: 'Award',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Responsive Communication',
    description: 'Direct WhatsApp assistance at +92 347 6811866 for prompt student and client support',
    icon: 'Zap',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Practical Digital Strategies',
    description: 'Engineered for measurable performance, qualified leads, and career growth',
    icon: 'TrendingUp',
    color: 'from-sky-500 to-blue-600'
  },
  {
    title: 'Premium Quality Design',
    description: 'Modern UI/UX, responsive layouts, creative branding, and engaging video production',
    icon: 'Sparkles',
    color: 'from-rose-500 to-pink-500'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    iconName: 'TrendingUp',
    shortDescription: 'Full-funnel digital marketing strategies combining multi-channel paid ads, organic outreach, and conversion tracking to grow your online presence.',
    fullDescription: 'We develop comprehensive digital marketing campaigns tailored to your specific business objectives. From audience research and funnel architecture to cross-platform execution and analytics tracking, our digital marketing approach helps you build brand authority and generate qualified leads.',
    keyDeliverables: ['Multi-Channel Marketing Strategy', 'Audience Research & Funnel Mapping', 'Campaign Setup & Optimization', 'Comprehensive Analytics & KPI Tracking'],
    processSteps: ['Discovery & Goal Setting', 'Audience & Competitor Analysis', 'Campaign Architecture', 'Optimization & Reporting'],
    idealFor: 'Businesses looking for a cohesive digital marketing strategy across all channels.',
    popular: true
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    category: 'Marketing',
    iconName: 'Share2',
    shortDescription: 'Strategic content calendars, engaging post design, caption copywriting, and community management across Instagram, Facebook, and LinkedIn.',
    fullDescription: 'Build an active, authoritative presence across social networks. We plan monthly content calendars, design visually striking posts and carousels, write persuasive captions, and engage with your community to turn followers into loyal customers.',
    keyDeliverables: ['Monthly Strategic Content Calendar', 'Custom Visual Graphics & Reels', 'Engaging Captions & Hashtag Research', 'Community & DM Interaction Support'],
    processSteps: ['Brand Identity Audit', 'Content Strategy Creation', 'Graphic & Video Production', 'Scheduled Publishing & Engagement'],
    idealFor: 'Brands wanting consistent, professional brand presence across social platforms.'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    category: 'Marketing',
    iconName: 'Target',
    shortDescription: 'Data-driven Facebook and Instagram ad campaigns optimized for lead generation, conversions, and scalable return on ad spend.',
    fullDescription: 'Stop wasting budget on ineffective boosted posts. We build structured Meta advertising funnels with Meta Pixel and CAPI integration, tailored custom audiences, A/B creative testing, and strategic budget scaling.',
    keyDeliverables: ['Meta Pixel & CAPI Setup', 'Target Audience & Lookalike Modeling', 'High-Converting Ad Creatives & Copy', 'Daily Optimization & Budget Scaling'],
    processSteps: ['Ad Account Audit', 'Funnel & Audience Design', 'Creative Testing', 'Scale & Retargeting'],
    idealFor: 'E-commerce stores and service businesses looking for scalable paid leads and sales.',
    popular: true
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    category: 'Marketing',
    iconName: 'Search',
    shortDescription: 'High-intent Google Search, Display, and Performance Max ad campaigns targeting buyers actively searching for your solutions.',
    fullDescription: 'Reach active buyers at the exact moment of search intent. We manage targeted search campaigns, keyword negative lists, shopping feeds, and smart bidding strategies to maximize your advertising efficiency.',
    keyDeliverables: ['Search Intent Keyword Research', 'Campaign Setup & Negative Keyword Lists', 'Persuasive Ad Copywriting', 'Conversion Tracking & Smart Bidding'],
    processSteps: ['Keyword Research', 'Campaign Build', 'Smart Bid Testing', 'Ongoing Optimization'],
    idealFor: 'Service businesses and e-commerce stores looking for high-intent customer leads.'
  },
  {
    id: 'seo-services',
    title: 'SEO',
    category: 'Marketing',
    iconName: 'Search',
    shortDescription: 'On-page, technical, and off-page search engine optimization to rank your business higher on Google and drive sustainable organic traffic.',
    fullDescription: 'Earn sustainable organic traffic and outrank competitors. We perform comprehensive technical audits, optimize on-page structure and content for search intent, and implement ethical link-building strategies.',
    keyDeliverables: ['Comprehensive Technical SEO Audit', 'Keyword Strategy & Content Architecture', 'On-Page Optimization & Schema Markup', 'Ethical Backlink Acquisition Plan'],
    processSteps: ['Site Health Audit', 'Keyword Intent Mapping', 'On-Page & Technical Fixes', 'Authority Link Building'],
    idealFor: 'Businesses seeking long-term organic visibility and lower customer acquisition costs.',
    popular: true
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Development',
    iconName: 'Code',
    shortDescription: 'Modern, responsive, fast-loading custom websites built with clean code, seamless user experience, and conversion-focused design.',
    fullDescription: 'We engineer modern, secure, and mobile-friendly custom websites tailored to your unique brand requirements. With clean code, lightning-fast load times, and intuitive UI/UX, we ensure your visitors enjoy a seamless browsing experience.',
    keyDeliverables: ['Fully Responsive Custom Website', 'Clean Frontend & Backend Architecture', 'Performance & Speed Optimization', 'Analytics & Lead Capture Integration'],
    processSteps: ['Discovery & Requirements', 'Wireframing & UI Prototype', 'Coding & Integration', 'Quality Testing & Launch'],
    idealFor: 'Businesses that require a high-performing custom digital platform.',
    popular: true
  },
  {
    id: 'wordpress-development',
    title: 'WordPress',
    category: 'Development',
    iconName: 'Globe',
    shortDescription: 'Scalable WordPress and WooCommerce websites with custom themes, plugins, robust security, and easy administration.',
    fullDescription: 'Get a clean, reliable WordPress website that is effortless to update. We create custom WooCommerce e-commerce stores, business portfolios, and blogs equipped with essential security, backup protocols, and speed optimization.',
    keyDeliverables: ['Custom WordPress Theme Configuration', 'WooCommerce Store & Catalog Setup', 'Essential Security & Backup Plugins', 'Speed & Caching Optimization'],
    processSteps: ['Domain & Hosting Setup', 'Theme & Layout Customization', 'E-Commerce / Content Integration', 'Client Training'],
    idealFor: 'E-commerce merchants, corporate sites, and bloggers needing flexible content management.'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Design',
    iconName: 'Palette',
    shortDescription: 'Creative social media graphics, advertising banners, marketing materials, and digital visuals that command attention.',
    fullDescription: 'Capture your audience’s attention with professional graphic design. From thumb-stopping social media posts and digital advertising banners to promotional flyers and presentation decks, we craft visual assets that elevate your brand.',
    keyDeliverables: ['Social Media Banners & Post Graphics', 'Digital Advertising Creatives', 'Marketing Collateral & Promotional Assets', 'High-Resolution Production Files'],
    processSteps: ['Design Brief & Concepting', 'Visual Draft Creation', 'Refinements & Iterations', 'Final Asset Delivery'],
    idealFor: 'Brands needing high-quality, continuous visual creative production.'
  },
  {
    id: 'branding',
    title: 'Branding',
    category: 'Design',
    iconName: 'Award',
    shortDescription: 'Comprehensive brand identity systems including logo design, typography, color palettes, brand guidelines, and visual assets.',
    fullDescription: 'Establish a memorable, professional brand image. We build complete visual identity systems including custom logo concepts, curated color palettes, typography rules, social media kits, and brand guideline documentation.',
    keyDeliverables: ['Custom Vector Logo Design (Multiple Formats)', 'Color Palette & Typography System', 'Brand Guidelines Book (PDF)', 'Social Media Branding Kit & Stationery'],
    processSteps: ['Brand Discovery & Market Analysis', 'Logo Concept Sketches', 'Digital Vectoring & Palette Design', 'Complete Brand Style Guide Delivery'],
    idealFor: 'Startups and established companies looking for a cohesive, premium brand presence.',
    popular: true
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Content',
    iconName: 'Video',
    shortDescription: 'Professional video editing for short-form Reels, TikToks, YouTube content, and high-impact digital video ads.',
    fullDescription: 'Engage viewers on video platforms with dynamic editing. We transform raw footage into compelling short-form Reels, TikToks, and YouTube Shorts featuring clean motion graphics, subtitles, sound design, and color grading.',
    keyDeliverables: ['Short-Form Reels, Shorts & TikToks', 'Digital Video Ad Cutdowns', 'Dynamic Subtitles & Motion Graphics', 'Sound Design & Color Correction'],
    processSteps: ['Footage Review & Storyboarding', 'Rough Cut & Pacing', 'Graphics, Captions & Audio Polish', 'Final High-Res Export'],
    idealFor: 'Content creators, brands, and advertisers scaling video marketing campaigns.'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Development',
    iconName: 'Sparkles',
    shortDescription: 'Smart AI-powered workflows, automated content generation systems, and intelligent digital tools for modern productivity.',
    fullDescription: 'Leverage the power of modern artificial intelligence for your business operations. We help integrate smart AI workflows, custom chatbot interfaces, and automated content frameworks to streamline processes and enhance digital engagement.',
    keyDeliverables: ['AI Workflow Architecture & Strategy', 'Custom AI Prompting & Content Automation', 'Chatbot & Lead Assistant Integration', 'Team Training & Best Practice Guides'],
    processSteps: ['Use-Case Assessment', 'Workflow Prototyping', 'Integration & Testing', 'Deployment & Handover'],
    idealFor: 'Forward-thinking businesses looking to incorporate AI tools into their digital operations.',
    popular: true
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'ebay-selling-ecommerce',
    name: 'eBay Selling & E-Commerce',
    category: 'E-Commerce',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
    price: 30,
    pricePKR: 'PKR 7,000',
    originalPricePKR: 'PKR 14,000',
    level: 'Advanced',
    isPremium: true,
    badge: 'Advanced / Premium Course',
    description: 'Advanced end-to-end eBay e-commerce master training. Includes practical training, eBay account setup guidance, international product research, product listing, selling strategies, order management, shipping guidance, and dedicated 1-on-1 mentorship & support.',
    highlights: [
      'eBay Account Setup & Verification Guidance',
      'Advanced Product Research & High-Margin Hunting',
      'High-Converting Product Listings & SEO Titles',
      'International Selling & Pricing Strategies',
      'Order Management & Inventory Dispatch',
      'Worldwide Shipping & Carrier Guidance',
      'Account Health, Resolution Center & Scaling',
      'Dedicated 1-on-1 Mentorship & Support'
    ],
    syllabus: [
      'eBay Business Account Creation & Verification Guidance',
      'International Product Research & High-Margin Hunting',
      'Optimized Item Titles, Descriptions & Listing SEO',
      'Winning Pricing Strategies & Profit Margin Calculations',
      'Order Management, Packaging & Inventory Control',
      'Worldwide Shipping Solutions, Tracking & Customs Guidance',
      'Customer Support, Returns & Maintaining Top Rated Seller Status',
      'Dedicated 1-on-1 Mentorship & Lifetime WhatsApp Support'
    ]
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    category: 'Content',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Hands-on practical training in SEO blog writing, persuasive copywriting formulas, article structuring, client pitch proposals, and building a high-paying writing portfolio with personalized mentorship.',
    highlights: [
      'SEO Blog & Article Writing',
      'Persuasive Sales Copywriting (AIDA/PAS)',
      'Client Pitching & High-Converting Proposals',
      'Live Portfolio Review & Feedback',
      'Direct Instructor Mentorship via WhatsApp'
    ],
    syllabus: [
      'SEO Content Writing & Keyword Integration',
      'Persuasive Copywriting Formulas (AIDA, PAS)',
      'Website Content, Landing Pages & Ad Copy',
      'Client Pitching, Proposals & Cold Outreach',
      'Portfolio Building & Live Review Sessions',
      'Professional Certificate Included',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  },
  {
    id: 'wordpress-web-development',
    name: 'WordPress Web Development',
    category: 'Development',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Master full-scale WordPress website creation, Elementor page builder, WooCommerce online store setup, speed optimization, and client project delivery without writing code.',
    highlights: [
      'Domain, Hosting & WordPress Core Setup',
      'Elementor Custom Design & Responsiveness',
      'WooCommerce Online Store Configuration',
      'Security, Speed Optimization & SEO Plugins',
      'Client Website Handover & Freelance Guidance'
    ],
    syllabus: [
      'Domain, Hosting & WordPress Core Setup',
      'Elementor Pro Layouts & Mobile Responsiveness',
      'WooCommerce Store Setup, Gateways & Products',
      'Speed Optimization, Caching & Essential Security',
      'Client Website Handover & Freelance Strategies',
      'Professional Certificate Included',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    category: 'Design',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Master professional graphic design principles, Adobe Photoshop & Illustrator, visual branding assets, advertising creatives, photo manipulation, and commercial typography with practical hands-on mentorship.',
    highlights: [
      'Adobe Photoshop & Illustrator Mastery',
      'Social Media Creatives & Ad Banners',
      'Logo Design, Brand Identity & Color Theory',
      'Commercial Photo Manipulation & Retouching',
      'Client Design Portfolio & Mentorship'
    ],
    syllabus: [
      'Design Fundamentals: Color Theory, Grid & Typography',
      'Adobe Photoshop: Photo Editing, Retouching & Mockups',
      'Adobe Illustrator: Vector Illustration, Icons & Logos',
      'High-Converting Social Media Creatives & Ad Banners',
      'Client Branding Guidelines & Print Asset Preparation',
      'Professional Certificate Included',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  },
  {
    id: 'canva-designing',
    name: 'Canva Designing',
    category: 'Design',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Master Canva Pro to create stunning commercial social media carousels, business logos, advertising banners, brand identity kits, and client presentation decks with practical guidance.',
    highlights: [
      'Canva Pro Commercial Design Tools',
      'High-Converting Social Media Carousels',
      'Brand Kits, Color Palettes & Logo Design',
      'Client Presentation Decks & eBooks',
      'Freelance Design Portfolio & Mentorship'
    ],
    syllabus: [
      'Canva Pro Architecture & Typography Pairing',
      'High-Converting Social Media Posts & Carousels',
      'Brand Kit Creation, Color Schemes & Logos',
      'Short Video, Reel & Animated Story Templates',
      'Client Presentation Decks, PDFs & Print Assets',
      'Professional Certificate Included',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  },
  {
    id: 'pdf-designing-formatting',
    name: 'PDF Designing & Formatting',
    category: 'Design',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Learn professional digital PDF formatting, eBook layout design, interactive fillable forms, lead magnet documents, company profiles, and corporate catalogs with step-by-step training.',
    highlights: [
      'eBook & Lead Magnet Document Design',
      'Interactive Fillable PDF Forms & Checklists',
      'Corporate Catalog & Broadsheet Layouts',
      'Print & Web Compressed PDF Standards',
      'Client Document Formatting & Freelance Work'
    ],
    syllabus: [
      'Typography, Grid Systems & Visual Hierarchy',
      'High-Converting Lead Magnet & eBook Layouts',
      'Interactive Forms, Checkboxes & Clickable Links',
      'Corporate Annual Reports, Catalogs & Profiles',
      'Export Standards (Print Ready vs Web Compressed)',
      'Professional Certificate Included',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  },
  {
    id: 'youtube-channel-growth',
    name: 'YouTube Channel Creation & Growth',
    category: 'Content',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Complete roadmap to launch, manage, and scale high-yielding YouTube channels with niche selection, AI scriptwriting, viral thumbnail design, SEO tags, and monetization guidance.',
    highlights: [
      'Profitable Niche Selection & Channel Setup',
      'Scriptwriting & AI Voiceover Workflows',
      'High-CTR Thumbnail Design & Typography',
      'Video SEO, Tags & Algorithm Optimization',
      'Monetization Strategies & Growth Roadmap'
    ],
    syllabus: [
      'High-CPM Niche Selection & Competitor Research',
      'AI Scriptwriting, Storyboarding & Voiceover Tools',
      'Thumbnails That Drive High Click-Through Rates (CTR)',
      'YouTube SEO: Keywords, Titles, Descriptions & Tags',
      'Channel Monetization, Sponsorships & Affiliate Revenue',
      'Professional Certificate Included',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  },
  {
    id: 'fiverr-freelancing',
    name: 'Fiverr Freelancing',
    category: 'Freelancing',
    duration: '1 Month',
    certificate: true,
    instructor: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    price: 25,
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    badge: 'Practical Skill Course',
    description: 'Learn how to create high-ranking Fiverr gigs, keyword optimization, foreign buyer communication, 5-star rating strategies, order delivery, and achieving Level 1 & Level 2 seller status with live mentorship.',
    highlights: [
      'Profitable Niche Selection & Keyword Research',
      'High-Ranking Gig SEO, Titles & Thumbnails',
      'Foreign Buyer Communication & Custom Offers',
      'Order Delivery Excellence & 5-Star Reviews',
      'Roadmap to Level 1 & Level 2 Seller Status'
    ],
    syllabus: [
      'Fiverr Algorithm & Keyword Research',
      'High-Converting Gig Titles, Descriptions & Tags',
      'Gig Video & Thumbnail Design for Maximum Clicks',
      'Buyer Communication, Custom Offers & Upselling',
      'Order Delivery Excellence & 5-Star Reviews',
      'Handling Difficult Clients & Account Security',
      'Direct Instructor Mentorship via WhatsApp'
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Fashion Brand Meta Ads Scaling',
    category: 'Ads & Growth',
    client: 'Luxe Attire Co.',
    results: '4.8x ROAS ($140K Revenue in 60 Days)',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Meta Ads', 'Pixel Tracking', 'Custom Lookalikes', 'CRO'],
    summary: 'Restructured Facebook & Instagram ad account funnels using dynamic video creatives and retargeting sequences.',
    challenge: 'High customer acquisition cost and low ROAS (under 1.5x) on cold audience campaigns.',
    solution: 'Designed multi-tier TOF/MOF/BOF funnel with custom UGC video creatives and interest targeting.'
  },
  {
    id: 'proj-2',
    title: 'SaaS Platform Technical SEO & Organic Traffic Boost',
    category: 'Social Media',
    client: 'CloudFlow Tech',
    results: '+320% Organic Traffic Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['SEO Audit', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
    summary: 'Comprehensive site audit, page speed optimization, and schema markup integration.',
    challenge: 'Stagnant search engine impressions and poor indexation across product features.',
    solution: 'Fixed crawl errors, restructured site hierarchy, and produced keyword-targeted technical guides.'
  },
  {
    id: 'proj-3',
    title: 'Full Custom Web Application & Booking Portal',
    category: 'Web Development',
    client: 'Nexus Global Logistics',
    results: '100/100 Lighthouse Performance Score',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    summary: 'Full-stack web application featuring instant lead calculator, dynamic tracking, and client portal.',
    challenge: 'Legacy website took 6+ seconds to load and failed on mobile viewports.',
    solution: 'Built a custom React web app with zero layout shift and instant search capabilities.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-meta-ads-2026',
    title: 'Meta Ads Scaling Blueprint for 2026: Achieving 4x+ ROAS',
    category: 'Digital Marketing',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    snippet: 'Learn how to structure your Facebook & Instagram ad account in 2026 with CAPI, advantage+ budgets, and dynamic video creatives.',
    content: [
      'In 2026, Meta advertising requires a creative-first mindset. Algorithms now rely heavily on video context and user intent rather than narrow interest stacks.',
      'Key Pillar 1: Conversions API (CAPI) Integration - Ensure first-party data tracking is active to prevent pixel signal loss.',
      'Key Pillar 2: UGC Video Creatives - Short hook within the first 3 seconds dramatically lowers CPMs.',
      'Key Pillar 3: Broad Targeting with Advantage+ Shopping Campaigns.'
    ],
    tags: ['Meta Ads', 'E-Commerce', 'ROAS', 'Growth']
  },
  {
    id: 'post-seo-gemini',
    title: 'How to Optimize Your Website for AI Search Engines & Google Gemini',
    category: 'SEO Strategy',
    date: 'August 2026',
    readTime: '8 min read',
    author: 'Abeera Nadeem Bajwa',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80',
    snippet: 'Discover Generative Engine Optimization (GEO) strategies to ensure your business appears in AI answers.',
    content: [
      'AI search engine overviews now synthesize content directly from high-authority sources.',
      'To rank in AI summaries, structure your articles with clear direct answers, bulleted lists, schema markup, and verifiable data citations.',
      'Always focus on author authority, clear entity definitions, and actionable structured headings.'
    ],
    tags: ['SEO', 'AI Search', 'Google Gemini', 'GEO']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Muhammad Hamza',
    role: 'Digital Marketing Student',
    company: 'Nexovia Academy Graduate',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Enrolling in the Meta Ads & Digital Marketing course at Nexovia Digital was the best decision of my career! Abeera Ma’am explains every concept with practical client account examples. I got my first freelancing client within 3 weeks!',
    rating: 5,
    results: 'Earned First $500 Freelance Client'
  },
  {
    id: 'test-2',
    clientName: 'Usman Chaudhry',
    role: 'E-Commerce Store Owner',
    company: 'Sialkot Apparel Co.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Nexovia Digital managed our Meta and Google ads campaigns. Their team restructured our funnels and achieved a 4.2x ROAS in our first month. Highly recommended agency in Pakistan!',
    rating: 5,
    results: '4.2x ROAS Achieved'
  },
  {
    id: 'test-3',
    clientName: 'Fatima Malik',
    role: 'SEO & Content Student',
    company: 'Nexovia Academy Graduate',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'The 1-month SEO course was packed with real-world technical training. The live assignments and instructor support helped me rank my blog on Google’s first page. Thank you Nexovia Digital!',
    rating: 5,
    results: '#1 Google Page Ranking'
  },
  {
    id: 'test-4',
    clientName: 'Zainab Ahmed',
    role: 'Graphic Design Student',
    company: 'Fiverr Level 1 Seller',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content: 'I learned Photoshop, Illustrator, and Canva from scratch. The practical assignments gave me the confidence to launch my Fiverr gig. The lifetime recordings are super helpful!',
    rating: 5,
    results: 'Level 1 Seller on Fiverr'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the duration of Nexovia Academy courses?',
    answer: 'All our professional skills training courses at Nexovia Academy have a duration of 1 Month. They are designed as fast-track, high-density practical programs with live interactive classes and recorded lectures.',
    category: 'Courses'
  },
  {
    id: 'faq-2',
    question: 'Will I receive a professional certificate upon course completion?',
    answer: 'Yes! Every student who successfully completes their course modules and practical assignments receives an official, verifiable Nexovia Academy Certificate of Completion.',
    category: 'Courses'
  },
  {
    id: 'faq-3',
    question: 'How do I enroll in a course or request an agency service?',
    answer: 'You can enroll directly by clicking "Enroll Now on WhatsApp" on any course card or contacting us directly on WhatsApp at +92 347 6811866 for instant enrollment assistance.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'What payment methods are accepted?',
    answer: 'We accept local online bank transfers, EasyPaisa, JazzCash, as well as international payment methods for global clients and students.',
    category: 'Billing'
  },
  {
    id: 'faq-5',
    question: 'Are the classes conducted online?',
    answer: 'Yes, 100% of our classes are held online. Students receive access to live interactive sessions, Q&A support, and lifetime access to course recordings.',
    category: 'Courses'
  },
  {
    id: 'faq-6',
    question: 'What services does Nexovia Digital agency offer?',
    answer: 'We offer Website Development, Landing Page Design, WordPress Development, SEO Services, Meta Ads Management, Google Ads Management, Social Media Management, Graphic Design, Logo Design, Brand Identity Design, Content Writing, Video Editing, and Business Consultation.',
    category: 'Services'
  },
  {
    id: 'faq-7',
    question: 'How quickly does Nexovia Digital support respond?',
    answer: 'We provide 24/7 direct student and client support. You can reach our team via WhatsApp, email, or our website contact form for prompt assistance.',
    category: 'General'
  }
];

export const FAQS_DATA = FAQ_DATA;

export const CLIENT_LOGOS = [
  { name: 'Sialkot Apparel', logoText: 'Sialkot Apparel Co.' },
  { name: 'Luxe Attire', logoText: 'Luxe Attire' },
  { name: 'Nexus Logistics', logoText: 'Nexus Logistics' },
  { name: 'CloudFlow Tech', logoText: 'CloudFlow Tech' },
  { name: 'ProActive Fitness', logoText: 'ProActive Fitness' }
];
