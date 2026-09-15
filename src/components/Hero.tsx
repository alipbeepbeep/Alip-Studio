import React from 'react';
import { ArrowRight, Play, Camera, ShieldCheck, Film, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onRentEquipment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onRentEquipment }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Cinematic Background Image with Multi-layer Vignette */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop"
          alt="Film set production background"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125 scale-105 transition-transform duration-1000"
        />
        {/* Gradients to blend smoothly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-[#0a0a0c]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/90 via-transparent to-[#0a0a0c]/90" />
        {/* Film grain pattern */}
        <div className="absolute inset-0 film-grain opacity-60" />
      </div>

      {/* Cinematic Frame Markers (Subtle Film Camera HUD) */}
      <div className="absolute inset-6 sm:inset-10 border border-white/5 pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping inline-block" />
          <span className="text-[10px] tracking-widest font-mono text-red-500 uppercase font-semibold">
            REC 4K DCI • 24.00 FPS
          </span>
        </div>
        <div className="absolute top-2 right-2 text-[10px] tracking-widest font-mono text-neutral-500 uppercase">
          ASPECT 2.39:1 • SHUTTER 180°
        </div>
        <div className="absolute bottom-2 left-2 text-[10px] tracking-widest font-mono text-neutral-500 uppercase">
          ALIP STUDIO • JAKARTA ID
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] tracking-widest font-mono text-neutral-500 uppercase">
          RAW LOG-3 • ACES COLOR
        </div>
        {/* Subtle crosshairs */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/30" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-0">
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-red-500/30 text-neutral-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>Studio Produksi Film & Rental Peralatan Profesional</span>
        </div>

        {/* Big Headline */}
        <h1
          id="hero-headline"
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[1.05] sm:leading-[1.02] mb-6 drop-shadow-2xl"
        >
          WUJUDKAN CERITAMU <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            MENJADI NYATA.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-10 text-balance"
        >
          Layanan produksi film profesional, penyewaan peralatan sinematik berstandar industri,
          dan tenaga kreatif berpengalaman — semua dalam satu studio.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            id="hero-services-cta-btn"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm tracking-wide border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 group shadow-xl hover:-translate-y-0.5"
          >
            <span>Jelajahi Layanan Kami</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>

          <button
            id="hero-equipment-cta-btn"
            onClick={onRentEquipment}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5"
          >
            <Camera className="w-4 h-4 text-white" />
            <span>Sewa Peralatan</span>
          </button>
        </div>

        {/* Micro Credibility Ribbons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Standar Sinema</p>
              <p className="text-[11px] text-neutral-400">Sony FX6, RED, Arri</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Produksi Penuh</p>
              <p className="text-[11px] text-neutral-400">Naskah s/d Master DCP</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Gear Terawat</p>
              <p className="text-[11px] text-neutral-400">Teruji & Siap Syuting</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-900/80 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
              <Play className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Kru Berpengalaman</p>
              <p className="text-[11px] text-neutral-400">Sutradara, DoP & Gaffer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
