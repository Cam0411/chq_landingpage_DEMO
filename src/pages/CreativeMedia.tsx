import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Camera, Film, Sparkles } from 'lucide-react';

const CreativeMedia = () => {
  return (
    <div className="text-white min-h-screen pt-24 selection:bg-cyan-400 selection:text-black">
      {/* Hero Section - Cinematic Editorial */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
            alt="Creative Background" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-cyan-400" />
              <span className="text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">Visual Storytelling</span>
              <span className="w-12 h-px bg-cyan-400" />
            </motion.div>
            <h1 className="text-massive uppercase font-display leading-[0.8] mb-12">
              CREA<span className="text-outline">TIVE</span><br />MEDIA
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
              <p className="max-w-md text-slate-400 text-base md:text-lg font-light leading-relaxed md:text-left border-l border-white/10 pl-8">
                Chúng tôi không chỉ quay phim, chúng tôi kiến tạo những trải nghiệm thị giác độc bản, biến câu chuyện của bạn thành kiệt tác điện ảnh.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#22d3ee', color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-6 glass-morphism text-white px-10 py-5 rounded-full font-bold transition-all duration-500 tracking-widest uppercase text-xs"
              >
                XEM SHOWREEL <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/20 transition-colors"><Play className="w-4 h-4 fill-current" /></div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Micro-interactions */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] hidden lg:block"
        >
          <div className="w-40 h-40 glass-morphism rounded-full flex items-center justify-center group cursor-pointer hover:border-cyan-400/50 transition-colors">
            <Camera className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping opacity-20" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid - Artistic Layout */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute top-0 left-0 w-full h-full grid-lines opacity-20 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-huge font-display font-bold mb-16 leading-[0.9] uppercase skew-text">
                DỊCH VỤ <br />
                <span className="text-outline">SÁNG TẠO</span>
              </h2>
              <div className="space-y-10">
                {[
                  { icon: Film, title: "Video Production", desc: "Sản xuất video quảng cáo, TVC, Viral Clip với chất lượng 4K cinema." },
                  { icon: Camera, title: "Commercial Photo", desc: "Chụp ảnh sản phẩm, lookbook, chân dung doanh nhân cao cấp." },
                  { icon: Sparkles, title: "Post Production", desc: "Dựng phim, chỉnh màu, kỹ xảo VFX chuyên nghiệp." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="group p-8 glass-morphism-dark rounded-3xl hover:border-cyan-400/30 transition-all"
                  >
                    <div className="flex items-start gap-8">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 group-hover:rotate-12">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] rounded-[2.5rem] overflow-hidden brutal-border group"
                >
                  <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="Work 1" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 50 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-[3/4] rounded-[2.5rem] overflow-hidden brutal-border mt-12 group"
                >
                  <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="Work 2" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ rotate: [12, 8, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-400 rounded-full flex items-center justify-center p-10 text-black text-center font-display font-bold text-xs uppercase tracking-widest leading-relaxed shadow-[0_0_50px_rgba(34,211,238,0.3)] z-20"
              >
                CHẤT LƯỢNG CINEMA 4K
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-900/20 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-huge font-display font-bold leading-none uppercase skew-text">QUY TRÌNH</h2>
              <p className="text-slate-400 mt-6 font-light text-lg">Tận tâm trong từng khung hình, tỉ mỉ trong từng chi tiết để tạo nên sự khác biệt vượt trội.</p>
            </div>
            <div className="text-cyan-400 font-mono text-sm tracking-widest">01 — 04</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Concept", desc: "Lên ý tưởng và kịch bản chi tiết dựa trên mục tiêu thương hiệu." },
              { step: "02", title: "Pre-prod", desc: "Chuẩn bị bối cảnh, nhân sự, thiết bị và casting chuyên nghiệp." },
              { step: "03", title: "Production", desc: "Tiến hành quay chụp với quy chuẩn điện ảnh cao nhất." },
              { step: "04", title: "Delivery", desc: "Hậu kỳ, chỉnh màu, VFX và bàn giao sản phẩm hoàn thiện." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 glass-morphism-dark rounded-[2rem] hover:border-cyan-400/40 transition-all group"
              >
                <span className="text-6xl font-display font-bold text-white/5 mb-8 block group-hover:text-cyan-400/10 transition-colors">{item.step}</span>
                <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider font-light">{item.desc}</p>
                <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-white/10 group-hover:bg-cyan-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-400/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-huge md:text-massive font-display font-bold leading-[0.85] mb-16 uppercase skew-text">SẴN SÀNG <br /> <span className="text-outline">TỎA SÁNG?</span></h2>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-7 bg-cyan-400 text-black rounded-full font-display font-bold text-xl flex items-center gap-6 mx-auto uppercase tracking-[0.2em] transition-all"
          >
            BẮT ĐẦU DỰ ÁN <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CreativeMedia;
