'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function FloatingElement({ children, delay = 0, duration = 3 }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [-5, 5, -5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
