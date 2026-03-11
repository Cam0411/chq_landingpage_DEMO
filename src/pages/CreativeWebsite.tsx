import React from 'react';
import { motion } from 'motion/react';
import { Layout, Palette, MousePointer2, Smartphone, Monitor, Code2, Sparkles, ArrowRight, Check } from 'lucide-react';

const CreativeWebsite = () => {
  return (
    <div className="text-white min-h-screen pt-24 selection:bg-cyan-400 selection:text-black">
      {/* Hero Section - Minimalist & Bold */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full grid-lines opacity-10 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="w-12 h-px bg-cyan-400" />
                <span className="text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold">Digital Experience</span>
              </motion.div>
              <h1 className="text-massive uppercase font-display leading-[0.8] mb-12 text-white">
                CREATIVE <br />
                <span className="text-cyan-400 hover:text-white transition-colors duration-700 cursor-default">WEBSITE</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-16">
                Chúng tôi không chỉ làm website. Chúng tôi tạo ra những trải nghiệm số mượt mà, nơi thẩm mỹ đỉnh cao gặp gỡ hiệu năng vượt trội.
              </p>
              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-xl shadow-black/5 flex items-center justify-center group-hover:bg-cyan-400 transition-all duration-500 group-hover:-translate-y-1">
                    <Monitor className="w-6 h-6 text-cyan-400 group-hover:text-black" />
                  </div>
                  <span className="font-display font-bold uppercase tracking-widest text-xs text-white">Desktop First</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-xl shadow-black/5 flex items-center justify-center group-hover:bg-cyan-400 transition-all duration-500 group-hover:-translate-y-1">
                    <Smartphone className="w-6 h-6 text-cyan-400 group-hover:text-black" />
                  </div>
                  <span className="font-display font-bold uppercase tracking-widest text-xs text-white">Mobile Responsive</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy - Grid Layout */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden relative group shadow-2xl shadow-black/5"
              >
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000" 
                  alt="Design Process" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-cyan-500/5 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -right-10 p-12 bg-black text-white rounded-[2rem] hidden lg:block shadow-2xl"
              >
                <Sparkles className="w-12 h-12 text-cyan-400 mb-6 animate-pulse" />
                <div className="text-3xl font-display font-bold uppercase leading-none tracking-tighter">UI/UX <br /> <span className="text-cyan-400">FOCUSED</span></div>
              </motion.div>
            </div>
            <div>
              <h2 className="text-huge font-display font-bold mb-10 leading-[0.9] uppercase skew-text">THẨM MỸ <br /> <span className="text-zinc-300">& TRẢI NGHIỆM</span></h2>
              <p className="text-zinc-500 text-lg mb-16 font-light leading-relaxed">
                Mỗi pixel đều được tính toán tỉ mỉ để dẫn dắt hành vi người dùng, tối ưu hóa tỷ lệ chuyển đổi và để lại ấn tượng thương hiệu sâu sắc.
              </p>
              <div className="space-y-10">
                {[
                  { title: "UI Design", desc: "Giao diện hiện đại, tinh tế và đồng nhất với bộ nhận diện thương hiệu." },
                  { title: "UX Strategy", desc: "Nghiên cứu hành vi người dùng để tối ưu hóa luồng trải nghiệm mượt mà." },
                  { title: "Interaction", desc: "Hiệu ứng chuyển động tinh tế giúp website trở nên sống động và thu hút." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-cyan-500 transition-colors duration-500">
                      <Check className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl mb-3 uppercase tracking-tight group-hover:text-cyan-500 transition-colors">{item.title}</h4>
                      <p className="text-zinc-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Modern Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-5" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-huge font-display font-bold mb-8 uppercase leading-none">CÔNG NGHỆ <br /> <span className="text-outline">HIỆN ĐẠI</span></h2>
            <p className="text-zinc-500 font-light text-lg">Chúng tôi sử dụng những công nghệ tiên tiến nhất để đảm bảo tốc độ, bảo mật và khả năng mở rộng không giới hạn.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layout, title: "Landing Page", desc: "Tối ưu chuyển đổi" },
              { icon: Palette, title: "Brand Identity", desc: "Đồng nhất thương hiệu" },
              { icon: Code2, title: "Clean Code", desc: "Tối ưu hóa SEO" },
              { icon: MousePointer2, title: "Interactive", desc: "Trải nghiệm sống động" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 glass-morphism-dark rounded-[2.5rem] border border-white/5 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 group-hover:rotate-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-huge font-display font-bold uppercase leading-none mb-4">Dự án <br /> <span className="text-zinc-300">tiêu biểu</span></h2>
              <p className="text-zinc-500 font-light">Những sản phẩm số được nhào nặn từ sự sáng tạo và kỹ thuật bậc thầy.</p>
            </div>
            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 font-display font-bold uppercase tracking-widest text-xs group"
            >
              XEM TẤT CẢ <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"><ArrowRight className="w-5 h-5" /></div>
            </motion.button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { title: "E-commerce Platform", category: "UI/UX Design & Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
              { title: "Corporate Website", category: "Brand Identity & Web Design", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 relative">
                  <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={project.title} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-500"><ArrowRight className="w-6 h-6" /></div>
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold mb-3 uppercase tracking-tighter group-hover:text-cyan-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{project.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-huge md:text-massive font-display font-bold mb-16 tracking-tighter leading-none uppercase skew-text text-white">BẮT ĐẦU XÂY DỰNG <br /> <span className="text-cyan-400">TRẢI NGHIỆM SỐ?</span></h2>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-7 border-2 border-cyan-400 bg-cyan-400 text-black rounded-full font-display font-bold text-xl transition-all uppercase tracking-[0.2em] shadow-2xl shadow-cyan-400/20"
          >
            LIÊN HỆ CHÚNG TÔI NGAY
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CreativeWebsite;
