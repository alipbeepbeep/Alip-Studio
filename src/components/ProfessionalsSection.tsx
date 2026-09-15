import React, { useState, useMemo } from 'react';
import { Professional, ProfessionalRole } from '../types';
import { PROFESSIONALS_DATA } from '../data/professionalsData';
import { ProfessionalCard } from './ProfessionalCard';
import { Users, Sparkles, Filter } from 'lucide-react';

interface ProfessionalsSectionProps {
  onViewProfile: (professional: Professional) => void;
  onHireDirect: (professional: Professional) => void;
}

export const ProfessionalsSection: React.FC<ProfessionalsSectionProps> = ({
  onViewProfile,
  onHireDirect,
}) => {
  const [selectedRole, setSelectedRole] = useState<ProfessionalRole>('ALL');

  const roles: { label: string; value: ProfessionalRole }[] = [
    { label: 'All Roles', value: 'ALL' },
    { label: 'Director', value: 'Director' },
    { label: 'Director of Photography', value: 'Director of Photography' },
    { label: 'Camera Operator', value: 'Camera Operator' },
    { label: 'Gaffer', value: 'Gaffer' },
    { label: 'Sound Engineer', value: 'Sound Engineer' },
    { label: 'Editor & Colorist', value: 'Editor' },
    { label: 'Production Designer', value: 'Production Designer' },
    { label: 'Scriptwriter', value: 'Scriptwriter' },
  ];

  const filteredProfessionals = useMemo(() => {
    if (selectedRole === 'ALL') return PROFESSIONALS_DATA;
    return PROFESSIONALS_DATA.filter((p) => p.role === selectedRole);
  }, [selectedRole]);

  return (
    <section id="professionals" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Production Crew Roster</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Meet Our Professionals
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Tenaga profesional perfilman berpengalaman dan terverifikasi. Siap bergabung dengan tim Anda untuk produksi film layar lebar, iklan TVC, hingga video musik.
          </p>
        </div>

        {/* Role Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {roles.map((r) => (
            <button
              key={r.value}
              id={`role-filter-${r.value.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedRole(r.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-150 ${
                selectedRole === r.value
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-[#14141a] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProfessionals.map((pro) => (
            <ProfessionalCard
              key={pro.id}
              professional={pro}
              onViewProfile={onViewProfile}
              onHireDirect={onHireDirect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
