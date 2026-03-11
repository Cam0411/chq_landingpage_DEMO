import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ServiceCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const services = [
    { title: "Phim & Video", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", desc: "Kể chuyện bằng hình ảnh điện ảnh, nắm bắt linh hồn của thương hiệu." },
    { title: "Nhiếp ảnh", img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800", desc: "Chụp ảnh thương mại cao cấp cho các nền tảng kỹ thuật số và in ấn." },
    { title: "3D Motion", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800", desc: "Hoạt ảnh 3D sống động, mang sản phẩm của bạn vào cuộc sống thực." },
    { title: "Thương hiệu", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", desc: "Xây dựng bản sắc hình ảnh chiến lược, tạo sự kết nối với khách hàng." }
  ];

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  }, []);

  return (
    <div className="py-32 overflow-hidden">
      <div className="px-8 mb-12">
        <h4 className="text-2xl md:text-3xl font-display uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Lĩnh vực chuyên môn</h4>
      </div>
      <motion.div 
        ref={containerRef}
        drag="x"
        dragConstraints={constraints}
        className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
      >
        {services.map((service, i) => (
          <motion.div 
            key={i}
            className="min-w-[350px] md:min-w-[450px] aspect-[4/5] relative group rounded-2xl overflow-hidden"
          >
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <h5 className="text-xl md:text-2xl font-display uppercase mb-2 text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">{service.title}</h5>
              <p className="text-[10px] md:text-xs opacity-60 leading-relaxed text-slate-100/70">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="px-8 mt-8 flex items-center gap-4 opacity-30 text-slate-400">
        <ArrowRight size={14} />
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Drag to explore</span>
      </div>
    </div>
  );
};

export default ServiceCarousel;
