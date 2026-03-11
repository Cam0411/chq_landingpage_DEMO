import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import NavigationTrigger from './navigation/NavigationTrigger';
import NavigationMenu from './navigation/NavigationMenu';
import NavigationBrand from './navigation/NavigationBrand';

const Navigation = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { id: Page, label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'creative', label: 'Creative - Media - Video' },
    { id: 'ads', label: 'Ads Performance' },
    { id: 'systems', label: 'Hệ thống quản lý' },
    { id: 'ecommerce', label: 'Vận hành Ecommerce' },
    { id: 'web', label: 'Creative Website' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      setTimeout(() => firstItemRef.current?.focus(), 100);
    } else {
      window.removeEventListener('keydown', handleEscape);
      triggerRef.current?.focus();
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <nav 
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 transition-all duration-500 flex justify-between items-center ${
          scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-8 bg-transparent'
        }`}
      >
        <div className="md:hidden">
          <NavigationTrigger 
            ref={triggerRef}
            isOpen={isOpen}
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-white">
          <a href="/trang-chu" className="hover:text-cyan-400 transition-colors">Trang chủ</a>
          <div className="relative group">
            <button className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1">
              Dịch vụ
              <motion.span 
                className="inline-block group-hover:rotate-180 transition-transform duration-300"
              >▾</motion.span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="glass-morphism p-6 rounded-2xl min-w-[240px] flex flex-col gap-4 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                <a href="/creative" className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5">Creative Media</a>
                <a href="/ads" className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5">Ads Performance</a>
                <a href="/systems" className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5">Management Systems</a>
                <a href="/ecommerce" className="hover:text-cyan-400 transition-colors py-1 border-b border-white/5">Ecommerce Ops</a>
                <a href="/web" className="hover:text-cyan-400 transition-colors py-1">Creative Website</a>
              </div>
            </div>
          </div>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">Liên hệ</a>
          <div className="w-px h-4 bg-white/20 mx-2" />
          <a href="mailto:hi@chq.agency" className="hover:text-cyan-400 transition-colors">hi@chq.agency</a>
        </div>

        <NavigationBrand />
      </nav>

      <AnimatePresence>
        {isOpen && (
          <NavigationMenu 
            ref={firstItemRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            activePage={activePage}
            setActivePage={setActivePage}
            menuItems={menuItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
