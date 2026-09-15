import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Clapperboard, 
  Tv, 
  Film, 
  Music, 
  Users, 
  Compass, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-red-500" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-red-500" />;
      case 'Film':
        return <Film className="w-6 h-6 text-red-500" />;
      case 'Music':
        return <Music className="w-6 h-6 text-red-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-red-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-red-500" />;
      default:
        return <Film className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            From inception to delivery, we provide the full spectrum of film production disciplines to realize your cinematic vision with high fidelity.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-gradient-to-b from-[#14141a] to-[#0f0f14] border border-white/10 hover:border-red-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-red-950/20"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-neutral-500 group-hover:text-red-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-red-500/40 group-hover:scale-105 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-neutral-400 tracking-wide uppercase mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                id={`btn-learn-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-900/90 hover:bg-red-600/10 border border-white/10 group-hover:border-red-500/40 text-neutral-200 hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-between mt-4"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#121217] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-service-modal"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-red-500 px-2 py-1 rounded bg-red-950/60 border border-red-800/40">
                SERVICE {selectedService.number}
              </span>
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                ALIP STUDIO PRODUCTION
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-neutral-400 mb-6 font-medium">
              {selectedService.tagline}
            </p>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 border-b border-white/10 pb-6">
              {selectedService.description}
            </p>

            {/* Workflow Scope */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Production Workflow & Scope:
              </h4>
              <div className="space-y-2.5">
                {selectedService.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-8 p-4 rounded-xl bg-neutral-900/60 border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Standard Deliverables:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.deliverables.map((del, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-neutral-800 border border-white/10 text-neutral-200 text-xs font-medium"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white text-xs font-semibold border border-white/10"
              >
                Close
              </button>
              <button
                id="btn-inquire-service"
                onClick={() => {
                  setSelectedService(null);
                  onContactClick();
                }}
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide shadow-lg shadow-red-600/30 transition-all"
              >
                Inquire This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
