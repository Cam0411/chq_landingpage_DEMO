import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LetterHover from './LetterHover';

const slides = [
  {
    id: 1,
    title: "Sáng tạo",
    subtitle: "Độc bản",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    desc: "Quy trình sáng tạo độc bản, tối ưu hóa hình ảnh thương hiệu trên mọi nền tảng."
  },
  {
    id: 2,
    title: "Hiệu quả",
    subtitle: "Vượt trội",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "Cam kết KPI dựa trên doanh thu thực tế và chi phí tối ưu cho doanh nghiệp."
  },
  {
    id: 3,
    title: "Bản sắc",
    subtitle: "Thương hiệu",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    desc: "Xây dựng mối quan hệ Win-Win giữa Agency - Nhân sự - Khách hàng."
  }
];

const CreativeSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, scale: 1.2, x: direction > 0 ? '20%' : '-20%' }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 1.1, x: direction > 0 ? '-20%' : '20%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-cyan-900/40 to-transparent" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center px-8 md:px-24">
        <div className="max-w-5xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 50, opacity: 0, skewY: 5 }}
              animate={{ y: 0, opacity: 1, skewY: 0 }}
              exit={{ y: -50, opacity: 0, skewY: -5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-6 block">
                Dự án tiêu biểu // 0{current + 1}
              </span>
              <h3 className="text-huge md:text-massive font-display uppercase leading-[0.7] mb-8 blend-exclusion text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <LetterHover text={slides[current].title} /> <br />
                <span className="text-outline-blue"><LetterHover text={slides[current].subtitle} /></span>
              </h3>
              <p className="max-w-md text-[10px] md:text-sm font-mono opacity-60 leading-relaxed uppercase tracking-[0.2em] text-slate-100/60">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-8 md:left-24 right-8 md:right-24 flex justify-between items-end z-30">
        <div className="flex items-center gap-12">
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-500/20 flex items-center justify-center hover:bg-slate-600 hover:text-white hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] transition-all duration-500 group bg-black/40 backdrop-blur-sm"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-500/20 flex items-center justify-center hover:bg-slate-600 hover:text-white hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] transition-all duration-500 group bg-black/40 backdrop-blur-sm"
            >
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <span className="font-mono text-[10px] opacity-40">0{current + 1}</span>
            <div className="w-32 h-px bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-yellow-400/50 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="font-mono text-[10px] opacity-40">0{slides.length}</span>
          </div>
        </div>

        <div className="hidden lg:block text-right">
          <p className="text-[10px] font-mono tracking-[0.4em] opacity-20 uppercase mb-2">Cuộn để khám phá</p>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default CreativeSlider;
