import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { X, Award, Film, Calendar, Clock, User, Sparkles } from 'lucide-react';

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  item,
  onClose,
  onContactClick,
}) => {
  if (!item) return null;

  const [activeImage, setActiveImage] = useState(item.thumbnail);

  return (
    <div
      id="portfolio-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#121217] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161d]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-red-950/60 border border-red-800/40 text-red-400 font-mono text-xs uppercase tracking-wider font-semibold">
              {item.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">{item.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Stills Display */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-video shadow-xl">
            <img
              src={activeImage}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            {item.aspectRatio && (
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300">
                {item.aspectRatio}
              </div>
            )}
          </div>

          {/* Stills Thumbnails if multiple */}
          {item.stills && item.stills.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {item.stills.map((still, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(still)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border shrink-0 transition-all ${
                    activeImage === still
                      ? 'border-red-500 scale-105 shadow-md'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={still}
                    alt={`Still ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Title & Credits Grid */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono mb-4">
              Client / Production: <span className="text-white">{item.client}</span>
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              {item.synopsis}
            </p>
          </div>

          {/* Key Production Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900/60 border border-white/5">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Director</span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{item.director}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Cinematography</span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{item.cinematographer}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Runtime</span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{item.duration}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Year</span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{item.year}</span>
            </div>
          </div>

          {/* Awards & Honors */}
          {item.awards && item.awards.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Festival Selections & Industry Recognitions
              </h4>
              <div className="space-y-1.5">
                {item.awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-neutral-400 hidden sm:inline">
              Produced with ALIP STUDIO camera package and post pipeline.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white text-xs font-semibold border border-white/10"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-red-600/30"
              >
                Produce Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
