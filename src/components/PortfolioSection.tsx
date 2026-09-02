import React, { useState } from 'react';
import { Briefcase, ExternalLink, ArrowRight, Layers, Tag, Eye } from 'lucide-react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data/agencyData';

interface PortfolioSectionProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Social Media', 'Ads & Growth', 'Web Development', 'Branding', 'Video & AI'];

  const filteredPortfolio = PORTFOLIO_DATA.filter((item) =>
    selectedFilter === 'All' ? true : item.category === selectedFilter
  );

  return (
    <section id="portfolio-section" className="py-20 bg-white dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Selected Client Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Proven Results & Creative Deliverables
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Explore our recent client campaigns, custom website builds, brand identity overhauls, and viral media campaigns.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectedFilter === cat
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between h-full"
            >
              <div>
                {/* IMAGE PLACEHOLDER SLOT */}
                <div className="relative aspect-16/10 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />

                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => onSelectProject(item)}
                      className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    Client: {item.client}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* METRIC / HIGHLIGHT */}
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-bold text-blue-700 dark:text-blue-300">
                    📈 {item.results}
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                    {item.summary}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* VIEW PROJECT BUTTON */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProject(item)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200/80 dark:bg-gray-800 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
