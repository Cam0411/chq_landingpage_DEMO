import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import LetterHover from './LetterHover';
import { Page } from '../types';

const ProductArtistic = ({ 
  id,
  title, 
  subtitle, 
  description, 
  image, 
  number,
  tags,
  pageId,
  onViewDetails
}: { 
  id?: string,
  title: string, 
  subtitle: string, 
  description: string, 
  image: string, 
  number: string,
  tags: string[],
  pageId?: Page,
  onViewDetails?: (p: Page) => void
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id={id} ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-16 lg:p-24">
        <div className="flex justify-between items-start">
          <span className="font-mono text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] text-[10px] md:text-xs tracking-widest">{number}</span>
          <div className="flex flex-col items-end gap-1 md:gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 text-cyan-100/50">{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-12">
          <motion.div style={{ y: yText }} className="max-w-5xl w-full">
            <h2 className="text-huge md:text-massive font-display uppercase leading-[0.8] skew-text text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <LetterHover text={title} /> <br /> 
              <span className="text-outline hover:text-cyan-400 transition-colors duration-500">
                <LetterHover text={subtitle} />
              </span>
            </h2>
          </motion.div>
          
          <div className="max-w-md text-right mb-4 lg:mb-0">
            <p className="text-xs md:text-sm lg:text-base font-mono leading-relaxed opacity-70 uppercase tracking-[0.2em] mb-8 text-slate-300">
              {description}
            </p>
            {pageId && onViewDetails && (
              <motion.button
                whileHover={{ x: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onViewDetails(pageId)}
                className="flex items-center gap-4 text-cyan-400 font-bold tracking-widest uppercase text-[10px] md:text-xs group ml-auto glass-morphism px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                XEM CHI TIẾT <ArrowRight className="w-4 h-4 group-hover:-translate-x-2 transition-transform rotate-180" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArtistic;
