'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CharacterImage {
  id: string;
  src: string;
  alt: string;
}

interface CharacterSet {
  id: string;
  name: string;
  description: string;
  images: CharacterImage[];
}

interface CharacterGalleryProps {
  characterSets: CharacterSet[];
}

const CharacterGallery = ({ characterSets }: CharacterGalleryProps) => {
  // State for each character set's selected image
  const [selectedImages, setSelectedImages] = useState<{ [key: string]: number }>({});
  const [autoSlideStates, setAutoSlideStates] = useState<{ [key: string]: boolean }>({});
  const [slideDirections, setSlideDirections] = useState<{ [key: string]: 'next' | 'prev' | 'auto' }>({});
  const [isTransitioning, setIsTransitioning] = useState<{ [key: string]: boolean }>({});
  const intervalRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  // Color palette for each character set
  const sectionColors = {
    'coffee': {
      primary: '#8a7a6b',
      secondary: '#7a6b5d',
      tertiary: '#6a5c4f'
    },
    'grandparents': {
      primary: '#c49a5a',
      secondary: '#b08a4f',
      tertiary: '#9c7a44'
    },
    'dark-creature': {
      primary: '#4a5c6b',
      secondary: '#42525f',
      tertiary: '#3a4853'
    },
    'ghost': {
      primary: '#7a8a5a',
      secondary: '#6d7a4f',
      tertiary: '#606a44'
    },
    'woman-oldman': {
      primary: '#d4c4b4',
      secondary: '#c4b4a4',
      tertiary: '#b4a494'
    }
  };

  // Helper function to convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Helper function to convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  // Helper function to blend two colors
  const blendColors = (color1: string, color2: string, ratio: number = 0.5) => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return color1;
    
    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * ratio);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * ratio);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * ratio);
    
    return rgbToHex(r, g, b);
  };

  // Helper function to lighten a color
  const lightenColor = (color: string, amount: number = 0.3) => {
    const rgb = hexToRgb(color);
    if (!rgb) return color;
    
    const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * amount));
    const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * amount));
    const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * amount));
    
    return rgbToHex(r, g, b);
  };

  // Calculate transition color between two sections
  const getTransitionColor = (currentIndex: number, nextIndex: number) => {
    if (nextIndex >= characterSets.length) return '#ffffff'; // Default to white for last section
    
    const currentColors = sectionColors[characterSets[currentIndex].id as keyof typeof sectionColors];
    const nextColors = sectionColors[characterSets[nextIndex].id as keyof typeof sectionColors];
    
    // Blend the tertiary color of current section with primary color of next section
    return blendColors(currentColors.tertiary, nextColors.primary, 0.5);
  };

  // Initialize states for each character set
  useEffect(() => {
    const initialSelectedImages: { [key: string]: number } = {};
    const initialAutoSlideStates: { [key: string]: boolean } = {};
    const initialSlideDirections: { [key: string]: 'next' | 'prev' | 'auto' } = {};
    const initialIsTransitioning: { [key: string]: boolean } = {};
    
    characterSets.forEach(set => {
      initialSelectedImages[set.id] = 0;
      initialAutoSlideStates[set.id] = true;
      initialSlideDirections[set.id] = 'auto';
      initialIsTransitioning[set.id] = false;
    });
    
    setSelectedImages(initialSelectedImages);
    setAutoSlideStates(initialAutoSlideStates);
    setSlideDirections(initialSlideDirections);
    setIsTransitioning(initialIsTransitioning);
  }, [characterSets]);

  const selectImage = (setId: string, index: number, direction: 'next' | 'prev' | 'auto' = 'auto') => {
    // Start transition
    setIsTransitioning(prev => ({ ...prev, [setId]: true }));
    
    setSelectedImages(prev => ({ ...prev, [setId]: index }));
    setAutoSlideStates(prev => ({ ...prev, [setId]: false }));
    setSlideDirections(prev => ({ ...prev, [setId]: direction }));
    
    // End transition after animation duration (300ms + 50ms buffer for complete finish)
    setTimeout(() => {
      setIsTransitioning(prev => ({ ...prev, [setId]: false }));
    }, 350); // 300ms animation + 50ms buffer to ensure animation is fully complete
  };

  const navigateToNext = (setId: string) => {
    const currentIndex = selectedImages[setId] || 0;
    const characterSet = characterSets.find(set => set.id === setId);
    if (characterSet) {
      const nextIndex = (currentIndex + 1) % characterSet.images.length;
      selectImage(setId, nextIndex, 'next');
    }
  };

  const navigateToPrev = (setId: string) => {
    const currentIndex = selectedImages[setId] || 0;
    const characterSet = characterSets.find(set => set.id === setId);
    if (characterSet) {
      const prevIndex = (currentIndex - 1 + characterSet.images.length) % characterSet.images.length;
      selectImage(setId, prevIndex, 'prev');
    }
  };

  // Auto-slide functionality for each character set
  useEffect(() => {
    characterSets.forEach(set => {
      if (autoSlideStates[set.id] && set.images.length > 1) {
        intervalRefs.current[set.id] = setInterval(() => {
          const currentIndex = selectedImages[set.id] || 0;
          const nextIndex = (currentIndex + 1) % set.images.length;
          selectImage(set.id, nextIndex, 'auto');
        }, 3000);
      } else {
        if (intervalRefs.current[set.id]) {
          clearInterval(intervalRefs.current[set.id]);
          intervalRefs.current[set.id] = null;
        }
      }
    });

    return () => {
      Object.values(intervalRefs.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [autoSlideStates, characterSets]);

  const handleMouseEnter = (setId: string) => {
    setAutoSlideStates(prev => ({ ...prev, [setId]: false }));
  };

  const handleMouseLeave = (setId: string) => {
    setAutoSlideStates(prev => ({ ...prev, [setId]: true }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        // Find the currently focused or hovered gallery
        const activeGallery = document.querySelector('.gallery-container:hover');
        if (activeGallery) {
          const setId = activeGallery.getAttribute('data-set-id');
          if (setId && characterSets.find(set => set.id === setId)) {
            const currentIndex = selectedImages[setId] || 0;
            const characterSet = characterSets.find(set => set.id === setId);
            if (characterSet) {
              if (event.key === 'ArrowLeft') {
                navigateToPrev(setId);
              } else {
                navigateToNext(setId);
              }
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImages, characterSets]);

  return (
    <section className="relative">
      {/* Gallery Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-siavash font-bold text-gray-900 mb-6">
            طراحی کاراکتر
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-editorial-pro max-w-3xl mx-auto">
            مجموعه‌ای از طراحی‌های کاراکتر که هر کدام داستان منحصر به فرد خود را روایت می‌کنند
          </p>
        </div>
      </motion.div>

      {/* All Character Sets - Vertical Layout with individual backgrounds */}
      <div className="relative">
        {characterSets.map((characterSet, setIndex) => {
          const colors = sectionColors[characterSet.id as keyof typeof sectionColors];
          const isLast = setIndex === characterSets.length - 1;
          const isFirst = setIndex === 0;
          
          // Get transition colors for top and bottom fades
          const topTransitionColor = isFirst ? '#ffffff' : getTransitionColor(setIndex - 1, setIndex);
          const bottomTransitionColor = isLast ? '#ffffff' : getTransitionColor(setIndex, setIndex + 1);
          
          // Convert hex colors to RGB for rgba usage
          const topRgb = hexToRgb(topTransitionColor);
          const bottomRgb = hexToRgb(bottomTransitionColor);
          
          return (
            <div
              key={characterSet.id}
              className="relative w-full"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.tertiary} 100%)`
              }}
            >
              {/* Top fade gradient - from transition color to section color */}
              <div 
                className="absolute top-0 left-0 right-0 h-16 z-20 pointer-events-none"
                style={{
                  background: isFirst 
                    ? `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)`
                    : topRgb 
                      ? `linear-gradient(to bottom, rgba(${topRgb.r},${topRgb.g},${topRgb.b},1) 0%, rgba(${topRgb.r},${topRgb.g},${topRgb.b},0.6) 40%, rgba(${topRgb.r},${topRgb.g},${topRgb.b},0.2) 70%, transparent 100%)`
                      : 'transparent'
                }}
              ></div>
              
              {/* Bottom fade gradient - from section color to transition color */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none"
                style={{
                  background: isLast 
                    ? `linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)`
                    : bottomRgb 
                      ? `linear-gradient(to top, rgba(${bottomRgb.r},${bottomRgb.g},${bottomRgb.b},1) 0%, rgba(${bottomRgb.r},${bottomRgb.g},${bottomRgb.b},0.6) 40%, rgba(${bottomRgb.r},${bottomRgb.g},${bottomRgb.b},0.2) 70%, transparent 100%)`
                      : 'transparent'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  {/* Character Set Title */}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-siavash font-bold text-white mb-2">
                      {characterSet.name}
                    </h3>
                  </div>

                  {/* Gallery Layout for this Character Set */}
                  <div 
                    className="gallery-container flex flex-col lg:flex-row gap-6 items-start"
                    data-set-id={characterSet.id}
                    onMouseEnter={() => handleMouseEnter(characterSet.id)}
                    onMouseLeave={() => handleMouseLeave(characterSet.id)}
                  >
                    {/* Left: Thumbnail Column - Hidden on mobile */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="space-y-2 max-h-[32rem] overflow-y-auto scrollbar-none">
                        {characterSet.images.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer group border-2 transition-all duration-300 ${
                              (selectedImages[characterSet.id] || 0) === index 
                                ? 'shadow-lg' 
                                : 'border-transparent hover:border-white/30'
                            }`}
                            style={{ 
                              borderColor: (selectedImages[characterSet.id] || 0) === index 
                                ? lightenColor(colors.primary, 0.4) 
                                : 'transparent',
                              backgroundColor: colors.secondary 
                            }}
                            onClick={() => selectImage(characterSet.id, index, 'auto')}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <div 
                              className="absolute inset-0 transition-all duration-300 group-hover:bg-black/10"
                              style={{
                                backgroundColor: (selectedImages[characterSet.id] || 0) === index 
                                  ? lightenColor(colors.primary, 0.3) + '50' // Lighter color with 50% opacity
                                  : 'transparent'
                              }}
                            ></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Center: Large Display - Responsive */}
                    <div className="flex-shrink-0 w-full lg:w-auto relative group">
                      {/* Desktop Navigation Controls */}
                      {characterSet.images.length > 1 && (
                        <>
                          {/* Previous Button - Left Side */}
                          <button
                            onClick={() => navigateToPrev(characterSet.id)}
                            className={`hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl ${
                              isTransitioning[characterSet.id] ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                            }`}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                          </button>
                          
                          {/* Next Button - Right Side */}
                          <button
                            onClick={() => navigateToNext(characterSet.id)}
                            className={`hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 border border-white/20 shadow-2xl ${
                              isTransitioning[characterSet.id] ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                            }`}
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                          </button>
                        </>
                      )}
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${characterSet.id}-${selectedImages[characterSet.id] || 0}`}
                          initial={{ 
                            opacity: 0, 
                            x: slideDirections[characterSet.id] === 'next' ? 100 : slideDirections[characterSet.id] === 'prev' ? -100 : 0,
                            scale: 0.9,
                            rotateY: slideDirections[characterSet.id] === 'next' ? 15 : slideDirections[characterSet.id] === 'prev' ? -15 : 0
                          }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            scale: 1,
                            rotateY: 0
                          }}
                          exit={{ 
                            opacity: 0, 
                            x: slideDirections[characterSet.id] === 'next' ? -100 : slideDirections[characterSet.id] === 'prev' ? 100 : 0,
                            scale: 0.9,
                            rotateY: slideDirections[characterSet.id] === 'next' ? -15 : slideDirections[characterSet.id] === 'prev' ? 15 : 0
                          }}
                          transition={{ 
                            duration: 0.3,
                            ease: [0.4, 0.0, 0.2, 1],
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-[32rem] aspect-square rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0"
                          style={{ 
                            backgroundColor: colors.tertiary,
                            perspective: '1000px' 
                          }}
                        >
                                                      <Image
                              src={characterSet.images[selectedImages[characterSet.id] || 0].src}
                              alt={characterSet.images[selectedImages[characterSet.id] || 0].alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Auto-slide indicator dots - below preview area */}
                      {characterSet.images.length > 1 && (
                        <div className="flex justify-center mt-4">
                          <div className="flex space-x-2">
                            {characterSet.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => selectImage(characterSet.id, index, 'auto')}
                                className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-110"
                                style={{
                                  backgroundColor: (selectedImages[characterSet.id] || 0) === index 
                                    ? lightenColor(colors.primary, 0.4) 
                                    : lightenColor(colors.secondary, 0.5) + '80' // Lighter color with 80% opacity for inactive dots
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Mobile Navigation Controls */}
                      {characterSet.images.length > 1 && (
                        <div className="flex justify-center mt-4 lg:hidden">
                          <div className="flex space-x-3">
                            <button
                              onClick={() => navigateToPrev(characterSet.id)}
                              className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 border border-white/20 shadow-xl"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15,18 9,12 15,6"></polyline>
                              </svg>
                            </button>
                            <button
                              onClick={() => navigateToNext(characterSet.id)}
                              className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 border border-white/20 shadow-xl"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9,18 15,12 9,6"></polyline>
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Description Text Content - Aligned Right */}
                    <div className="w-full lg:flex-1 lg:max-w-md lg:ml-auto">
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-full flex flex-col justify-center text-center lg:text-right space-y-4"
                        dir="rtl"
                      >
                        <p className="text-lg text-white/90 font-editorial-pro leading-relaxed">
                          {characterSet.description}
                        </p>
                        <p className="text-sm text-white/70 font-editorial-pro">
                          {(selectedImages[characterSet.id] || 0) + 1} از {characterSet.images.length}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CharacterGallery;