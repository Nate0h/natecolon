'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ImageCarousel, { CarouselImage } from './ImageCarousel';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Carousel images - customize these with your own images and captions
  const carouselImages: CarouselImage[] = [
    {
      src: '/about/award.jpg',
      alt: 'Above and Beyond Service Award',
      caption: 'Awarded my company\'s "Above and Beyond" Service Award for my work on ABA\'s health and status system'
    },
    {
      src: '/about/nateonai.jpg',
      alt: 'NateOnAI',
      caption: 'NateOnAI Youtube Channel',
      link: 'https://www.youtube.com/@NateOnAI'
    },
    {
      src: '/about/boxing.jpg',
      alt: 'Boxing',
      caption: 'Winning my First Amateur Boxing Bout!'
    },
    {
      src: '/about/news.WEBP',
      alt: 'News',
      caption: 'Featured on the Baynet highlighting my career in tech and boxing',
      link: 'https://thebaynet.com/department-of-defense-engineers-rutgers-grad-shine-in-the-ring/'
    },
    {
      src: '/about/boxingaiart.jpg',
      alt: 'AI Art',
      caption: 'Coach Mickey Custom Boxing Trainer GPT',
      link: 'https://www.youtube.com/watch?v=uxB3LwezbGE'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-start justify-center bg-gradient-to-b from-blue-50 to-sky-100 py-20 pt-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Me</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 md:px-8"
          >
            <div className="text-xl md:text-2xl text-slate-800 leading-relaxed font-normal tracking-wide text-left space-y-6">
              <p className="indent-8">
                I'm Nate Colón, a software engineer, amateur boxer, and creative builder who's always chasing the next challenge.
              </p>
              <p className="indent-8">
                I graduated from Rutgers University in 2022 with a degree in Computer Science and a minor in Cognitive Science. Since then, I've worked across both finance and defense, from building automation tools at Bessemer Trust to helping the U.S. Navy modernize the P-8A Poseidon's combat system software with the ABA team in Patuxent River, Maryland.
              </p>
              <p className="indent-8">
                What drives me is the process of problem-solving. I love digging into complex systems, getting to the root of an issue, and building solutions that actually make a difference. That mindset carries over into everything I do, including boxing, where I train and compete as an amateur fighter.
              </p>
              <p className="indent-8">
               Lately, I’ve been channeling that energy into AI. I’ve built custom GPTs, developed AI-powered applications, created intelligent agents, and produced generative videos and images, all while launching a content brand called NateOnAI to document and share what I’m learning. My goal is to explore how AI can empower people, not replace them, and help shape a future where technology is deeply human-centered.
              </p>
              <p className="indent-8">
                My work, whether technical, personal, or creative, is rooted in a simple belief: growth comes from challenge. I'm always learning, always building, and always open to connecting with people who share that same mindset!
              </p>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageCarousel images={carouselImages} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
