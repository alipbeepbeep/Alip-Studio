import React, { useState, useEffect } from 'react';
import { Equipment, Professional, PortfolioItem, CartItem } from './types';
import { EQUIPMENT_DATA } from './data/equipmentData';
import { getDefaultDateRange } from './utils/formatters';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { EquipmentSection } from './components/EquipmentSection';
import { EquipmentDetailModal } from './components/EquipmentDetailModal';
import { RentalCartDrawer } from './components/RentalCartDrawer';
import { BookingModal } from './components/BookingModal';
import { ProfessionalsSection } from './components/ProfessionalsSection';
import { ProfessionalDetailModal } from './components/ProfessionalDetailModal';
import { HireProfessionalModal } from './components/HireProfessionalModal';
import { PortfolioSection } from './components/PortfolioSection';
import { PortfolioDetailModal } from './components/PortfolioDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  // Cart State (initialized from localStorage if available)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('alip_studio_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [hiringProfessional, setHiringProfessional] = useState<Professional | null>(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('alip_studio_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.warn('Could not save cart:', err);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  // Cart operations
  const handleAddToCart = (
    equipment: Equipment,
    startDate: string,
    endDate: string,
    days: number
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.equipment.id === equipment.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
          startDate,
          endDate,
          days,
          itemTotal: (updated[existingIndex].quantity + 1) * equipment.pricePerDay * days,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            equipment,
            quantity: 1,
            startDate,
            endDate,
            days,
            itemTotal: equipment.pricePerDay * days,
          },
        ];
      }
    });

    showToast(`${equipment.name} added to rental cart!`);
  };

  const handleQuickRent = (equipment: Equipment) => {
    const { startDate, endDate } = getDefaultDateRange();
    handleAddToCart(equipment, startDate, endDate, 3);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (equipmentId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.equipment.id === equipmentId) {
            const newQty = item.quantity + delta;
            return newQty > 0
              ? {
                  ...item,
                  quantity: newQty,
                  itemTotal: newQty * item.equipment.pricePerDay * item.days,
                }
              : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (equipmentId: string) => {
    setCartItems((prev) => prev.filter((item) => item.equipment.id !== equipmentId));
    showToast('Item removed from cart');
  };

  const handleBookingSuccess = () => {
    setCartItems([]);
    showToast('Rental request sent successfully!');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e5e5e7] selection:bg-red-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        cartItemCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
        onOpenEquipment={() => scrollToSection('equipment')}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onRentEquipment={() => scrollToSection('equipment')}
        />

        {/* 2. About The Studio */}
        <About />

        {/* 3. Services Section */}
        <Services onContactClick={() => scrollToSection('contact')} />

        {/* 4. Equipment Rental Vault */}
        <EquipmentSection
          onViewDetails={(item) => setSelectedEquipment(item)}
          onRentNow={handleQuickRent}
        />

        {/* 5. Professional Crew Roster */}
        <ProfessionalsSection
          onViewProfile={(item) => setSelectedProfessional(item)}
          onHireDirect={(item) => setHiringProfessional(item)}
        />

        {/* 6. Selected Works / Portfolio */}
        <PortfolioSection onSelectProject={(item) => setSelectedPortfolio(item)} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Call To Action */}
        <CTASection
          onStartProject={() => scrollToSection('contact')}
          onRentEquipment={() => scrollToSection('equipment')}
        />

        {/* 9. Contact Studio */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Modals & Slide-overs */}
      <EquipmentDetailModal
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
        onAddToCart={handleAddToCart}
      />

      <RentalCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToBooking={() => setIsBookingModalOpen(true)}
        onBrowseEquipment={() => scrollToSection('equipment')}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        cartItems={cartItems}
        onBookingSuccess={handleBookingSuccess}
      />

      <ProfessionalDetailModal
        professional={selectedProfessional}
        onClose={() => setSelectedProfessional(null)}
        onHireNow={(pro) => {
          setSelectedProfessional(null);
          setHiringProfessional(pro);
        }}
      />

      <HireProfessionalModal
        isOpen={!!hiringProfessional}
        professional={hiringProfessional}
        onClose={() => setHiringProfessional(null)}
      />

      <PortfolioDetailModal
        item={selectedPortfolio}
        onClose={() => setSelectedPortfolio(null)}
        onContactClick={() => scrollToSection('contact')}
      />

      {/* Action Toast Feedback */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
        onViewCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
