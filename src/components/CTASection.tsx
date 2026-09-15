import React from 'react';
import { ArrowRight, Camera, Film, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
  onRentEquipment: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onStartProject,
  onRentEquipment,
}) => {
  return (
    <section id="cta" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1800&auto=format&fit=crop"
          alt="Cinematic production studio lighting"
          className="w-full h-full object-cover object-center filter brightness-[0.2] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>Let&apos;s Collaborate</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] mb-6">
          READY TO MAKE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-red-400">
            SOMETHING GREAT?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed mb-10 text-balance">
          Whether you need a complete production team or professional equipment, we&apos;re ready to help bring your vision to the screen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            id="cta-start-project-btn"
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-rent-equipment-btn"
            onClick={onRentEquipment}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm tracking-wider uppercase border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg"
          >
            <Camera className="w-4 h-4 text-neutral-300" />
            <span>Rent Equipment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
