import React from 'react';
import { motion } from 'motion/react';

const ProcessTimeline = () => {
  const steps = [
    { step: "01", title: "Chiến lược", desc: "Xác định mục tiêu và lộ trình phát triển kỹ thuật số cho doanh nghiệp." },
    { step: "02", title: "Thiết kế", desc: "Xây dựng ngôn ngữ hình ảnh độc bản và trải nghiệm người dùng tối ưu." },
    { step: "03", title: "Xây dựng", desc: "Phát triển với công nghệ mới nhất để đảm bảo tốc độ và sự ổn định." },
    { step: "04", title: "Vận hành", desc: "Kiểm thử nghiêm ngặt và triển khai hệ thống vận hành trơn tru." }
  ];

  return (
    <div className="py-32 px-8">
      <div className="mb-20">
        <h4 className="text-2xl md:text-3xl font-display uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Quy trình làm việc</h4>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pt-12 border-t border-white/10 group"
          >
            <span className="absolute top-4 left-0 font-mono text-slate-400 text-[10px] group-hover:text-white transition-colors">{item.step}</span>
            <h5 className="text-xl md:text-2xl font-display uppercase mb-4 group-hover:text-slate-400 transition-colors">{item.title}</h5>
            <p className="text-[10px] md:text-xs opacity-60 leading-relaxed text-slate-100/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
