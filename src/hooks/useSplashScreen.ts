'use client';

import { useState, useEffect } from 'react';

interface UseSplashScreenReturn {
  isLoading: boolean;
  completeLoading: () => void;
}

export const useSplashScreen = (): UseSplashScreenReturn => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical images
    const preloadImages = async () => {
      const imageUrls = [
        '/images/profile/kiana.jpeg',
        '/images/landing.png',
        // Add more critical images here
      ];

      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    // Preload fonts
    const preloadFonts = async () => {
      if (typeof window !== 'undefined' && 'fonts' in document) {
        try {
          await document.fonts.ready;
        } catch (error) {
          console.warn('Font loading failed:', error);
        }
      }
    };

    // Run preloading
    const initializeApp = async () => {
      await Promise.all([
        preloadImages(),
        preloadFonts(),
        // Add a minimum loading time for better UX
        new Promise(resolve => setTimeout(resolve, 2000))
      ]);
    };

    initializeApp();
  }, []);

  const completeLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    completeLoading,
  };
};
