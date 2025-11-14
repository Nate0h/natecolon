'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Youtube, Download, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nathaniel_Colon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="flex items-start justify-center bg-gradient-to-b from-blue-100 to-sky-200 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 text-center">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Touch</span>
          </h2>
          
          {/* Contact Icons */}
          <div className="flex justify-center items-center gap-12">
            <motion.a
              href="mailto:nathanielcolon12@gmail.com"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.15, y: -10 }}
              className="p-8 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-400 cursor-pointer"
            >
              <Mail className="w-16 h-16 text-blue-600" />
            </motion.a>
            
            <motion.a
              href="https://github.com/nate0h"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.15, y: -10 }}
              className="p-8 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-400 cursor-pointer"
            >
              <Github className="w-16 h-16 text-blue-600" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/nate0h"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.15, y: -10 }}
              className="p-8 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-400 cursor-pointer"
            >
              <Linkedin className="w-16 h-16 text-blue-600" />
            </motion.a>
            
            <motion.a
              href="https://www.youtube.com/@NateOnAI"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.15, y: -10 }}
              className="p-8 bg-white/80 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-400 cursor-pointer"
            >
              <Youtube className="w-16 h-16 text-blue-600" />
            </motion.a>
          </div>
          
          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={handleDownloadResume}
              className="min-w-96 px-24 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-4 shadow-xl text-2xl"
            >
              <Download className="w-8 h-8" />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
