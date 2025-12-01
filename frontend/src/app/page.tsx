'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import SkillsMarquee from '@/components/sections/SkillsMarquee';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import ProjectsBento from '@/components/sections/ProjectsBento';
import VideoSection from '@/components/sections/VideoSection';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import OnboardingLoader from '@/components/onboarding/OnboardingLoader';

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // Check if user has seen onboarding before
    const hasSeenOnboarding = sessionStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  const handleOnboardingComplete = () => {
    sessionStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
  };

  return (
    <>
      {showOnboarding && <OnboardingLoader onComplete={handleOnboardingComplete} />}
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* Base Animated Glowing Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Subtle base grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30"></div>
        </div>
        
        <div className="relative z-10">
          <Navigation />
          
          <main>
            <Hero show3D={true} />
            <div className="border-t border-white/10"></div>
            <ImpactMetrics />
            <div className="border-t border-white/10"></div>
            <SkillsMarquee />
            <div className="border-t border-white/10"></div>
            <ExperienceTimeline />
            <div className="border-t border-white/10"></div>
            <ProjectsBento />
            <div className="border-t border-white/10"></div>
            <VideoSection />
            <div className="border-t border-white/10"></div>
            <Education />
            <div className="border-t border-white/10"></div>
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
