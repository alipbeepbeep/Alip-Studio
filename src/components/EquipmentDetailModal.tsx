import React, { useState } from 'react';
import { Equipment } from '../types';
import { formatIDR, calculateDaysBetween, getDefaultDateRange } from '../utils/formatters';
import { 
  X, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  PlusCircle, 
  Sparkles, 
  Tag, 
  Info 
} from 'lucide-react';

interface EquipmentDetailModalProps {
  equipment: Equipment | null;
  onClose: () => void;
  onAddToCart: (equipment: Equipment, startDate: string, endDate: string, days: number) => void;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({
  equipment,
  onClose,
  onAddToCart,
}) => {
  if (!equipment) return null;

  const defaultDates = getDefaultDateRange();
  const [startDate, setStartDate] = useState(defaultDates.startDate);
  const [endDate, setEndDate] = useState(defaultDates.endDate);

  const rentalDays = calculateDaysBetween(startDate, endDate);
  const estimatedTotal = equipment.pricePerDay * rentalDays;

  const handleStartDateChange = (val: string) => {
    setStartDate(val);
    if (new Date(val) > new Date(endDate)) {
      // Auto adjust end date to be at least same day
      setEndDate(val);
    }
  };

  const handleEndDateChange = (val: string) => {
    if (new Date(val) < new Date(startDate)) {
      setEndDate(startDate);
    } else {
      setEndDate(val);
    }
  };

  const handleAdd = () => {
    onAddToCart(equipment, startDate, endDate, rentalDays);
    onClose();
  };

  return (
    <div
      id="equipment-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121217] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161d]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold">
              {equipment.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {equipment.brand} • {equipment.subCategory}
            </span>
          </div>

          <button
            id="close-equipment-detail-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Image Container */}
            <div className="md:col-span-6 relative rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-lg">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Status Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {equipment.available ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Ready in Studio
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-amber-950/90 border border-amber-500/50 text-amber-400 text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Currently on Production
                    </span>
                  )}
                </div>
                <div className="text-right font-mono">
                  <span className="text-[10px] text-neutral-400 block uppercase">Base Rate</span>
                  <span className="text-sm font-bold text-white">
                    {formatIDR(equipment.pricePerDay)}/day
                  </span>
                </div>
              </div>
            </div>

            {/* Basic Info & Long Description */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  {equipment.name}
                </h2>

                <p className="text-sm text-red-400 font-medium mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Calibrated & Quality Checked by ALIP Studio Techs
                </p>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {equipment.longDescription || equipment.description}
                </p>
              </div>

              {/* Financial Summary Snippet */}
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-white/10 mt-2">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-neutral-400">Daily Rental Rate:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    {formatIDR(equipment.pricePerDay)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                  <span className="text-neutral-400">Security Deposit (Refundable):</span>
                  <span className="font-mono text-neutral-300">
                    {formatIDR(equipment.deposit)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Date Selection & Live Price Calculator */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-neutral-900/60 to-neutral-900 border border-red-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-red-500" />
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                Select Rental Duration & Estimate Cost
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {/* Start Date */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 font-mono">
                  START DATE (Pick-up)
                </label>
                <input
                  id="rental-start-date"
                  type="date"
                  value={startDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleStartDateChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/20 text-white text-sm focus:outline-none focus:border-red-500 font-mono"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 font-mono">
                  RETURN DATE (Drop-off)
                </label>
                <input
                  id="rental-end-date"
                  type="date"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => handleEndDateChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/20 text-white text-sm focus:outline-none focus:border-red-500 font-mono"
                />
              </div>

              {/* Live Calculation Output */}
              <div className="sm:col-span-2 md:col-span-1 p-3 rounded-xl bg-neutral-950 border border-white/10 flex flex-col justify-center">
                <span className="text-[11px] text-neutral-400 font-mono uppercase">
                  Duration: {rentalDays} {rentalDays > 1 ? 'Days' : 'Day'}
                </span>
                <span className="text-xl font-black text-white font-mono tracking-tight mt-0.5">
                  {formatIDR(estimatedTotal)}
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">
                  {formatIDR(equipment.pricePerDay)} × {rentalDays} days
                </span>
              </div>
            </div>

            {/* Quick Action in Date Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Info className="w-4 h-4 text-red-400 shrink-0" />
                <span>Standard check-out time is 09:00 WIB and return before 21:00 WIB.</span>
              </div>

              <button
                id="modal-add-to-rental-btn"
                onClick={handleAdd}
                disabled={!equipment.available}
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                  equipment.available
                    ? 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-red-600/30'
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add to Rental Cart ({rentalDays} {rentalDays > 1 ? 'Days' : 'Day'})</span>
              </button>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4 text-red-500" />
              <span>Technical Specifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(equipment.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="p-3 rounded-xl bg-neutral-900/60 border border-white/5 flex flex-col justify-center"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    {key}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Accessories */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Included Kit & Accessories</span>
            </h3>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 space-y-2.5">
              {equipment.includedAccessories.map((acc, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
