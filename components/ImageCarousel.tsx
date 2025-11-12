'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
  link?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export default function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Container */}
      <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden shadow-xl group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {images[currentIndex].link ? (
              <a
                href={images[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative cursor-pointer"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </a>
            ) : (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <motion.div
        key={`caption-${currentIndex}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mt-4 text-center"
      >
        <p className="text-slate-700 text-lg font-light italic">
          {images[currentIndex].caption}
        </p>
      </motion.div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
