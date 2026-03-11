import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Target, Zap, BarChart3, PieChart, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';

const data = [
  { name: 'Tháng 1', revenue: 4000, ads: 2400, roas: 3.2 },
  { name: 'Tháng 2', revenue: 3000, ads: 1398, roas: 4.1 },
  { name: 'Tháng 3', revenue: 5000, ads: 2800, roas: 3.8 },
  { name: 'Tháng 4', revenue: 7780, ads: 3908, roas: 5.2 },
  { name: 'Tháng 5', revenue: 6890, ads: 4800, roas: 4.5 },
  { name: 'Tháng 6', revenue: 9390, ads: 3800, roas: 6.1 },
];

const AdsPerformance = () => {
  return (
    <div className="text-white min-h-screen pt-24 selection:bg-cyan-400 selection:text-black grid-lines">
      {/* Header Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-cyan-400/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
                  Performance Marketing Engine
                </span>
              </motion.div>
              <h1 className="text-massive uppercase font-display leading-[0.85] skew-text mb-8">
                ADS <span className="text-outline">PERFORMANCE</span>
              </h1>
            </div>
            <div className="max-w-md lg:text-right">
              <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-8">
                Chúng tôi không chỉ chạy quảng cáo. Chúng tôi xây dựng hệ thống tăng trưởng dựa trên dữ liệu, tối ưu hóa từng điểm chạm để tối đa hóa ROAS.
              </p>
              <div className="flex flex-wrap lg:justify-end gap-3">
                {['Google Ads', 'Meta Ads', 'TikTok Ads'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 glass-morphism rounded-full text-[10px] uppercase tracking-widest text-slate-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Metrics Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "ROAS Trung Bình", value: "5.2x", icon: TrendingUp, trend: "+12%" },
              { label: "Tỷ lệ Chuyển đổi", value: "3.8%", icon: Target, trend: "+0.5%" },
              { label: "Chi phí/Lead", value: "-22%", icon: Zap, trend: "Tối ưu" },
              { label: "Ngân sách Quản lý", value: "15B+", icon: BarChart3, trend: "Hàng tháng" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 glass-morphism-dark rounded-3xl hover:border-cyan-400/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-3xl group-hover:bg-cyan-400/10 transition-colors" />
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">{stat.trend}</span>
                </div>
                <div className="text-5xl font-display font-bold mb-3 tracking-tighter group-hover:text-cyan-400 transition-colors">{stat.value}</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Dashboard */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="container mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-huge font-display uppercase leading-none mb-4">Báo cáo hiệu quả</h2>
              <p className="text-slate-400 font-light">Minh bạch dữ liệu là ưu tiên hàng đầu. Hệ thống dashboard thời gian thực giúp doanh nghiệp nắm bắt mọi chỉ số quan trọng.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-cyan-400"><PieChart className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-slate-500"><BarChart3 className="w-5 h-5" /></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 md:p-12 glass-morphism-dark rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-slate-500">Tăng trưởng Doanh thu vs Ngân sách Ads</h3>
                <div className="flex flex-wrap gap-6 text-[10px] font-mono uppercase tracking-widest">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" /> Doanh thu</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 bg-slate-600 rounded-full" /> Chi phí Ads</span>
                </div>
              </div>
              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                    <XAxis dataKey="name" stroke="#333" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '12px' }}
                      itemStyle={{ color: '#22d3ee' }}
                      cursor={{ stroke: '#22d3ee', strokeWidth: 1 }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" animationDuration={2000} />
                    <Area type="monotone" dataKey="ads" stroke="#444" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 glass-morphism-dark rounded-[2.5rem] flex-1"
              >
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-slate-500 mb-10">Biến động ROAS</h3>
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                        itemStyle={{ color: '#22d3ee' }}
                      />
                      <Line type="monotone" dataKey="roas" stroke="#22d3ee" strokeWidth={3} dot={{ r: 4, fill: '#22d3ee', strokeWidth: 0 }} activeDot={{ r: 6, strokeWidth: 0 }} animationDuration={2500} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500">ROAS Cao nhất</span>
                  <span className="text-3xl font-display font-bold text-cyan-400">6.1x</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-cyan-400 text-black rounded-[2.5rem] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <ShieldCheck className="w-10 h-10 mb-6 relative z-10" />
                <h3 className="text-2xl font-display font-bold mb-4 relative z-10">Cam kết KPI</h3>
                <p className="text-sm font-medium opacity-90 leading-relaxed relative z-10">
                  Chúng tôi cam kết dựa trên kết quả thực tế. Nếu không đạt KPI đã thỏa thuận, chúng tôi sẽ làm việc không thù lao cho đến khi đạt được mục tiêu.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-900/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-huge font-display font-bold mb-10 leading-[0.9] uppercase skew-text">PHƯƠNG PHÁP <br /> <span className="text-outline">TỐI ƯU ĐỘC QUYỀN</span></h2>
              <p className="text-slate-400 text-lg mb-16 font-light leading-relaxed">
                Quy trình 4 bước giúp chúng tôi duy trì hiệu quả quảng cáo ổn định ngay cả khi thị trường biến động.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Data Mining", desc: "Khai thác dữ liệu khách hàng cũ để tìm ra chân dung mục tiêu chính xác nhất." },
                  { title: "Creative Testing", desc: "Thử nghiệm ít nhất 20 mẫu creative mỗi tuần để tìm ra 'winner'." },
                  { title: "Scaling Logic", desc: "Tăng ngân sách thông minh dựa trên thuật toán và hành vi người dùng." },
                  { title: "Conversion Tracking", desc: "Hệ thống đo lường chuẩn xác từng điểm chạm (First click to Last click)." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl glass-morphism-dark hover:bg-white/5 transition-all border border-white/5 hover:border-cyan-400/30 group"
                  >
                    <div className="text-cyan-400 font-mono font-bold text-xl mb-4 group-hover:scale-110 transition-transform inline-block">0{i + 1}</div>
                    <h4 className="font-display font-bold mb-3 uppercase tracking-tight text-lg">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-lg aspect-square rounded-full border border-white/5 flex items-center justify-center p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-transparent blur-3xl" />
                <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-48 h-48 text-cyan-400/5" />
                </div>
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="text-9xl font-display font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  >
                    92%
                  </motion.div>
                  <div className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold">Tỷ lệ giữ chân khách hàng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-400/5 blur-[150px] rounded-full translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-huge md:text-massive font-display font-bold mb-16 tracking-tighter leading-none uppercase skew-text">SẴN SÀNG CHO <br /> <span className="text-outline">BƯỚC NHẢY VỌT?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-cyan-400 text-black rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-4 uppercase tracking-widest"
            >
              ĐẶT LỊCH TƯ VẤN <ArrowUpRight className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 glass-morphism rounded-full font-bold text-lg hover:bg-white/10 transition-all uppercase tracking-widest"
            >
              XEM CASE STUDIES
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdsPerformance;
