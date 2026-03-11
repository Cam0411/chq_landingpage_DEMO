import React from 'react';
import { motion } from 'motion/react';

const NavigationBrand = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden lg:flex items-center gap-2" aria-hidden="true">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full border border-white/30"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-1.5 h-1.5 rounded-full bg-white"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1], 
            boxShadow: ["0 0 5px rgba(34,211,238,0.4)", "0 0 15px rgba(34,211,238,0.8)", "0 0 5px rgba(34,211,238,0.4)"] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-1.5 h-1.5 rounded-full bg-cyan-400"
        ></motion.div>
      </div>
      
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group cursor-pointer">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text className="text-[8px] font-mono uppercase tracking-[0.2em] fill-white/30">
              <textPath href="#circlePath">
                CHQ AGENCY • CREATIVE ART • DIGITAL MARKETING • 
              </textPath>
            </text>
          </svg>
        </motion.div>
        <div className="relative z-10 text-center">
          <span className="text-xl md:text-2xl font-display font-black leading-none text-white group-hover:text-cyan-400 transition-colors">30</span>
          <p className="text-[6px] md:text-[8px] font-mono opacity-50 leading-none">YEARS</p>
        </div>
        <div className="absolute inset-0 border border-white/10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

export default NavigationBrand;
