'use client';

import { useState, useEffect } from 'react';
import { characterSets } from '@/data/characterSets';
import { storyboardSets } from '@/data/storyboards';

interface UseSplashScreenReturn {
  isLoading: boolean;
  completeLoading: () => void;
}

export const useSplashScreen = (): UseSplashScreenReturn => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload all gallery images
    const preloadImages = async () => {
      // Critical images
      const criticalImages = [
        '/images/profile/kiana.jpeg',
        '/images/landing.png',
      ];

      // All character gallery images
      const characterImages = characterSets.flatMap(set => 
        set.images.map(img => img.src)
      );

      // All storyboard images
      const storyboardImages = storyboardSets.flatMap(set => 
        set.images.map(img => img.src)
      );

      // Combine all images
      const allImages = [...criticalImages, ...characterImages, ...storyboardImages];

      console.log(`Preloading ${allImages.length} images...`);

      const imagePromises = allImages.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = (error) => {
            console.warn(`Failed to load image: ${url}`, error);
            resolve(error); // Don't reject, just log the error
          };
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log('All images preloaded successfully');
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
        // Add a minimum loading time for better UX (increased for more images)
        new Promise(resolve => setTimeout(resolve, 3000))
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
