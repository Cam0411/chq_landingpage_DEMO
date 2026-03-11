import React, { forwardRef } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Page } from '../../types';
import NavigationFooter from './NavigationFooter';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: Page;
  setActivePage: (p: Page) => void;
  menuItems: { id: Page, label: string }[];
}

const NavigationMenu = forwardRef<HTMLButtonElement, NavigationMenuProps>(({ isOpen, onClose, activePage, setActivePage, menuItems }, ref) => {
  const getPath = (id: Page) => {
    if (id === 'home') return '/trang-chu';
    return `/${id}`;
  };

  const handleItemClick = () => {
    onClose();
    window.scrollTo(0, 0);
  };

  return (
    <motion.div 
      id="main-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex flex-col md:flex-row blue-glow-bg"
    >
      {/* Background Wow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="flex-1 p-8 md:p-24 flex flex-col justify-center overflow-y-auto relative z-10">
        <button 
          onClick={onClose}
          aria-label="Close Menu"
          className="absolute top-6 md:top-12 right-6 md:right-12 p-2 md:p-4 hover:rotate-90 transition-transform duration-500 z-10"
        >
          <X className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
        </button>

        <div className="flex flex-col gap-2 md:gap-4 mb-12 md:mb-0">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={getPath(item.id)}
                onClick={handleItemClick}
                className="group relative text-left py-2 md:py-3 block"
              >
                <span className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 text-[8px] md:text-xs font-mono opacity-0 group-hover:opacity-40 transition-opacity text-cyan-400" aria-hidden="true">0{idx + 1}</span>
                <span className={`font-display text-3xl sm:text-5xl md:text-[4vw] uppercase tracking-tighter leading-[0.8] transition-all duration-500 glitch-hover ${activePage === item.id ? 'text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'text-white hover:text-cyan-400 group-hover:skew-x-[-10deg]'}`}>
                  {item.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <NavigationFooter isMobile={true} />
      </div>

      <NavigationFooter />
    </motion.div>
  );
});

NavigationMenu.displayName = 'NavigationMenu';

export default NavigationMenu;
