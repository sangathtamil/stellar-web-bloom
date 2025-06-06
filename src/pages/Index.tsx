
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Resume from '../components/portfolio/Resume';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Contact from '../components/portfolio/Contact';
import Articles from '../components/portfolio/Articles';
import CodingProfiles from '../components/portfolio/CodingProfiles';
import SocialLinks from '../components/portfolio/SocialLinks';
import Navigation from '../components/portfolio/Navigation';
import ParticleBackground from '../components/portfolio/ParticleBackground';
import ErrorBoundary from '../components/ErrorBoundary';
import { useToast } from '@/hooks/use-toast';

const sections = [
  { id: 'hero', component: Hero },
  { id: 'about', component: About },
  { id: 'resume', component: Resume },
  { id: 'projects', component: Projects },
  { id: 'skills', component: Skills },
  { id: 'articles', component: Articles },
  { id: 'coding', component: CodingProfiles },
  { id: 'contact', component: Contact },
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        navigateToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        navigateToSection(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isTransitioning]);

  const navigateToSection = (index: number) => {
    if (index === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSection(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const currentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticleBackground />
      
      <Navigation 
        currentSection={currentSection}
        onNavigate={navigateToSection}
        sections={sections}
      />
      
      <SocialLinks />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="min-h-screen flex items-center justify-center"
        >
          <ErrorBoundary
            fallback={
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Section Temporarily Unavailable
                </h2>
                <p className="text-gray-400 mb-6">This section is experiencing technical difficulties.</p>
                <button 
                  onClick={() => navigateToSection(0)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Return to Home
                </button>
              </div>
            }
          >
            {currentComponent && React.createElement(currentComponent)}
          </ErrorBoundary>
        </motion.div>
      </AnimatePresence>
      
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col gap-2 text-sm text-gray-400"
        >
          <div>Use ↑↓ arrows to navigate</div>
          <div>{currentSection + 1} / {sections.length}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
