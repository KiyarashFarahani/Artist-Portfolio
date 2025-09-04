import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CharacterGallery from '@/components/CharacterGallery';
import ImageGallery from '@/components/ImageGallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { characterSets } from '@/data/characterSets';
import { storyboardSets } from '@/data/storyboards';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CharacterGallery characterSets={characterSets} />
      <ImageGallery storyboardSets={storyboardSets} />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
