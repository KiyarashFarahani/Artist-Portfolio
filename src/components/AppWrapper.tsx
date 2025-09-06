'use client';

import { useSplashScreen } from '@/hooks/useSplashScreen';
import SplashScreen from './SplashScreen';
import Navigation from './Navigation';
import Hero from './Hero';
import CharacterGallery from './CharacterGallery';
import ImageGallery from './ImageGallery';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { characterSets } from '@/data/characterSets';
import { storyboardSets } from '@/data/storyboards';

export default function AppWrapper() {
  const { isLoading, completeLoading } = useSplashScreen();

  return (
    <>
      {isLoading && <SplashScreen onComplete={completeLoading} />}
      <main className={`min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <Hero />
        <CharacterGallery characterSets={characterSets} />
        <ImageGallery storyboardSets={storyboardSets} />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
