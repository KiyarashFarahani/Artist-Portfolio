'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function SmoothScrollExample() {
  const { scrollTo, scrollToTop, scrollToBottom } = useSmoothScroll();

  const scrollToSection = (sectionId: string) => {
    scrollTo(`#${sectionId}`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <button
        onClick={scrollToTop}
        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
        aria-label="Scroll to top"
      >
        ↑ Top
      </button>
      <button
        onClick={() => scrollToSection('about')}
        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
        aria-label="Scroll to about section"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection('gallery')}
        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
        aria-label="Scroll to gallery section"
      >
        Gallery
      </button>
      <button
        onClick={() => scrollToSection('contact')}
        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
        aria-label="Scroll to contact section"
      >
        Contact
      </button>
      <button
        onClick={scrollToBottom}
        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
        aria-label="Scroll to bottom"
      >
        ↓ Bottom
      </button>
    </div>
  );
}
