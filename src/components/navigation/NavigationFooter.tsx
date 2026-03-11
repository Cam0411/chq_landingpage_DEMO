import React from 'react';

const NavigationFooter = ({ isMobile = false }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <div className="md:hidden mt-auto pt-12 border-t border-white/10 space-y-8">
        <div>
          <p className="text-[8px] uppercase tracking-[0.4em] opacity-30 mb-4 text-slate-400">Socials</p>
          <div className="flex gap-6 text-xs font-display uppercase">
            <a href="#" className="hover:text-slate-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-slate-400 transition-colors">LinkedIn</a>
          </div>
        </div>
        <div>
          <p className="text-[8px] uppercase tracking-[0.4em] opacity-30 mb-4 text-slate-400">Office</p>
          <p className="text-xs font-light opacity-60 text-slate-100/60">District 1, Ho Chi Minh City</p>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex w-1/3 p-24 flex-col justify-end border-l border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-sm pointer-events-none" />
      <div className="space-y-12 relative z-10">
        <div>
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 mb-6 text-slate-400">Socials</p>
          <div className="flex flex-col gap-2 text-xl md:text-2xl font-display uppercase">
            <a href="#" aria-label="Visit our Instagram" className="hover:text-slate-400 transition-colors">Instagram</a>
            <a href="#" aria-label="Visit our LinkedIn" className="hover:text-slate-400 transition-colors">LinkedIn</a>
            <a href="#" aria-label="Visit our Behance" className="hover:text-slate-400 transition-colors">Behance</a>
          </div>
        </div>
        <div>
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 mb-6 text-slate-400">Office</p>
          <p className="text-lg md:text-xl font-light opacity-60 text-slate-100/60">District 1, Ho Chi Minh City<br />Vietnam, 700000</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationFooter;
