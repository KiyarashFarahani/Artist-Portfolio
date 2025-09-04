'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

interface ImageGalleryProps {
  artworks: Artwork[];
}

const ImageGallery = ({ artworks }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (artwork: Artwork, index: number) => {
    setSelectedImage(artwork);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % artworks.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(artworks[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(artworks[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of artistic expressions that tell stories through color, form, and emotion.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(artwork, index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {artwork.category} • {artwork.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 hover:scale-110 transition-all duration-300 z-10 border border-white/20"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 hover:scale-110 transition-all duration-300 z-10 border border-white/20"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

              {/* Image info */}
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 mb-2">
                  {selectedImage.category} • {selectedImage.year}
                </p>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;
