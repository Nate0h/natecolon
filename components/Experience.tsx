'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality solutions.',
    technologies: ['React', 'Express', 'MongoDB', 'Docker']
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Developed responsive websites and web applications. Gained experience in modern web development practices and agile methodologies.',
    technologies: ['JavaScript', 'HTML/CSS', 'Vue.js', 'MySQL']
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experience</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 md:p-8 border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-blue-500" />
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
