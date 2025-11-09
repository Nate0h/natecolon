'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CloudProps {
  delay: number;
  duration: number;
  xStart: number;
  yPosition: number;
  scale: number;
  opacity: number;
  direction: 'left' | 'right';
  shape: number;
}

const CloudShape1 = ({ scale, opacity }: { scale: number; opacity: number }) => (
  <svg
    width={300 * scale}
    height={150 * scale}
    viewBox="0 0 300 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <ellipse cx="60" cy="80" rx="50" ry="40" fill="white" />
    <ellipse cx="120" cy="65" rx="70" ry="50" fill="white" />
    <ellipse cx="180" cy="70" rx="60" ry="45" fill="white" />
    <ellipse cx="230" cy="85" rx="50" ry="38" fill="white" />
    <ellipse cx="150" cy="90" rx="80" ry="35" fill="white" />
  </svg>
);

const CloudShape2 = ({ scale, opacity }: { scale: number; opacity: number }) => (
  <svg
    width={250 * scale}
    height={120 * scale}
    viewBox="0 0 250 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <ellipse cx="50" cy="70" rx="45" ry="35" fill="white" />
    <ellipse cx="100" cy="55" rx="60" ry="45" fill="white" />
    <ellipse cx="160" cy="60" rx="55" ry="40" fill="white" />
    <ellipse cx="200" cy="75" rx="40" ry="32" fill="white" />
    <ellipse cx="125" cy="80" rx="70" ry="30" fill="white" />
  </svg>
);

const CloudShape3 = ({ scale, opacity }: { scale: number; opacity: number }) => (
  <svg
    width={350 * scale}
    height={180 * scale}
    viewBox="0 0 350 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <ellipse cx="70" cy="95" rx="60" ry="48" fill="white" />
    <ellipse cx="150" cy="75" rx="85" ry="60" fill="white" />
    <ellipse cx="230" cy="85" rx="70" ry="52" fill="white" />
    <ellipse cx="290" cy="100" rx="55" ry="42" fill="white" />
    <ellipse cx="180" cy="110" rx="95" ry="40" fill="white" />
  </svg>
);

const Cloud = ({ delay, duration, xStart, yPosition, scale, opacity, direction, shape }: CloudProps) => {
  const CloudComponent = shape === 1 ? CloudShape1 : shape === 2 ? CloudShape2 : CloudShape3;
  
  const startX = direction === 'left' ? `${xStart}%` : `${100 + xStart}%`;
  const endX = direction === 'left' ? `${100 + Math.abs(xStart)}%` : `${-Math.abs(xStart)}%`;
  
  return (
    <motion.div
      className="absolute"
      style={{ 
        top: `${yPosition}%`,
        left: 0,
        right: 0
      }}
      initial={{ x: startX }}
      animate={{ x: endX }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        repeatDelay: 0
      }}
    >
      <CloudComponent scale={scale} opacity={opacity} />
    </motion.div>
  );
};

export default function CloudBackground() {
  // Generate random cloud configurations for a more dynamic, realistic feel
  const clouds = useMemo(() => {
    const cloudConfigs: CloudProps[] = [];
    
    // Layer 1: Background clouds (slow, faint, large)
    for (let i = 0; i < 8; i++) {
      cloudConfigs.push({
        delay: Math.random() * 60,
        duration: 80 + Math.random() * 40,
        xStart: -30 + Math.random() * 40,
        yPosition: Math.random() * 100,
        scale: 1.2 + Math.random() * 0.6,
        opacity: 0.15 + Math.random() * 0.1,
        direction: Math.random() > 0.3 ? 'left' : 'right',
        shape: Math.floor(Math.random() * 3) + 1
      });
    }
    
    // Layer 2: Mid clouds (medium speed, medium opacity)
    for (let i = 0; i < 10; i++) {
      cloudConfigs.push({
        delay: Math.random() * 50,
        duration: 50 + Math.random() * 30,
        xStart: -20 + Math.random() * 30,
        yPosition: Math.random() * 100,
        scale: 0.8 + Math.random() * 0.5,
        opacity: 0.25 + Math.random() * 0.15,
        direction: Math.random() > 0.4 ? 'left' : 'right',
        shape: Math.floor(Math.random() * 3) + 1
      });
    }
    
    // Layer 3: Foreground clouds (faster, more visible, smaller)
    for (let i = 0; i < 6; i++) {
      cloudConfigs.push({
        delay: Math.random() * 40,
        duration: 30 + Math.random() * 20,
        xStart: -15 + Math.random() * 20,
        yPosition: Math.random() * 100,
        scale: 0.5 + Math.random() * 0.4,
        opacity: 0.35 + Math.random() * 0.2,
        direction: Math.random() > 0.5 ? 'left' : 'right',
        shape: Math.floor(Math.random() * 3) + 1
      });
    }
    
    return cloudConfigs;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud, index) => (
        <Cloud key={index} {...cloud} />
      ))}
    </div>
  );
}
