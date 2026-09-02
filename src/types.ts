export type PageTab =
  | 'home'
  | 'about'
  | 'services'
  | 'courses'
  | 'portfolio'
  | 'blog'
  | 'faq'
  | 'contact';

export interface Service {
  id: string;
  title: string;
  category: 'Marketing' | 'Development' | 'Design' | 'Content' | 'Strategy';
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  keyDeliverables: string[];
  processSteps: string[];
  idealFor: string;
  popular?: boolean;
}

export interface Course {
  id: string;
  name: string;
  category: string;
  duration: string;
  certificate: boolean;
  instructor: string;
  image: string;
  price: number;
  pricePKR?: string;
  originalPricePKR?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Advanced';
  description: string;
  syllabus: string[];
  isPremium?: boolean;
  badge?: string;
  highlights?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Ads & Growth' | 'Web Development' | 'Branding' | 'Video & AI';
  client: string;
  results: string;
  image: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  snippet: string;
  content: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  results: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Blog' | 'Courses' | 'Billing';
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}
