'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    year: '2015 - 2019',
    gpa: '3.8/4.0',
    achievements: [
      'Dean\'s List all semesters',
      'Computer Science Excellence Award',
      'Senior Capstone Project: Award-winning web application'
    ]
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-blue-100 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Education</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-blue-200 shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-blue-600 mb-1">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-slate-600">
                      <span>{edu.year}</span>
                      <span>•</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Award className="w-5 h-5" />
                    <span>Achievements</span>
                  </div>
                  {edu.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2 text-slate-700">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </div>
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
