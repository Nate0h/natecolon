'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. 
              My journey in tech has been driven by curiosity and a constant desire to learn and grow.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I specialize in building modern web applications that are not only functional but also provide 
              exceptional user experiences. From concept to deployment, I enjoy every step of the development process.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
