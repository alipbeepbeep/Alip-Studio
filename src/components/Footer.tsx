import React from 'react';
import { Film, Instagram, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#08080a] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-900/40 border border-red-500/30">
                <Film className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                ALIP<span className="text-red-500">STUDIO</span>
              </span>
            </div>

            <p className="font-display italic text-lg text-neutral-300">
              &ldquo;Bring Your Story to Life.&rdquo;
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Integrated cinema production house, high-grade camera & lighting equipment rental vault, and verified creative professionals. Based in Jakarta, serving productions worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 hover:border-red-500/50 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 hover:border-red-500/50 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              {/* TikTok Icon */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 hover:border-red-500/50 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47c1.78-1.58 2.36-3.8 2.36-6.17V8.58a8.28 8.28 0 0 0 4.86 1.56V6.69h-1.45z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Services', 'Equipment Rental', 'Professionals', 'Portfolio', 'Contact'].map((link) => {
                const idMap: Record<string, string> = {
                  'Home': 'hero',
                  'About': 'about',
                  'Services': 'services',
                  'Equipment Rental': 'equipment',
                  'Professionals': 'professionals',
                  'Portfolio': 'portfolio',
                  'Contact': 'contact',
                };
                return (
                  <li key={link}>
                    <button
                      onClick={() => onNavigate(idMap[link])}
                      className="hover:text-red-400 transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>Film Production</li>
              <li>Commercial Production</li>
              <li>Music Video</li>
              <li>Equipment Rental</li>
              <li>Professional Crew</li>
              <li>Production Consultation</li>
            </ul>
          </div>

          {/* Studio Contact info */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              Studio Dispatch
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Jl. Kemang Timur No. 42, Jakarta Selatan 12730</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="font-mono">production@alipstudio.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 ALIP STUDIO. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-neutral-500">Crafted for Filmmakers & Creators</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-red-500/50 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
