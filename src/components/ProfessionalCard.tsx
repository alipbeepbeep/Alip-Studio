import React from 'react';
import { Professional } from '../types';
import { Star, CheckCircle, Clock, UserCheck, ArrowRight } from 'lucide-react';

interface ProfessionalCardProps {
  professional: Professional;
  onViewProfile: (item: Professional) => void;
  onHireDirect: (item: Professional) => void;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  professional,
  onViewProfile,
  onHireDirect,
}) => {
  return (
    <div
      id={`pro-card-${professional.id}`}
      className="group rounded-2xl bg-gradient-to-b from-[#15151c] to-[#0e0e13] border border-white/10 hover:border-red-500/50 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-red-950/20"
    >
      {/* Photo with Overlay */}
      <div className="relative h-64 overflow-hidden bg-black/40">
        <img
          src={professional.photo}
          alt={professional.name}
          className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
            {professional.role}
          </span>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          {professional.available ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-semibold backdrop-blur-md">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900/80 border border-white/10 text-neutral-400 text-[11px] font-semibold backdrop-blur-md">
              <Clock className="w-3 h-3 text-neutral-400" />
              On Set
            </span>
          )}
        </div>

        {/* Rating Ribbon */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/10">
          <div className="flex text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
          </div>
          <span className="text-xs font-bold text-white font-mono">{professional.rating}</span>
          <span className="text-[10px] text-neutral-400">({professional.reviewsCount} reviews)</span>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
            {professional.name}
          </h3>

          <p className="text-xs font-mono text-red-400 uppercase tracking-wide mb-3">
            {professional.displayRole}
          </p>

          <p className="text-xs text-neutral-400 font-semibold mb-3">
            {professional.experience}
          </p>

          <div className="mb-4">
            <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-mono mb-1.5">
              Specialization:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {professional.specialization.slice(0, 3).map((spec, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-[11px] text-neutral-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/5 grid grid-cols-2 gap-2">
          <button
            id={`btn-view-pro-${professional.id}`}
            onClick={() => onViewProfile(professional)}
            className="w-full py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Profile</span>
          </button>

          <button
            id={`btn-hire-pro-${professional.id}`}
            onClick={() => onHireDirect(professional)}
            className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-red-600/20"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Hire Crew</span>
          </button>
        </div>
      </div>
    </div>
  );
};
