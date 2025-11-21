'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CloudBackgroundCSS from './CloudBackgroundCSS';
import RotatingText from './RotatingText';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-sky-400 via-blue-300 to-blue-200 overflow-hidden">
      <CloudBackgroundCSS />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col gap-8 items-center"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-400 to-cyan-300">
              <img
                src="/profile/profile.png"
                alt="Nate Colón"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect behind profile picture */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 blur-xl opacity-50 -z-10"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg"
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 relative inline-block" 
              animate={{
                textShadow: [
                  '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(147, 197, 253, 0.4)',
                  '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8), 0 0 80px rgba(147, 197, 253, 0.6)',
                  '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(147, 197, 253, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
              }}
            >
              Nate
            </motion.span>{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 relative inline-block" 
              animate={{
                textShadow: [
                  '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(147, 197, 253, 0.4)',
                  '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8), 0 0 80px rgba(147, 197, 253, 0.6)',
                  '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(147, 197, 253, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              style={{ 
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
              }}
            >
              Colón
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl font-medium"
          >
            <RotatingText words={['Software Engineer','Futurist','AI Enthusiast','Creator', 'Boxer']} interval={2500} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap px-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 md:px-12 md:py-5 text-base md:text-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 md:px-12 md:py-5 text-base md:text-lg border-2 border-blue-500 text-blue-600 bg-white/80 backdrop-blur-sm rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-lg"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-blue-600 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
