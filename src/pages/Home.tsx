import { useCallback, useEffect, useState } from 'react';
import { CommandPalette } from '../components/CommandPalette';
import { EasterEgg } from '../components/EasterEgg';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { ScrollTools } from '../components/ScrollTools';
import { SEO } from '../components/SEO';
import { About } from '../sections/About';
import { Achievements } from '../sections/Achievements';
import { Contact } from '../sections/Contact';
import { EducationExperience } from '../sections/EducationExperience';
import { GitHub } from '../sections/GitHub';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Skills } from '../sections/Skills';
import { TechStack } from '../sections/TechStack';
import { useKeyboardSequence } from '../hooks/useKeyboardSequence';

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const easterActive = useKeyboardSequence('hello');
  const openCommand = useCallback(() => setCommandOpen(true), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <SEO />
      <ScrollTools />
      <Navbar onCommandOpen={openCommand} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <TechStack />
        <GitHub />
        <Achievements />
        <EducationExperience />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <EasterEgg active={easterActive} />
    </>
  );
}
