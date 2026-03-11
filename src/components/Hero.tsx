import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import LetterHover from './LetterHover';

const slides = [
  {
    id: 0,
    title: "CHQ",
    subtitle: "AGENCY",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    desc: "Digital Marketing Agency - Nơi nghệ thuật sáng tạo gặp gỡ hiệu quả đột phá. Chúng tôi định nghĩa lại trải nghiệm thương hiệu.",
    tag: "00 // THE AGENCY"
  },
  {
    id: 1,
    title: "CREATIVE",
    subtitle: "MEDIA - VIDEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "Sản xuất hình ảnh và video cao cấp, nâng tầm thương hiệu cá nhân và doanh nghiệp thông qua ngôn ngữ điện ảnh.",
    tag: "01 // CREATIVE"
  },
  {
    id: 2,
    title: "ADS",
    subtitle: "PERFORMANCE",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    desc: "Chiến dịch quảng cáo đa nền tảng, tối ưu chuyển đổi và cam kết KPI dựa trên dữ liệu thực tế.",
    tag: "02 // PERFORMANCE"
  }
];

const Hero = ({ id }: { id?: string }) => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 10]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="relative h-screen bg-black overflow-hidden flex items-center grid-lines blue-glow-bg">
      {/* Background Wow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-blue-600/10 blur-[200px] rounded-full"
        />
      </div>
      {/* Background Ken Burns Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ 
              duration: 12, 
              ease: "linear",
              opacity: { duration: 1.5 }
            }}
            className="absolute inset-0"
          >
            <img 
              src={slides[current].image} 
              alt="" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
            <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[30vw] font-display font-bold leading-none text-cyan-500/10 blur-sm"
          >
            0{slides[current].id}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Main Content Layer */}
      <div className="container mx-auto px-8 md:px-24 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Side */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-[60%]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  <span className="font-mono text-[10px] tracking-[0.5em] text-cyan-400 uppercase drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">{slides[current].tag}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold ml-16">Creative Art & Digital Marketing</span>
              </div>
              
              <h1 className="text-huge md:text-massive uppercase mb-2 font-display whitespace-nowrap text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <LetterHover text={slides[current].title} />
              </h1>
              <h2 className="text-huge md:text-massive uppercase mb-8 font-display whitespace-nowrap text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                <LetterHover text={slides[current].subtitle} />
              </h2>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12">
                <p className="max-w-md text-base md:text-lg font-light opacity-60 leading-relaxed text-slate-100/70">
                  {slides[current].desc}
                </p>
                <button className="group relative px-6 py-3 border border-slate-500/50 overflow-hidden transition-all hover:border-yellow-400/50">
                  <span className="relative z-10 font-display text-[10px] uppercase tracking-widest group-hover:text-black">Khám phá dự án</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-yellow-400/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Image Side - Brutalist Frame */}
        <motion.div 
          style={{ y: y2, rotate: rotateParallax }}
          className="w-full md:w-[35%] aspect-[4/5] relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ scale: 1.2, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: -5 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative border border-slate-500/30 p-4 bg-slate-900/20 backdrop-blur-md shadow-[0_0_20px_rgba(148,163,184,0.1)]"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={slides[current].image} 
                  alt={slides[current].title} 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-600/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
              </div>
              
              {/* Floating Label */}
              <div className="absolute -bottom-4 -right-4 bg-slate-700 text-white px-4 py-2 font-display text-sm uppercase skew-text z-30 shadow-[5px_5px_0px_rgba(255,215,0,0.6)]">
                Xem chi tiết
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Side Navigation Indicators */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-30">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-4"
          >
            <span className={`text-[10px] font-mono transition-all ${current === i ? 'text-cyan-400 opacity-100 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'opacity-20 group-hover:opacity-50'}`}>
              0{i + 1}
            </span>
            <div className={`h-px transition-all duration-500 ${current === i ? 'w-12 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-4 bg-white/20 group-hover:w-8'}`} />
          </button>
        ))}
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 py-4 bg-black/50 backdrop-blur-md z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-xs uppercase tracking-[1em] opacity-20 mx-8">
              CHQ AGENCY // CREATIVE REVOLUTION // DIGITAL EXCELLENCE // 
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
