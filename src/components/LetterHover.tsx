import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';

interface LetterHoverProps {
  text: string;
  className?: string;
}

const LetterHover: React.FC<LetterHoverProps> = ({ 
  text, 
  className = "", 
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Create the clip-path string using a motion template
  const clipPath = useMotionTemplate`circle(${isHovered ? 100 : 0}px at ${smoothX}px ${smoothY}px)`;

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <span 
      ref={containerRef}
      className={`relative inline-block cursor-none select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Base Layer: Outlined Text (No Fill/Background) */}
      <span className="relative z-0 block whitespace-nowrap text-outline">
        {text}
      </span>

      {/* 2. Spotlight Layer: Solid Cyan Text (Reveal on Hover) */}
      <motion.span
        className="absolute inset-0 z-10 block whitespace-nowrap overflow-hidden pointer-events-none"
        style={{
          clipPath: clipPath,
          WebkitClipPath: clipPath,
        }}
      >
        {/* Cyan Text - Solid fill revealed by spotlight */}
        <span className="relative z-20 text-cyan-400 font-black block drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
          {text}
        </span>
      </motion.span>

      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0,
          x: cursorPos.x,
          y: cursorPos.y
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </span>
  );
};

export default LetterHover;
