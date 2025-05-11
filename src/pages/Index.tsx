
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CaseStudySection from '@/components/CaseStudySection';
import TeamSection from '@/components/TeamSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CaseStudySection />
      <AboutSection />
      <TeamSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
