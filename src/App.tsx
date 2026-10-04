import { MotionConfig } from 'framer-motion';
import { CustomCursor } from './components/animation/CustomCursor';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { BackToTop } from './components/animation/BackToTop';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { AdmissionSection } from './components/sections/AdmissionSection';
import { CampusLifeSection } from './components/sections/CampusLifeSection';
import { FaqSection } from './components/sections/FaqSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { HeroSection } from './components/sections/HeroSection';
import { PhotoBand } from './components/sections/PhotoBand';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { StatsSection } from './components/sections/StatsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <PhotoBand />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
        <CampusLifeSection />
        <TestimonialsSection />
        <FaqSection />
        <AdmissionSection />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
