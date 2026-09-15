import React, { useState, useEffect } from 'react';
import { Film, ShoppingBag, Menu, X, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenEquipment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onNavigate,
  onOpenEquipment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Equipment Rental', id: 'equipment' },
    { label: 'Professionals', id: 'professionals' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-logo-btn"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform duration-200 border border-red-500/30">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-xl tracking-wider text-white flex items-center gap-1.5">
              ALIP<span className="text-red-500">STUDIO</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-neutral-400 block uppercase font-mono -mt-1">
              Film & Production
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className="px-3.5 py-2 text-sm text-neutral-300 hover:text-white font-medium transition-colors duration-150 rounded-md hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Rental Cart Trigger */}
          <button
            id="navbar-cart-btn"
            onClick={onOpenCart}
            aria-label="View Rental Cart"
            className="relative p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-red-500/40 text-neutral-200 transition-all duration-200 group flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-neutral-300 group-hover:text-red-400 transition-colors" />
            <span className="text-xs font-semibold tracking-wide hidden xl:inline">Cart</span>
            {cartItemCount > 0 && (
              <span
                id="navbar-cart-badge"
                className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center animate-pulse"
              >
                {cartItemCount}
              </span>
            )}
          </button>

          {/* CTA: Rent Equipment */}
          <button
            id="navbar-rent-cta-btn"
            onClick={() => {
              onOpenEquipment();
              handleNavClick('equipment');
            }}
            className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5"
          >
            Rent Equipment
          </button>
        </div>

        {/* Mobile Hamburger & Cart Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-cart-btn"
            onClick={onOpenCart}
            aria-label="View Rental Cart"
            className="relative p-2.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-200"
          >
            <ShoppingBag className="w-5 h-5 text-neutral-200" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#0e0e13] border-b border-white/10 px-6 py-5 mt-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center justify-between py-2.5 text-left text-neutral-200 hover:text-red-400 font-medium border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              id="mobile-rent-cta"
              onClick={() => {
                onOpenEquipment();
                handleNavClick('equipment');
              }}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-center font-semibold text-sm transition-colors shadow-lg shadow-red-900/30"
            >
              Rent Equipment
            </button>
            <a
              id="mobile-contact-wa"
              href="https://wa.me/6281234567890?text=Halo%20ALIP%20STUDIO%2C%20saya%20tertarik%20dengan%20layanan%20produksi%20dan%20rental%20peralatan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-center font-medium text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              Direct WhatsApp: +62 812-3456-7890
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
