import React, { useState } from 'react';
import { CartItem, BookingSubmission } from '../types';
import { formatIDR } from '../utils/formatters';
import { 
  X, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  Film, 
  Building, 
  Mail, 
  User, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onBookingSuccess: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onBookingSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [rentalDate, setRentalDate] = useState(
    cartItems[0]?.startDate || new Date().toISOString().split('T')[0]
  );
  const [returnDate, setReturnDate] = useState(
    cartItems[0]?.endDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [purpose, setPurpose] = useState('Film');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingSubmission | null>(null);

  if (!isOpen) return null;

  const totalRentAmount = cartItems.reduce(
    (acc, curr) => acc + curr.equipment.pricePerDay * curr.days * curr.quantity,
    0
  );
  const totalDepositAmount = cartItems.reduce(
    (acc, curr) => acc + curr.equipment.deposit * curr.quantity,
    0
  );

  const rentalPurposes = [
    'Film',
    'Short Film',
    'Commercial',
    'Music Video',
    'Documentary',
    'Content Creation',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking: BookingSubmission = {
      id: 'ALIP-' + Math.floor(100000 + Math.random() * 900000),
      fullName,
      email,
      phone,
      companyName,
      rentalDate,
      returnDate,
      purpose,
      additionalNotes,
      items: cartItems,
      totalAmount: totalRentAmount,
      depositAmount: totalDepositAmount,
      submittedAt: new Date().toISOString(),
      status: 'Pending Review',
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem('alip_studio_bookings');
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.unshift(newBooking);
      localStorage.setItem('alip_studio_bookings', JSON.stringify(bookings));
    } catch (err) {
      console.warn('Failed to save booking to localStorage:', err);
    }

    setSubmittedBooking(newBooking);
    setIsSubmitted(true);
    onBookingSuccess();
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setSubmittedBooking(null);
    onClose();
  };

  const getWhatsAppMessage = () => {
    if (!submittedBooking) return '';
    const gearList = submittedBooking.items
      .map((i) => `• ${i.equipment.name} (${i.quantity}x, ${i.days} hari)`)
      .join('%0A');

    return `Halo%20ALIP%20STUDIO%2C%20saya%20sudah%20mengajukan%20booking%20rental%20dengan%20Kode%3A%20${submittedBooking.id}.%0ANama%3A%20${encodeURIComponent(submittedBooking.fullName)}%0AProduksi%2FProject%3A%20${encodeURIComponent(submittedBooking.purpose)}%0ATanggal%3A%20${submittedBooking.rentalDate}%20s%2Fd%20${submittedBooking.returnDate}%0A%0APeralatan%3A%0A${gearList}%0ATotal%3A%20${encodeURIComponent(formatIDR(submittedBooking.totalAmount))}%0A%0AMohon%20konfirmasi%20ketersediaan.%20Terima%20kasih!`;
  };

  return (
    <div
      id="booking-form-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#121217] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161d]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <Film className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {isSubmitted ? 'Booking Confirmed' : 'Rental Booking Request'}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">ALIP STUDIO • Production Dispatch</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {isSubmitted && submittedBooking ? (
            /* Submission Success State */
            <div className="text-center py-6 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-neutral-800 border border-white/10 text-xs font-mono text-neutral-300 mb-2">
                  BOOKING ID: <span className="text-red-400 font-bold">{submittedBooking.id}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Rental Request Received!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Your rental request has been received. Our team will contact you shortly to confirm availability and payment details.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="p-5 rounded-xl bg-neutral-900/80 border border-white/10 text-left text-xs space-y-3 max-w-lg mx-auto">
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-neutral-400">Client Name:</span>
                  <span className="text-white font-medium">{submittedBooking.fullName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-neutral-400">Project Purpose:</span>
                  <span className="text-white font-medium">{submittedBooking.purpose}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-neutral-400">Rental Period:</span>
                  <span className="text-white font-medium font-mono">
                    {submittedBooking.rentalDate} &rarr; {submittedBooking.returnDate}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-neutral-400">Selected Equipment:</span>
                  <span className="text-white font-medium">{submittedBooking.items.length} items</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sm">
                  <span className="text-neutral-300">Estimated Total:</span>
                  <span className="text-red-400 font-mono">
                    {formatIDR(submittedBooking.totalAmount)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/6281234567890?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Instant Confirm on WhatsApp</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Equipment Summary Bar */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-neutral-400 uppercase tracking-wider">
                    EQUIPMENT IN ORDER ({cartItems.length})
                  </span>
                  <span className="font-mono font-bold text-red-400">
                    Est. Total: {formatIDR(totalRentAmount)}
                  </span>
                </div>

                <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.equipment.id}
                      className="flex items-center justify-between text-xs py-1 border-b border-white/5 last:border-0"
                    >
                      <span className="text-neutral-300 font-medium truncate max-w-[240px] sm:max-w-xs">
                        {item.equipment.name} ({item.quantity}x)
                      </span>
                      <span className="font-mono text-neutral-400 text-[11px]">
                        {item.days}d • {formatIDR(item.equipment.pricePerDay * item.days * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal & Company Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Raditya Wicaksono"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      required
                      type="email"
                      placeholder="production@agency.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      required
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Company / Production Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="e.g. Lumina Films / Freelance"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Rental Date (Pick-up) *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      required
                      type="date"
                      value={rentalDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setRentalDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Return Date (Drop-off) *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input
                      required
                      type="date"
                      value={returnDate}
                      min={rentalDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Rental Purpose */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Rental Purpose *
                </label>
                <div className="flex flex-wrap gap-2">
                  {rentalPurposes.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPurpose(p)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        purpose === p
                          ? 'bg-red-600 text-white border border-red-500'
                          : 'bg-neutral-900 text-neutral-400 border border-white/10 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Additional Notes & Special Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
                  <textarea
                    rows={3}
                    placeholder="Specific lens mount needed, delivery to set, insurance preferences..."
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  id="submit-rental-request-btn"
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-red-600/30"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit Rental Request</span>
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  By submitting, you agree to ALIP STUDIO equipment checkout safety protocol.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
