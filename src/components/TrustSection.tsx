import React from 'react';
import { ShieldCheck, Lock, Award, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { TRUST_BADGES } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
  Lock: <Lock className="w-6 h-6 text-emerald-400" />,
  Award: <Award className="w-6 h-6 text-amber-400" />,
  Zap: <Zap className="w-6 h-6 text-indigo-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-blue-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-rose-400" />
};

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden border-y border-blue-900/40">
      {/* GLOWING BACKGROUND ORBS */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-extrabold uppercase tracking-widest shadow-md">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Built On Integrity & Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Why Students & Businesses Trust Nexovia Digital
          </h2>
          <p className="text-sm text-slate-300">
            Backed by verified standards, secure transactions, and a 100% commitment to high-impact digital outcomes.
          </p>
        </div>

        {/* GLOWING BADGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-slate-900/90 border border-blue-900/60 hover:border-blue-400/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-md overflow-hidden hover:-translate-y-1"
            >
              {/* ANIMATED GLOWING GRADIENT BORDER ACCENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${badge.color} text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {iconMap[badge.icon] || <Sparkles className="w-6 h-6 text-white" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span>{badge.title}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
