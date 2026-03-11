import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

interface NavigationTriggerProps {
  onClick: () => void;
  isOpen: boolean;
}

const NavigationTrigger = forwardRef<HTMLButtonElement, NavigationTriggerProps>(({ onClick, isOpen }, ref) => {
  return (
    <div className="flex items-center gap-4">
      <button 
        ref={ref}
        onClick={onClick}
        aria-label="Open Menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-400 rounded-full scale-75 group-hover:scale-110 transition-all duration-500 shadow-[0_0_25px_rgba(34,211,238,0.9)] group-hover:shadow-[0_0_40px_rgba(34,211,238,1)]" />
          <div className="relative z-10 flex flex-col gap-1.5">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-black rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-black rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-black rounded-full" 
            />
          </div>
        </div>
        <span className="font-display text-xs md:text-sm tracking-[0.3em] uppercase font-extrabold text-white group-hover:text-cyan-400 transition-colors">// MENU</span>
      </button>
    </div>
  );
});

NavigationTrigger.displayName = 'NavigationTrigger';

export default NavigationTrigger;
