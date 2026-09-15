import React from 'react';
import { Camera, Users, Clock, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Camera className="w-6 h-6 text-red-500" />,
      title: 'Professional Equipment',
      description: 'Peralatan produksi yang terawat, teruji, dan siap digunakan untuk kebutuhan shooting intensif tanpa kendala teknis.',
      tag: 'Cinema Ready',
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: 'Experienced Crew',
      description: 'Tenaga profesional dengan pengalaman produksi film naratif, commercial brand ternama, dan festival internasional.',
      tag: 'Vetted Roster',
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: 'Flexible Rental',
      description: 'Pilihan sewa harian, mingguan, maupun paket project dengan proses verifikasi cepat dan transparan.',
      tag: 'Agile Booking',
    },
    {
      icon: <Layers className="w-6 h-6 text-red-500" />,
      title: 'End-to-End Production',
      description: 'Dukungan produksi komprehensif mulai dari pengembangan konsep naskah, shooting, hingga mastering post-production.',
      tag: 'Full Spectrum',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0d0d12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Everything You Need to Create.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Kami mengintegrasikan teknologi sinematik, keahlian sumber daya manusia, dan fleksibilitas layanan untuk menyederhanakan proses pembuatan film Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#14141c] to-[#0f0f15] border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 px-2 py-1 rounded bg-black/40 border border-white/5">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Standardized Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
