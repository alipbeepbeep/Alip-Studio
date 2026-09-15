import React from 'react';
import { Award, Film, Users, Video, CheckCircle2, Clapperboard, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Years Experience', desc: 'Crafting cinematic stories' },
    { value: '150+', label: 'Projects Completed', desc: 'Commercials, films & music videos' },
    { value: '50+', label: 'Professional Crew', desc: 'Vetted directors, DPs & technicians' },
    { value: '30+', label: 'Production Equipment', desc: 'Maintained cinema gear & rigs' },
  ];

  const studioCapabilities = [
    'Film production',
    'Commercial production',
    'Short film production',
    'Music video production',
    'Equipment rental',
    'Professional crew',
    'Production consultation',
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Film Reel Aesthetic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
              <img
                src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop"
                alt="ALIP STUDIO soundstage and camera crane"
                className="w-full h-[460px] object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                    <Clapperboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide">High-Grade Production Hub</h4>
                    <p className="text-xs text-neutral-400">Jakarta based • Operating nationwide & regional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative film slate accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Mission and Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-4 self-start">
              <Film className="w-3.5 h-3.5" />
              <span>About The Studio</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Dedicated to helping filmmakers and brands bring ideas to the screen.
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
              <strong className="text-white font-semibold">ALIP STUDIO</strong> is a creative film studio dedicated to helping filmmakers, creators, brands, and production teams bring their ideas to the screen. We merge technical mastery with storytelling craft, offering everything from end-to-end film development to certified cinema gear rentals and verified production crews.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are preparing a high-stakes television commercial, submitting your short film to global festivals, or requiring reliable cinema gear for a sprint shoot, ALIP STUDIO serves as your complete creative ecosystem.
            </p>

            {/* Capabilities Badges */}
            <div className="mb-10">
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-3">
                Full Production Ecosystem:
              </h4>
              <div className="flex flex-wrap gap-2">
                {studioCapabilities.map((cap, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-200 text-xs font-medium hover:border-red-500/40 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Statistics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-900/50 border border-white/5">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-neutral-200 block mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-neutral-500 block leading-tight mt-0.5">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
