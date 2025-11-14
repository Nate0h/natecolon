'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Server, Database as DatabaseIcon, Cog, Brain, MessageSquare, Workflow, Wind } from 'lucide-react';
import { 
  SiOpenjdk, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiGnubash,
  SiSpringboot,
  SiNodedotjs,
  SiReact,
  SiAngular,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiMysql,
  SiAnsible,
  SiDocker,
  SiApache,
  SiApachemaven,
  SiOpenai,
  SiAnthropic,
  SiN8N
} from 'react-icons/si';

// Custom emoji icon component for Apache Camel
const CamelIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={className} style={{ ...style, fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    🐫
  </div>
);

const skillCategories = [
  {
    title: 'Languages',
    icon: Layout,
    technologies: [
      { name: 'Java', icon: SiOpenjdk, color: '#007396' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
      { name: 'SQL', icon: DatabaseIcon, color: '#336791' }
    ]
  },
  {
    title: 'Frameworks',
    icon: Server,
    technologies: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' }
    ]
  },
  {
    title: 'Database',
    icon: DatabaseIcon,
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PL/SQL', icon: SiOracle, color: '#F80000' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
    ]
  },
  {
    title: 'DevOps',
    icon: Cog,
    technologies: [
      { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'ActiveMQ', icon: MessageSquare, color: '#D22128' },
      { name: 'Apache Camel', icon: CamelIcon, color: '#28A8E0' },
      { name: 'Maven', icon: SiApachemaven, color: '#C71A36' }
    ]
  },
  {
    title: 'AI',
    icon: Brain,
    technologies: [
      { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
      { name: 'Claude', icon: SiAnthropic, color: '#D97757' },
      { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
      { name: 'Windsurf', icon: Wind, color: '#0EA5E9' }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="flex items-center justify-center bg-gradient-to-b from-blue-100 to-sky-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Technologies</span>
          </h2>
          
          <div className="flex flex-col gap-8 items-center">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 w-full max-w-4xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{category.title}</span>
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 items-center justify-center">
                    {category.technologies.length === 0 ? (
                      <p className="text-slate-400 italic">Technologies will be added here</p>
                    ) : (
                      category.technologies.map((tech, techIndex) => {
                        const TechIcon = tech.icon;
                        return (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.05 }}
                            whileHover={{ y: -8, scale: 1.1, transition: { duration: 0.2, ease: "easeOut" } }}
                            className="flex flex-col items-center gap-2 group cursor-pointer"
                          >
                            <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-blue-100 transition-all duration-100 shadow-sm group-hover:shadow-lg">
                              <TechIcon className="w-12 h-12 transition-transform duration-100" style={{ color: tech.color }} />
                            </div>
                            <span className="text-sm text-slate-700 font-medium group-hover:text-blue-600 transition-colors duration-100">{tech.name}</span>
                          </motion.div>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
