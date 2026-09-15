import React, { useState, useMemo } from 'react';
import { PortfolioItem, PortfolioCategory } from '../types';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Film, Eye, Sparkles, Play } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');

  const categories: { label: string; value: PortfolioCategory }[] = [
    { label: 'All Works', value: 'ALL' },
    { label: 'Film', value: 'Film' },
    { label: 'Commercial', value: 'Commercial' },
    { label: 'Music Video', value: 'Music Video' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Short Film', value: 'Short Film' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return PORTFOLIO_DATA;
    return PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Cinematic Showreel</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Works
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Koleksi karya film naratif, commercial TVC, dan video musik yang diproduksi dengan sentuhan artistik tinggi dan peralatan sinematik mutakhir.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.value}
              id={`portfolio-tab-${c.value.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(c.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-150 ${
                selectedCategory === c.value
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-[#14141a] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#121217] border border-white/10 hover:border-red-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-red-950/20 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Floating Play / View Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-semibold uppercase">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 font-mono text-[11px] text-neutral-300 bg-black/75 px-2 py-0.5 rounded border border-white/10">
                  {project.year}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                    {project.synopsis}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Dir: {project.director}</span>
                  <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
