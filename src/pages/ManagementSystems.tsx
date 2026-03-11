import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Network, Shield, Settings, Layers, Code2, Workflow, Terminal } from 'lucide-react';

const ManagementSystems = () => {
  return (
    <div className="text-white min-h-screen pt-24 selection:bg-cyan-400 selection:text-black">
      {/* Hero Section - Technical Grid */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/5 grid-lines">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-cyan-400/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-4 py-2 glass-morphism rounded-full mb-10"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 font-bold">System Architecture v3.0</span>
            </motion.div>
            <h1 className="text-massive uppercase font-display leading-[0.85] skew-text mb-12">
              SYSTEMS <br />
              <span className="text-outline">INFRASTRUCTURE</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Xây dựng nền tảng kỹ thuật vững chắc, tự động hóa quy trình và tối ưu hóa hiệu suất vận hành cho doanh nghiệp số.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architecture - Brutalist Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-cyan-400/5">
            {[
              { icon: Cpu, title: "Automation Engine", desc: "Tự động hóa các tác vụ lặp đi lặp lại, giảm thiểu sai sót con người và tăng tốc độ xử lý." },
              { icon: Database, title: "Data Infrastructure", desc: "Hệ thống lưu trữ và quản lý dữ liệu tập trung, bảo mật và dễ dàng truy xuất." },
              { icon: Network, title: "Integration Hub", desc: "Kết nối liền mạch các nền tảng (CRM, ERP, POS) vào một hệ sinh thái duy nhất." },
              { icon: Shield, title: "Security Protocol", desc: "Bảo mật đa lớp, mã hóa dữ liệu và hệ thống giám sát 24/7." },
              { icon: Settings, title: "Custom ERP", desc: "Giải pháp quản trị nguồn lực doanh nghiệp được thiết kế riêng theo đặc thù ngành." },
              { icon: Layers, title: "Scalable Cloud", desc: "Hạ tầng đám mây linh hoạt, sẵn sàng mở rộng theo quy mô phát triển của doanh nghiệp." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-black p-12 hover:bg-zinc-900/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 group-hover:rotate-12">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Visualization */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-900/20 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative p-10 md:p-16 glass-morphism-dark rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
                <div className="space-y-10">
                  {[
                    { label: "API Response Time", value: "45ms", width: "90%" },
                    { label: "System Uptime", value: "99.99%", width: "99%" },
                    { label: "Data Processing", value: "2.5TB/day", width: "75%" },
                    { label: "Security Score", value: "A+", width: "95%" }
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500 mb-4">
                        <span>{metric.label}</span>
                        <span className="text-cyan-400 font-bold">{metric.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="text-huge font-display font-bold mb-10 leading-[0.9] uppercase skew-text">HIỆU SUẤT <br /> <span className="text-outline">KHÔNG GIỚI HẠN</span></h2>
              <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
                Chúng tôi không chỉ viết code, chúng tôi xây dựng những hệ thống có khả năng tự phục hồi và mở rộng vô hạn. Mọi giải pháp đều được tối ưu hóa cho tốc độ và sự ổn định tuyệt đối.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Node.js', 'Python', 'React', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="px-5 py-2.5 glass-morphism rounded-xl text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-huge font-display font-bold mb-8 uppercase leading-none skew-text">WORKFLOW</h2>
            <div className="w-32 h-1 bg-cyan-400 mx-auto shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: Code2, title: "Audit", desc: "Phân tích hệ thống hiện tại và tìm điểm nghẽn." },
                { icon: Workflow, title: "Design", desc: "Thiết kế kiến trúc hệ thống tối ưu." },
                { icon: Terminal, title: "Build", desc: "Triển khai kỹ thuật và tích hợp dữ liệu." },
                { icon: Shield, title: "Maintain", desc: "Bảo trì và nâng cấp hệ thống liên tục." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-400/5 blur-[150px] rounded-full translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-huge md:text-massive font-display font-bold mb-16 tracking-tighter leading-none uppercase skew-text">HỆ THỐNG HÓA <br /> <span className="text-outline">DOANH NGHIỆP?</span></h2>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-7 bg-cyan-400 text-black rounded-full font-display font-bold text-xl transition-all uppercase tracking-[0.2em]"
          >
            TƯ VẤN GIẢI PHÁP KỸ THUẬT
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default ManagementSystems;
