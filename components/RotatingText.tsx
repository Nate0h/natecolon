'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

export default function RotatingText({ words, interval = 3500 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="relative inline-block min-w-[300px] h-[1.5em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 text-white font-bold whitespace-nowrap"
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
