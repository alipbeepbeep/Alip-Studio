import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Optional save to localStorage
    try {
      const existing = localStorage.getItem('alip_studio_messages');
      const messages = existing ? JSON.parse(existing) : [];
      messages.unshift({
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('alip_studio_messages', JSON.stringify(messages));
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Contact ALIP STUDIO
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Have a project in mind or need gear recommendations? Visit our studio in South Jakarta or drop us a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Studio Information & Map Mockup */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#121217] border border-white/10 space-y-5">
              <h3 className="font-display text-xl font-bold text-white">Studio Headquarters</h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-neutral-400">Studio Address</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Jl. Kemang Timur No. 42, Bangka, Mampang Prapatan
                  </p>
                  <p className="text-xs text-neutral-400">Jakarta Selatan, DKI Jakarta 12730, Indonesia</p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-neutral-400">Phone & WhatsApp</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    +62 21 7890 1234 (Office)
                  </p>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20ALIP%20STUDIO%2C%20saya%20ingin%20konsultasi%20produksi%20film%20atau%20rental%20gear."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-mono inline-flex items-center gap-1 mt-0.5"
                  >
                    +62 812 3456 7890 (WhatsApp Direct) &rarr;
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-neutral-400">Email Inquiries</h4>
                  <p className="text-sm font-semibold text-white mt-0.5 font-mono">
                    production@alipstudio.com
                  </p>
                  <p className="text-xs text-neutral-400">rental@alipstudio.com (Gear Dispatch)</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-pink-500 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-neutral-400">Instagram</h4>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-red-400 mt-0.5 inline-flex items-center gap-1"
                  >
                    @alipstudio.id <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                  <p className="text-xs text-neutral-400">Behind the scenes & updates</p>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-neutral-500" />
                <span>Gear Dispatch Open Daily: 08:00 – 22:00 WIB</span>
              </div>
            </div>

            {/* Visual Google Maps Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-52 bg-neutral-900 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Jakarta map visual location"
                className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 mb-2 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-sm">ALIP STUDIO JAKARTA</h4>
                <p className="text-xs text-neutral-300 max-w-xs">Kemang Creative Quarter, South Jakarta</p>
                <a
                  href="https://maps.google.com/?q=Kemang+Timur+Jakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 px-3 py-1 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-semibold border border-white/20 inline-flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#121217] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Our production director will review your inquiry and get back to you within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Send a Message to Production
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Maya Indah"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+62 8..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Subject *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Film Production / Equipment / Crew"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project, timeline, shooting location, or specific equipment requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 resize-none"
                    />
                  </div>

                  <button
                    id="contact-send-btn"
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-red-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
