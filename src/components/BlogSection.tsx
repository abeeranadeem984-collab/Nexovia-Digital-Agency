import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/agencyData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="blog-section" className="py-20 bg-gray-50 dark:bg-[#07090f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Marketing Blog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Growth Strategies & AI Marketing Insights
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Expert articles written by Abeera Nadeem Bajwa and agency strategists on Meta Ads, Google ranking, web design conversion psychology, and AI content creation.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between h-full"
            >
              <div>
                {/* IMAGE PLACEHOLDER SLOT */}
                <div className="relative aspect-16/9 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  
                  {/* METADATA */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* SNIPPET */}
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {post.snippet}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-semibold">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    <span>By {post.author}</span>
                  </div>

                </div>
              </div>

              {/* READ ARTICLE BUTTON */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectPost(post)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-white bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Read Full Article</span>
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
