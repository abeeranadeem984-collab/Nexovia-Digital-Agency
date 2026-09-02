import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Users,
  Calendar,
  TrendingUp,
  GraduationCap,
  Award,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Star,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000; // 2 seconds count up
          const startTime = performance.now();

          const animate = (now: number) => {
            const timeElapsed = now - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            // Cubic ease-out
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const calculatedValue = easeOutProgress * value;

            setCurrentValue(calculatedValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {currentValue.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export const MetricsSection: React.FC<{
  openConsultationModal?: () => void;
}> = ({ openConsultationModal }) => {
  const primaryMetrics = [
    {
      id: 'projects',
      label: '100+ Projects Delivered',
      numericValue: 100,
      suffix: '+',
      icon: CheckCircle2,
      badge: '100+ Projects',
      color: 'from-blue-500 to-indigo-600',
      description: 'Digital marketing campaigns, custom web applications, brand identities, and e-commerce stores successfully delivered.',
    },
    {
      id: 'growing-agency',
      label: 'Growing Agency in Pakistan',
      numericValue: 1,
      prefix: '#',
      suffix: ' Digital Hub',
      icon: TrendingUp,
      badge: 'Growing Agency',
      color: 'from-emerald-500 to-teal-600',
      description: 'Rapidly expanding digital growth ecosystem founded by Abeera Nadeem Bajwa combining agency services, online skill academy, and growth research.',
    },
    {
      id: 'pakistan-serving',
      label: 'Serving Businesses Across Pakistan',
      numericValue: 25,
      suffix: '+ Cities',
      icon: MapPin,
      badge: 'Across Pakistan',
      color: 'from-amber-500 to-orange-600',
      description: 'Delivering results for clients, startups, and students in Sialkot, Lahore, Karachi, Islamabad, and all across Pakistan.',
    },
    {
      id: 'students',
      label: 'Students & Freelancers Trained',
      numericValue: 1200,
      suffix: '+',
      icon: GraduationCap,
      badge: 'Online Academy',
      color: 'from-purple-500 to-pink-600',
      description: 'Empowerment through practical, career-focused online courses in Graphic Designing, WordPress, Content Writing, Canva, YouTube, Fiverr, and eBay Selling.',
    },
    {
      id: 'ad-revenue',
      label: 'Ad Revenue & ROAS Generated',
      numericValue: 2.5,
      prefix: '$',
      suffix: 'M+',
      decimals: 1,
      icon: Award,
      badge: '3.8x Avg ROAS',
      color: 'from-cyan-500 to-blue-600',
      description: 'High-converting performance marketing campaigns for e-commerce stores and local service clients.',
    },
    {
      id: 'satisfaction',
      label: 'Client Satisfaction Rating',
      numericValue: 98,
      suffix: '%',
      icon: Star,
      badge: 'Verified Reviews',
      color: 'from-yellow-400 to-amber-500',
      description: 'Positive feedback rating from national and international client partnerships.',
    },
  ];

  return (
    <section
      id="metrics-section"
      className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 dark:from-[#080b11] dark:via-[#0c101a] dark:to-[#080b11] transition-colors duration-300 relative overflow-hidden"
    >
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Numbers That Matter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Proven Results Backed By Real Data
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our track record speaks through measurable milestones. From scaling ad revenue to launching digital storefronts and training future agency leaders.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* TOP ACCENT LINE */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                ></div>

                <div className="space-y-4">
                  {/* ICON & BADGE ROW */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* ANIMATED VALUE */}
                  <div className="pt-2">
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight flex items-baseline gap-0.5">
                      <AnimatedCounter
                        value={item.numericValue}
                        prefix={item.prefix}
                        suffix={item.suffix}
                        decimals={item.decimals || 0}
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200 mt-1 font-heading">
                      {item.label}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM TRUST HOOK */}
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Performance</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-blue-100 uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready To Add Your Brand To These Numbers?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Let’s Engineer Your Next Growth Milestone
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Book a free 1-on-1 strategy call with founder Abeera Nadeem Bajwa and discover how we scale your digital presence.
            </p>
          </div>

          <button
            onClick={openConsultationModal}
            className="shrink-0 px-6 py-3.5 text-xs sm:text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-2xl shadow-xl transition-all hover:scale-105 relative z-10 flex items-center gap-2"
          >
            <span>Book Free Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 text-blue-700" />
          </button>
        </div>

      </div>
    </section>
  );
};
