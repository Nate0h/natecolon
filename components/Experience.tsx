'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Sabre Systems LLC',
    period: '2024 - Present',
    date: '2024',
    description: "At Sabre Systems, I help engineer the software backbone that supports the Navy's P-8A Poseidon. On the ABA team, I build and maintain an integrated environment that keeps complex mission systems healthy and connected. My work bridges backend development, automation, and data reliability.",
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    logo: '/logos/sabre.png'
  },
  {
    id: 2,
    title: 'Junior Software Developer',
    company: 'Bessemer Trust / Randstad USA',
    period: '2022-2024',
    date: '2022',
    description: 'During my time as a Junior Developer at Bessemer Trust, I worked closely with analysts and developers to resolve production challenges, optimize ETL processes, and build automation tools that replaced manual tasks. This work enhanced system performance, increased efficiency, and strengthened data integrity within the Investment Management Suite.',
    technologies: ['React', 'Express', 'MongoDB', 'Docker'],
    logo: '/logos/bessemer.png'
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'Broadridge Financial Solutions',
    period: '2021',
    date: '2021',
    description: 'Interned on the Digital Information Onboarding team by configuring clients on the communications platform based on their delivery preferences. I worked with Spring Boot, JDBC, and SQL to ensure smooth client integration and deployment.',
    technologies: ['JavaScript', 'HTML/CSS', 'Vue.js', 'MySQL'],
    logo: '/logos/broadridge.png'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-blue-100 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-16"
        >
          {/* SECTION 1: Title */}
          <div className="w-full text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experience</span>
            </motion.h2>
          </div>

          {/* SECTION 2: Timeline */}
          <div className="w-full mb-64 pb-12">
            <div className="flex items-center justify-center">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="flex items-center">
                  {/* Timeline Item */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => setSelectedExperience(exp.id)}
                  >
                    {/* Period Label */}
                    <motion.div
                      className="mb-24"
                      whileHover={{ y: -5 }}
                    >
                      <p className={`text-base font-bold whitespace-nowrap transition-colors ${
                        selectedExperience === exp.id ? 'text-blue-600 scale-110' : 'text-slate-600 group-hover:text-blue-500'
                      }`}>
                        {exp.period}
                      </p>
                    </motion.div>
                    
                    {/* Timeline Dot */}
                    <motion.div
                      className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedExperience === exp.id
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/50 scale-110'
                          : 'bg-white border-4 border-blue-400 group-hover:border-cyan-400 group-hover:shadow-xl'
                      }`}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`text-xl font-bold ${
                        selectedExperience === exp.id ? 'text-white' : 'text-blue-600'
                      }`}>
                        {exp.date}
                      </span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Connecting Line */}
                  {index < experiences.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="h-2 w-48 bg-gradient-to-r from-blue-400 to-cyan-400 mx-8 mt-10"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: Experience Details */}
          <div className="w-full max-w-4xl mt-8 px-6 md:px-12">
            <AnimatePresence mode="wait">
              {selectedExperience ? (
                <motion.div
                  key={selectedExperience}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl p-10 px-16 md:p-20 md:px-24 border-2 border-blue-200 shadow-2xl relative"
                >
                  {(() => {
                    const exp = experiences.find(e => e.id === selectedExperience);
                    if (!exp) return null;
                    
                    return (
                      <div className="flex flex-col gap-4">
                        {/* Company Logo Frame - Top Left */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -top-8 -left-8 w-32 h-32 bg-white rounded-xl shadow-xl border-4 border-blue-300 p-3 flex items-center justify-center overflow-hidden"
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.div>

                        {/* Job Title */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-center"
                        >
                          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
                            {exp.title}
                          </h3>
                        </motion.div>

                        {/* Company */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-center"
                        >
                          <p className="text-2xl md:text-3xl text-blue-600 font-bold">
                            {exp.company}
                          </p>
                        </motion.div>
                        
                        {/* Description */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="py-8 px-4 md:px-8 flex justify-center"
                        >
                          <p className="text-slate-700 text-xl leading-relaxed text-center max-w-2xl mx-auto">
                            {exp.description}
                          </p>
                        </motion.div>
                      </div>
                    );
                  })()}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
