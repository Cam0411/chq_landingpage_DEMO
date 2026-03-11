import React from 'react';
import { Play } from 'lucide-react';

const VideoTestimonials = () => {
  const testimonials = [
    { name: "Minh Trần", role: "CEO, TechFlow", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Lan Phương", role: "Founder, Bloom", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Hoàng Nam", role: "Director, Zenith", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="py-32 px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-2xl md:text-3xl font-display uppercase mb-16 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Khách hàng nói gì</h4>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-cyan-500/10">
              <img 
                src={t.img} 
                alt={t.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                  <Play fill="currentColor" size={18} />
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-lg md:text-xl font-display uppercase text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60 text-slate-100/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
