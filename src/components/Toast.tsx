import React, { useEffect } from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  onViewCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  onViewCart,
}) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#14141b] border border-red-500/40 text-white shadow-2xl backdrop-blur-md">
        <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
          <CheckCircle2 className="w-4 h-4 text-red-400" />
        </div>

        <span className="text-xs sm:text-sm font-medium pr-1">{message}</span>

        {onViewCart && (
          <button
            onClick={() => {
              onClose();
              onViewCart();
            }}
            className="px-2.5 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-red-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10"
          >
            Cart
          </button>
        )}

        <button
          onClick={onClose}
          className="p-1 text-neutral-400 hover:text-white rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
