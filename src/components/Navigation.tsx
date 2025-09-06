'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// Remove useSmoothScroll import to avoid conflicts

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Smooth scroll function with multiple fallbacks
  const scrollToSection = (href: string) => {
    console.log('Attempting to scroll to:', href); // Debug log
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.querySelector(href);
      console.log('Element found:', element); // Debug log
      
      if (element) {
        const navHeight = 64; // Height of fixed navigation
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        console.log('Scrolling to position:', offsetPosition); // Debug log
        
        // Method 1: Try to access Lenis from global scope
        const lenisInstance = (window as Window & { lenis?: { scrollTo: (position: number, options?: { duration?: number; easing?: (t: number) => number }) => void } }).lenis;
        if (lenisInstance) {
          console.log('Using global Lenis instance');
          lenisInstance.scrollTo(offsetPosition, { 
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          // Method 2: Use native smooth scroll
          console.log('Using native smooth scroll');
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        
        // Method 3: Fallback for mobile devices
        setTimeout(() => {
          const currentPosition = window.pageYOffset;
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          if (Math.abs(currentPosition - targetPosition) > 50) {
            console.log('Using scrollIntoView fallback for mobile');
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          }
        }, 500);
      } else {
        console.error('Element not found:', href);
        // List all available sections for debugging
        const allSections = document.querySelectorAll('section[id]');
        console.log('Available sections:', Array.from(allSections).map(s => s.id));
      }
    }, 100);
    
    // Close mobile menu after navigation
    setIsOpen(false);
  };

  const navItems = [
    { name: 'تماس با من', href: '#contact' },
    { name: 'درباره‌ی من', href: '#about' },
    { name: 'استوری برد ها', href: '#storyboards' },
    { name: 'کاراکتر ها', href: '#character-gallery' },
    { name: 'خانه', href: '#home' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[10001] transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                className={`${scrolled || isOpen ? 'text-gray-900 hover:text-gray-700' : 'text-white/90 hover:text-white'} font-editorial-pro font-medium transition-colors duration-200 relative group`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled || isOpen ? 'bg-gray-900' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
              </motion.button>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-siavash font-bold ${scrolled || isOpen ? 'text-gray-900' : 'text-white'}`}
          >
            کیانا فراهانی
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${scrolled || isOpen ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/10 text-white'}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 fixed top-16 left-0 right-0 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.slice().reverse().map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-gray-700 hover:text-gray-900 font-editorial-pro font-medium py-3 px-4 transition-colors text-right w-full min-h-[44px] flex items-center justify-end rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
