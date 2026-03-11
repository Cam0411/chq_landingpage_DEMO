import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Truck, BarChart, Users, Package, Globe, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const EcommerceOps = () => {
  return (
    <div className="text-white min-h-screen pt-24 selection:bg-cyan-400 selection:text-black">
      {/* Hero Section - Clean & Modern */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full grid-lines opacity-10 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                <span className="text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold">Ecommerce Excellence</span>
              </motion.div>
              <h1 className="text-massive uppercase font-display leading-[0.8] mb-10 text-white">
                VẬN HÀNH <br />
                <span className="text-cyan-400 hover:text-white transition-colors duration-700 cursor-default">ECOMMERCE</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                Giải pháp toàn diện từ setup gian hàng, quản trị vận hành đến tối ưu hóa doanh thu trên các sàn TMĐT hàng đầu.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-cyan-500 text-black rounded-full font-display font-bold text-sm tracking-widest uppercase hover:bg-white transition-all shadow-xl shadow-cyan-500/20"
                >
                  Bắt đầu ngay
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-white/20 rounded-full font-display font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all text-white"
                >
                  Tìm hiểu thêm
                </motion.button>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] flex items-center justify-center p-12 shadow-2xl shadow-black/5 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-[4rem]" />
                <div className="grid grid-cols-2 gap-8 w-full relative z-10">
                  {[ShoppingBag, Truck, BarChart, Users].map((Icon, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -10, rotate: i % 2 === 0 ? 5 : -5 }}
                      className="bg-black/40 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl shadow-black/5 border border-white/10 flex flex-col items-center justify-center gap-6 group transition-all duration-500"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-500">
                        <Icon className="w-8 h-8 text-cyan-400 group-hover:text-black" />
                      </div>
                      <div className="h-2 w-16 bg-white/10 rounded-full group-hover:bg-cyan-400/30 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 p-8 bg-cyan-500 text-black rounded-3xl shadow-2xl hidden lg:block"
              >
                <div className="text-4xl font-display font-bold mb-2">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">SLA Cam kết</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Clean Cards */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-huge font-display font-bold mb-6 uppercase leading-none skew-text text-white">GIẢI PHÁP <br /> <span className="text-cyan-400/30">TOÀN DIỆN</span></h2>
            <p className="text-slate-400 font-light text-lg">Chúng tôi đồng hành cùng doanh nghiệp trong mọi giai đoạn phát triển, từ những bước chân đầu tiên trên sàn TMĐT.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ecom Setup", desc: "Xây dựng gian hàng chuẩn SEO trên Shopee, TikTok Shop, Lazada.", icon: Package },
              { title: "Store Management", desc: "Quản trị đơn hàng, tồn kho và chăm sóc khách hàng 24/7.", icon: Zap },
              { title: "KOL/KOC Booking", desc: "Kết nối mạng lưới KOL/KOC phù hợp để bùng nổ doanh số.", icon: Users },
              { title: "Ads Optimization", desc: "Tối ưu hóa quảng cáo nội sàn và ngoại sàn TMĐT.", icon: BarChart },
              { title: "Logistics Support", desc: "Tư vấn và kết nối các đơn vị vận chuyển, kho bãi tối ưu.", icon: Truck },
              { title: "Global Selling", desc: "Hỗ trợ doanh nghiệp đưa sản phẩm ra thị trường quốc tế (Amazon, Etsy).", icon: Globe }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="p-12 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 shadow-xl shadow-black/[0.02] hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-cyan-400 transition-all duration-500 group-hover:rotate-12">
                  <item.icon className="w-8 h-8 text-cyan-400 group-hover:text-black" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-huge font-display font-bold mb-24 text-center uppercase leading-none skew-text text-white">LỘ TRÌNH <br /> <span className="text-outline">TĂNG TRƯỞNG</span></h2>
            <div className="space-y-16">
              {[
                { step: "Giai đoạn 1", title: "Thâm nhập thị trường", desc: "Setup gian hàng, chuẩn hóa hình ảnh và nội dung sản phẩm chuyên nghiệp." },
                { step: "Giai đoạn 2", title: "Tăng trưởng doanh số", desc: "Triển khai các chiến dịch marketing, booking KOL và tối ưu quảng cáo đa kênh." },
                { step: "Giai đoạn 3", title: "Tối ưu hóa vận hành", desc: "Xây dựng quy trình xử lý đơn hàng tự động và hệ thống CSKH chuẩn 5 sao." },
                { step: "Giai đoạn 4", title: "Mở rộng quy mô", desc: "Phát triển đa kênh, thâm nhập thị trường quốc tế và xây dựng thương hiệu bền vững." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-10 relative group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center font-display font-bold text-black z-10 text-xl shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-px h-full bg-white/10 absolute top-16" />}
                  </div>
                  <div className="pb-16">
                    <span className="text-cyan-400 font-display font-bold text-sm uppercase tracking-widest mb-4 block">{item.step}</span>
                    <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-light max-w-2xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 border border-white/10 shadow-2xl">
            <div className="flex-1">
              <h2 className="text-huge font-display font-bold mb-12 uppercase leading-[0.9] skew-text text-white">TẠI SAO CHỌN <br /> <span className="text-cyan-400">CHQ AGENCY?</span></h2>
              <div className="space-y-8">
                {[
                  "Đội ngũ chuyên gia TMĐT giàu kinh nghiệm.",
                  "Hệ thống báo cáo minh bạch, thời gian thực.",
                  "Mạng lưới KOL/KOC rộng khắp mọi ngành hàng.",
                  "Cam kết tăng trưởng doanh thu bền vững."
                ].map((text, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 group-hover:text-black" />
                    </div>
                    <span className="font-display font-bold uppercase tracking-widest text-xs text-slate-300">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-8 w-full">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md p-12 rounded-[3rem] text-center border border-white/10 shadow-xl"
              >
                <div className="text-6xl font-display font-bold text-cyan-400 mb-4 tracking-tighter">500+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Gian hàng</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md p-12 rounded-[3rem] text-center border border-white/10 shadow-xl mt-12"
              >
                <div className="text-6xl font-display font-bold text-cyan-400 mb-4 tracking-tighter">1M+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Đơn hàng</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-huge md:text-massive font-display font-bold mb-16 uppercase leading-none skew-text tracking-tighter text-white">SẴN SÀNG ĐỂ <br /> <span className="text-cyan-400">BÙNG NỔ DOANH SỐ?</span></h2>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-7 bg-cyan-400 text-black rounded-full font-display font-bold text-xl flex items-center gap-6 mx-auto uppercase tracking-[0.2em] transition-all shadow-2xl shadow-cyan-400/20"
          >
            LIÊN HỆ TƯ VẤN NGAY <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceOps;
