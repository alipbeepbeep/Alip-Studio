import React from 'react';
import { Professional } from '../types';
import { 
  X, 
  Star, 
  CheckCircle2, 
  Briefcase, 
  Award, 
  Calendar, 
  Phone, 
  Sparkles, 
  Film,
  Clock
} from 'lucide-react';

interface ProfessionalDetailModalProps {
  professional: Professional | null;
  onClose: () => void;
  onHireNow: (item: Professional) => void;
}

export const ProfessionalDetailModal: React.FC<ProfessionalDetailModalProps> = ({
  professional,
  onClose,
  onHireNow,
}) => {
  if (!professional) return null;

  return (
    <div
      id="professional-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#121217] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161d]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold">
              {professional.role}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              ALIP STUDIO CREW ROSTER
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Top Profile Card */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-neutral-900 shadow-xl">
              <img
                src={professional.photo}
                alt={professional.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2">
                {professional.available ? (
                  <span className="px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Available for Hire
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-neutral-900/90 border border-white/10 text-neutral-400 text-[10px] font-semibold flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> In Production
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white font-mono">{professional.rating}</span>
                <span className="text-xs text-neutral-400">({professional.reviewsCount} verified reviews)</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                {professional.name}
              </h2>
              <p className="text-sm font-mono text-red-400 uppercase tracking-wide mb-3">
                {professional.displayRole}
              </p>

              <div className="inline-block px-3 py-1 rounded-lg bg-neutral-900 border border-white/10 text-xs font-semibold text-neutral-300 mb-4">
                {professional.experience} • Day Rate: <span className="text-white font-mono">{professional.dailyRate}</span>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                {professional.bio}
              </p>

              {/* Specialization Tags */}
              <div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                  Key Specializations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {professional.specialization.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-300 text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills & Verified Competencies */}
          <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-500" />
              Verified On-Set Skills & Gear Mastery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {professional.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Filmography / Previous Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
              <Film className="w-4 h-4 text-red-500" />
              Selected Works & Production Credits
            </h4>
            <div className="space-y-2">
              {professional.previousProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-900/40 border border-white/5 flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-white text-sm font-bold">{proj.title}</h5>
                    <p className="text-xs text-neutral-400">{proj.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-red-400 block font-semibold">
                      {proj.role}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {proj.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 text-center sm:text-left">
              Hiring includes ALIP STUDIO contract coverage and liability guarantee.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white text-xs font-semibold border border-white/10"
              >
                Close
              </button>

              <button
                id="modal-hire-pro-btn"
                onClick={() => {
                  onClose();
                  onHireNow(professional);
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire This Professional</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
