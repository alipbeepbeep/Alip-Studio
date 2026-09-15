import React, { useState } from 'react';
import { Professional } from '../types';
import { X, CheckCircle2, Phone, Calendar, User, Mail, MessageSquare, Briefcase, Sparkles } from 'lucide-react';

interface HireProfessionalModalProps {
  isOpen: boolean;
  professional: Professional | null;
  onClose: () => void;
}

export const HireProfessionalModal: React.FC<HireProfessionalModalProps> = ({
  isOpen,
  professional,
  onClose,
}) => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('Commercial');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [daysCount, setDaysCount] = useState(2);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !professional) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const existing = localStorage.getItem('alip_studio_hire_requests');
      const reqs = existing ? JSON.parse(existing) : [];
      reqs.unshift({
        professionalId: professional.id,
        professionalName: professional.name,
        role: professional.role,
        clientName,
        email,
        phone,
        projectName,
        projectType,
        startDate,
        daysCount,
        notes,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('alip_studio_hire_requests', JSON.stringify(reqs));
    } catch {
      // ignore
    }
  };

  const getWhatsAppHireMessage = () => {
    return `Halo%20ALIP%20STUDIO%2C%20saya%20ingin%20mengajukan%20hiring%20crew%3A%0ANama%20Crew%3A%20${encodeURIComponent(professional.name)}%20(${encodeURIComponent(professional.displayRole)})%0AClient%3A%20${encodeURIComponent(clientName)}%0AProject%3A%20${encodeURIComponent(projectName)}%20(${encodeURIComponent(projectType)})%0AMulai%3A%20${startDate}%20(Estimasi%20${daysCount}%20hari)%0A%0AMohon%20cek%20jadwal%20dan%20ketersediaan.%20Terima%20kasih!`;
  };

  return (
    <div
      id="hire-professional-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#121217] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161d]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <Briefcase className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Hire Creative Crew</h3>
              <p className="text-xs text-neutral-400 font-mono">
                Booking: {professional.name} ({professional.role})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Hiring Inquiry Dispatched!
                </h3>
                <p className="text-neutral-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Your request to hire <strong className="text-white">{professional.name}</strong> for your <span className="text-red-400">{projectName || 'upcoming project'}</span> has been received. Our producer will coordinate schedule confirmation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=${getWhatsAppHireMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirm Schedule via WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Profile Bar */}
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-white/10 flex items-center gap-3">
                <img
                  src={professional.photo}
                  alt={professional.name}
                  className="w-12 h-12 rounded-lg object-cover border border-white/10"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-white text-sm font-bold truncate">{professional.name}</h4>
                  <p className="text-xs text-red-400 font-mono">{professional.displayRole}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 font-mono block">Estimated Rate</span>
                  <span className="text-xs font-bold text-white font-mono">{professional.dailyRate}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Producer / Director Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+62 8..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Project / Company Title *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Cerita Senja Feature"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Project Format
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500"
                  >
                    <option value="Feature Film">Narrative Feature Film</option>
                    <option value="Short Film">Festival Short Film</option>
                    <option value="Commercial">Brand Commercial / TVC</option>
                    <option value="Music Video">Music Video</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Other">Other Creative Shoot</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Production Start Date *
                  </label>
                  <input
                    required
                    type="date"
                    value={startDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Estimated Production Days
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={daysCount}
                    onChange={(e) => setDaysCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Shooting Location & Logistics Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Set location, out-of-town travel requirements, call sheet specifics..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <div className="pt-3 border-t border-white/10">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Submit Crew Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
