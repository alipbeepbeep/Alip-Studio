import React, { useState, useMemo } from 'react';
import { Equipment, EquipmentCategory } from '../types';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import { EquipmentCard } from './EquipmentCard';
import { Search, SlidersHorizontal, Sparkles, AlertCircle } from 'lucide-react';

interface EquipmentSectionProps {
  onViewDetails: (equipment: Equipment) => void;
  onRentNow: (equipment: Equipment) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  onViewDetails,
  onRentNow,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const categories: { label: string; value: EquipmentCategory }[] = [
    { label: 'All Equipment', value: 'ALL' },
    { label: 'Camera', value: 'CAMERA' },
    { label: 'Lens', value: 'LENS' },
    { label: 'Lighting', value: 'LIGHTING' },
    { label: 'Audio', value: 'AUDIO' },
    { label: 'Grip & Support', value: 'GRIP & SUPPORT' },
  ];

  const filteredEquipment = useMemo(() => {
    return EQUIPMENT_DATA.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;

      // Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.subCategory.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      // Availability filter
      const matchesAvailability = !onlyAvailable || item.available;

      return matchesCategory && matchesSearch && matchesAvailability;
    });
  }, [selectedCategory, searchQuery, onlyAvailable]);

  return (
    <section id="equipment" className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinema-Grade Gear Vault</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Equipment Rental
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Peralatan perfilman kelas industri siap disewa. Setiap item diuji, dibersihkan, dan dikalibrasi oleh teknisi studio kami sebelum diserahterimakan.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-[#121217] border border-white/10 rounded-2xl p-4 sm:p-5 mb-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  id={`cat-filter-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-150 ${
                    selectedCategory === cat.value
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input & Availability Toggle */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  id="equipment-search-input"
                  type="text"
                  placeholder="Search camera, lens, mic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Only Available Toggle */}
              <button
                id="toggle-only-available"
                onClick={() => setOnlyAvailable(!onlyAvailable)}
                className={`w-full sm:w-auto px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                  onlyAvailable
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${onlyAvailable ? 'bg-emerald-400' : 'bg-neutral-500'}`} />
                <span>Available Only</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 font-mono">
          <span>
            SHOWING <strong className="text-white">{filteredEquipment.length}</strong> ITEMS
            {selectedCategory !== 'ALL' && ` IN ${selectedCategory}`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-red-400 hover:text-red-300 underline"
            >
              Clear search &ldquo;{searchQuery}&rdquo;
            </button>
          )}
        </div>

        {/* Equipment Grid */}
        {filteredEquipment.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEquipment.map((item) => (
              <EquipmentCard
                key={item.id}
                equipment={item}
                onViewDetails={onViewDetails}
                onRentNow={onRentNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#121217] border border-white/10 rounded-2xl p-8">
            <AlertCircle className="w-12 h-12 text-neutral-500 mx-auto mb-3" />
            <h3 className="text-white font-bold text-lg mb-1">No Equipment Found</h3>
            <p className="text-neutral-400 text-sm max-w-sm mx-auto mb-6">
              We couldn&apos;t find any equipment matching your criteria. Try adjusting the search keywords or category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
                setOnlyAvailable(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
