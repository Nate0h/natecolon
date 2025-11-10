'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-start justify-center bg-gradient-to-b from-blue-50 to-sky-100 py-20 pt-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-24 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Me</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 md:px-8"
          >
            <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-light tracking-wide text-left">
              I'm a mission-driven software engineer passionate about building intelligent, reliable systems that empower both operations and people. Experienced in designing and maintaining distributed systems, backend infrastructure, and intuitive front-end interfaces. From finance to defense to emerging AI applications, my goal remains the same: engineer clarity from complexity and deliver technology that makes a meaningful impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
