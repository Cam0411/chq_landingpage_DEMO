import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: ''
  });
    
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const apiKey = import.meta.env.VITE_PANCAKE_CRM_API_KEY;
      if (!apiKey) {
        console.error('Missing VITE_PANCAKE_CRM_API_KEY. Please set it in AI Studio Secrets.');
        throw new Error('Cấu hình API chưa hoàn tất');
      }

      const response = await fetch(`https://crm.pancake.vn/api/workspaces/2278/contact/records?api_key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone_number: formData.phone_number,
          email: formData.email,
          note: formData.message
        }),
      });

      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        result = { message: await response.text() };
      }
      
      console.log('API Response:', result);

      if (!response.ok) {
        throw new Error(result.message || `Lỗi API: ${response.status}`);
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', phone_number: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 md:mt-24">
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 ml-1">Họ và tên</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="NGUYỄN VĂN A"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-colors font-mono text-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone_number" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 ml-1">Số điện thoại</label>
            <input
              required
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="090 123 4567"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-colors font-mono text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 ml-1">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL@EXAMPLE.COM"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-colors font-mono text-sm"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 ml-1">Lời nhắn (Ghi chú)</label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="CHIA SẺ VỀ DỰ ÁN CỦA BẠN..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/50 transition-colors font-mono text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          className="w-full group relative overflow-hidden bg-cyan-400 text-black font-bold py-5 rounded-xl uppercase tracking-[0.2em] text-sm transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {status === 'idle' && (
              <>GỬI TIN NHẮN <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
            )}
            {status === 'sending' && (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send size={18} />
              </motion.div>
            )}
            {status === 'success' && (
              <>ĐÃ GỬI THÀNH CÔNG <CheckCircle2 size={18} /></>
            )}
            {status === 'error' && (
              <>CÓ LỖI XẢY RA, THỬ LẠI SAU</>
            )}
          </span>
          <motion.div 
            className="absolute inset-0 bg-white"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </button>
        
        {!import.meta.env.VITE_PANCAKE_CRM_API_KEY && (
          <p className="text-[10px] text-red-400 mt-2 text-center uppercase tracking-widest">
            ⚠️ CHƯA CẤU HÌNH API KEY TRONG SETTINGS
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
