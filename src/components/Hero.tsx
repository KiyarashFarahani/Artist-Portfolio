'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';
import { useEffect } from 'react';

const Hero = () => {
  const imageFloating = useFloatingAnimation({
    duration: 6,
    intensity: 15,
    delay: 0.5,
    ease: 'easeInOut'
  });

  useEffect(() => {
    imageFloating.startFloating();
  }, [imageFloating]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full" style={{ minHeight: 'calc(100vh + 16rem)' }}>
      {/* Background with gradient overlay - full height */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
      
      {/* Large background text - Your name */}
      <motion.div
        initial={{ opacity: 0.1, scale: 1.1 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] font-londrina-outline font-bold text-white/20 select-none leading-none overflow-hidden">
          Kiana Farahani
        </h1>
      </motion.div>

      {/* Main content container - centered in viewport */}
      <div className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center z-20 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          
          {/* Left side - Landing image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="relative aspect-[4/5] max-w-lg mx-auto"
              animate={imageFloating.controls}
            >
              <Image
                src="/images/landing.png"
                alt="کیانا فراهانی - هنرمند"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

            </motion.div>
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-slate-400/30 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-500/30 rounded-full blur-sm"
            />
            
            {/* Additional floating particles */}
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                x: [0, 10, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 0.5
              }}
              className="absolute top-1/4 -left-8 w-4 h-4 bg-slate-300/40 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                x: [0, -15, 0],
                rotate: [0, -180, 0]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 2
              }}
              className="absolute top-3/4 -right-6 w-5 h-5 bg-slate-400/35 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                x: [0, 8, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 1.5
              }}
              className="absolute top-1/2 left-1/4 w-3 h-3 bg-slate-500/25 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, 18, 0],
                x: [0, -12, 0],
                rotate: [0, 270, 0]
              }}
              transition={{ 
                duration: 11, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 3
              }}
              className="absolute top-1/3 right-1/3 w-6 h-6 bg-slate-300/30 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, -22, 0],
                x: [0, 6, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 0.8
              }}
              className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-slate-400/20 rounded-full blur-sm"
            />
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-right"
            dir="rtl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-siavash font-bold text-white mb-6">
                کیانا فراهانی
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto lg:mr-0 mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mr-0 leading-relaxed font-editorial-pro"
            >
              تصویرساز و استوری‌برد آرتیست
              <br />
              <span className="text-lg text-gray-400">
                Illustrator & Storyboard Artist
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end lg:items-end lg:flex-row-reverse"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 h-14 border-2 border-slate-400/50 text-slate-200 font-semibold rounded-full hover:border-slate-300/70 hover:bg-slate-500/20 transition-all duration-300 font-editorial-pro flex items-center justify-center"
              >
                درباره من
              </motion.a>
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 h-14 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-full hover:shadow-lg hover:from-slate-500 hover:to-slate-600 transition-all duration-300 font-editorial-pro flex items-center justify-center"
              >
                مشاهده گالری
              </motion.a>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-64 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2 font-editorial-pro">اسکرول کنید</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
