import React from 'react';
import { CartItem } from '../types';
import { formatIDR } from '../utils/formatters';
import { X, Trash2, Plus, Minus, Calendar, ShoppingBag, ArrowRight, Shield } from 'lucide-react';

interface RentalCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToBooking: () => void;
  onBrowseEquipment: () => void;
}

export const RentalCartDrawer: React.FC<RentalCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToBooking,
  onBrowseEquipment,
}) => {
  if (!isOpen) return null;

  const totalRentAmount = items.reduce(
    (acc, curr) => acc + curr.equipment.pricePerDay * curr.days * curr.quantity,
    0
  );

  const totalDepositAmount = items.reduce(
    (acc, curr) => acc + curr.equipment.deposit * curr.quantity,
    0
  );

  return (
    <div
      id="rental-cart-drawer"
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121217] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#16161d]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Rental Cart</h3>
                <span className="text-xs text-neutral-400 font-mono">
                  {items.length} {items.length === 1 ? 'gear item' : 'gear items'} selected
                </span>
              </div>
            </div>

            <button
              id="close-cart-drawer-btn"
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length > 0 ? (
              items.map((item) => {
                const lineTotal = item.equipment.pricePerDay * item.days * item.quantity;
                return (
                  <div
                    key={item.equipment.id}
                    id={`cart-item-${item.equipment.id}`}
                    className="p-4 rounded-xl bg-neutral-900/80 border border-white/5 flex gap-4 relative group"
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.equipment.image}
                      alt={item.equipment.name}
                      className="w-18 h-18 rounded-lg object-cover bg-black/40 border border-white/10 shrink-0"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white text-sm font-bold truncate">
                          {item.equipment.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.equipment.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mt-1 font-mono">
                        <Calendar className="w-3 h-3 text-red-400" />
                        <span>{item.days} {item.days > 1 ? 'Days' : 'Day'}</span>
                        <span>•</span>
                        <span>{formatIDR(item.equipment.pricePerDay)}/day</span>
                      </div>

                      <p className="text-[10px] text-neutral-500 font-mono mt-0.5">
                        {item.startDate} &rarr; {item.endDate}
                      </p>

                      {/* Quantity & Line Subtotal */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        <div className="flex items-center rounded-lg bg-neutral-800 border border-white/10 p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.equipment.id, -1)}
                            className="p-1 text-neutral-400 hover:text-white rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center font-mono text-xs font-semibold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.equipment.id, 1)}
                            className="p-1 text-neutral-400 hover:text-white rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-mono font-bold text-sm text-white">
                          {formatIDR(lineTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 px-4">
                <ShoppingBag className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
                <h4 className="text-white font-bold text-base mb-1">Your rental cart is empty</h4>
                <p className="text-neutral-400 text-xs max-w-xs mx-auto mb-6">
                  Explore our cinema-grade cameras, prime glass, lighting fixtures, and audio packages to build your production kit.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onBrowseEquipment();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30"
                >
                  Browse Equipment
                </button>
              </div>
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#16161d] space-y-4">
              {/* Pricing breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Rental Subtotal:</span>
                  <span className="font-mono text-white font-semibold">
                    {formatIDR(totalRentAmount)}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-red-400" />
                    Refundable Security Deposit:
                  </span>
                  <span className="font-mono text-neutral-300">
                    {formatIDR(totalDepositAmount)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span>Estimated Total:</span>
                  <span className="font-mono text-base text-red-400">
                    {formatIDR(totalRentAmount)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-continue-booking-btn"
                onClick={() => {
                  onClose();
                  onProceedToBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-red-600/30"
              >
                <span>Continue Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-neutral-400">
                No credit card charged yet. Studio coordinator will confirm kit availability.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
