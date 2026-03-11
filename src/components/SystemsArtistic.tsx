import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import LetterHover from './LetterHover';
import { Page } from '../types';

const SystemsArtistic = ({ 
  id,
  pageId,
  onViewDetails
}: { 
  id?: string,
  pageId?: Page,
  onViewDetails?: (p: Page) => void
}) => (
  <section id={id} className="relative min-h-screen py-20 md:py-32 px-6 md:px-8 grid-lines flex flex-col justify-center">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-8">
            <h2 className="text-huge md:text-massive font-display uppercase leading-[0.7] skew-text text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:text-cyan-400 transition-colors duration-500 cursor-default">
              <LetterHover text="HỆ THỐNG" /> <br /> <span className="text-outline-blue hover:text-white transition-colors duration-500"><LetterHover text="QUẢN LÝ" /></span>
            </h2>
          {pageId && onViewDetails && (
            <motion.button
              whileHover={{ x: 10 }}
              onClick={() => onViewDetails(pageId)}
              className="flex items-center gap-4 text-cyan-400 font-bold tracking-widest uppercase text-[10px] md:text-xs group"
            >
              XEM CHI TIẾT <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          )}
        </div>
        <span className="md:vertical-text font-mono text-[10px] tracking-[0.5em] md:tracking-[0.8em] opacity-20 uppercase text-cyan-400">Vận hành // Tự động hóa // Trí tuệ nhân tạo</span>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-cyan-500/10 border border-cyan-500/10">
        {[
          { title: "Bán hàng", desc: "Quản lý tin nhắn khách hàng & đơn hàng tập trung." },
          { title: "Kho hàng", desc: "Quản lý tồn kho & sản phẩm thời gian thực." },
          { title: "Chatbot AI", desc: "Tự động hóa phản hồi & luồng vận hành thông minh." },
          { title: "Tài chính", desc: "Quản lý công nợ & dòng tiền minh bạch." },
          { title: "Dashboard", desc: "Đổ dữ liệu Marketing & Vận hành vào một nơi." },
          { title: "Tầm nhìn", desc: "Mối quan hệ Win-Win giữa Agency - Nhân sự - Khách hàng." }
        ].map((item, i) => (
          <div key={i} className="p-10 md:p-16 bg-black hover:bg-cyan-900/40 hover:text-white transition-all duration-700 group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="font-mono text-[10px] opacity-30 mb-8 block text-cyan-400 group-hover:text-cyan-300 transition-colors">0{i+1}</span>
            <h4 className="text-xl md:text-2xl font-display uppercase mb-4 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">{item.title}</h4>
            <p className="text-sm md:text-base opacity-40 group-hover:opacity-100 uppercase tracking-widest leading-relaxed text-slate-100/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemsArtistic;
