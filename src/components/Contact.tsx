import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import LetterHover from './LetterHover';
import ContactForm from './ContactForm';

const Contact = ({ id }: { id?: string }) => (
  <section id={id} className="min-h-screen bg-black py-20 md:py-32 px-6 md:px-8 flex flex-col justify-center items-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
       <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-slate-400/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
       <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-5xl w-full text-center relative z-10"
    >
      <h2 className="text-huge md:text-massive font-display uppercase leading-[0.7] mb-12 skew-text text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
        <LetterHover text="HỢP" /> <span className="text-slate-400 drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]"><LetterHover text="TÁC" /></span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
        <a href="mailto:hi@chq.agency" className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:bg-slate-400 hover:text-black transition-all duration-700">
          <Mail size={32} strokeWidth={1} className="mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl md:text-2xl font-display uppercase mb-4">Gửi Email</h3>
          <p className="text-sm md:text-lg opacity-60 group-hover:opacity-100">hi@chq.agency</p>
        </a>
        <a href="tel:+84123456789" className="group p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white hover:text-black transition-all duration-700">
          <Phone size={32} strokeWidth={1} className="mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl md:text-2xl font-display uppercase mb-4">Gọi cho chúng tôi</h3>
          <p className="text-sm md:text-lg opacity-60 group-hover:opacity-100">+84 123 456 789</p>
        </a>
      </div>

      <ContactForm />

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pt-12 mt-24 border-t border-white/10">
        <div className="flex gap-8 md:gap-12 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] md:tracking-[0.4em]">
          <a href="#" className="hover:text-slate-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-slate-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Behance</a>
        </div>
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-30">© 2024 CHQ AGENCY. ALL RIGHTS RESERVED.</p>
      </div>
    </motion.div>
  </section>
);

export default Contact;
