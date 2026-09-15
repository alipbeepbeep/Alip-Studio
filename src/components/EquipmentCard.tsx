import React from 'react';
import { Equipment } from '../types';
import { formatIDR } from '../utils/formatters';
import { Eye, PlusCircle, CheckCircle, Clock } from 'lucide-react';

interface EquipmentCardProps {
  equipment: Equipment;
  onViewDetails: (item: Equipment) => void;
  onRentNow: (item: Equipment) => void;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  equipment,
  onViewDetails,
  onRentNow,
}) => {
  return (
    <div
      id={`equipment-card-${equipment.id}`}
      className="group rounded-2xl bg-gradient-to-b from-[#15151c] to-[#0e0e13] border border-white/10 hover:border-red-500/50 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-red-950/20"
    >
      {/* Photo with Overlay & Badges */}
      <div className="relative h-56 overflow-hidden bg-black/40">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
            {equipment.category}
          </span>
          {equipment.featured && (
            <span className="px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
              Studio Pick
            </span>
          )}
        </div>

        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          {equipment.available ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-semibold backdrop-blur-md">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 text-[11px] font-semibold backdrop-blur-md">
              <Clock className="w-3 h-3 text-amber-400" />
              Booked
            </span>
          )}
        </div>

        {/* SubCategory Tag */}
        <div className="absolute bottom-2.5 left-3">
          <span className="text-[11px] text-neutral-400 font-mono tracking-wide">
            {equipment.subCategory} • {equipment.brand}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-1">
            {equipment.name}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {equipment.description}
          </p>
        </div>

        <div>
          {/* Price Tag */}
          <div className="pt-3 border-t border-white/5 flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-mono">
                Rental Rate
              </span>
              <span className="text-lg font-bold text-white font-mono tracking-tight">
                {formatIDR(equipment.pricePerDay)}
                <span className="text-xs font-normal text-neutral-400 font-sans ml-1">
                  / Day
                </span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-mono">
                Deposit
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {formatIDR(equipment.deposit)}
              </span>
            </div>
          </div>

          {/* Action Buttons: [View Details] and [Rent Now] */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id={`btn-view-${equipment.id}`}
              onClick={() => onViewDetails(equipment)}
              className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 text-xs font-semibold tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-neutral-400" />
              <span>Details</span>
            </button>

            <button
              id={`btn-rent-${equipment.id}`}
              onClick={() => onRentNow(equipment)}
              disabled={!equipment.available}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-1.5 shadow-md ${
                equipment.available
                  ? 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-red-600/20 hover:shadow-red-600/40'
                  : 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
              }`}
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Rent Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
