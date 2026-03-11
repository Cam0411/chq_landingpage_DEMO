import React from 'react';
import { motion } from 'motion/react';

const AgencyIntro = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
              // CHQ MANIFESTO
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-8">
              NƠI NGHỆ THUẬT <br />
              SÁNG TẠO <span className="text-cyan-400">GẶP GỠ</span> <br />
              HIỆU QUẢ ĐỘT PHÁ
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-8 font-light">
              CHQ Agency không chỉ là một đơn vị Digital Marketing thông thường. Chúng tôi là những nghệ sĩ số, sử dụng dữ liệu làm màu vẽ và công nghệ làm cọ để tạo nên những kiệt tác thương hiệu có khả năng chuyển đổi mạnh mẽ.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">100+</span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-400/60">Dự án sáng tạo</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">30+</span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-400/60">Chuyên gia số</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vw] font-display font-bold whitespace-nowrap">CREATIVE ART</span>
      </div>
    </section>
  );
};

export default AgencyIntro;
