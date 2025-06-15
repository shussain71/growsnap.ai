
import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import StatsBar from '@/components/hero/StatsBar';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import SolutionsOverviewSection from '@/components/sections/SolutionsOverviewSection';
import ReputationSection from '@/components/sections/ReputationSection';
import FeaturesOverviewSection from '@/components/sections/FeaturesOverviewSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BenefitsVsFeaturesSection from '@/components/sections/BenefitsVsFeaturesSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsBar />
      <LeadMagnetSection />
      <SolutionsOverviewSection />
      <ReputationSection />
      <FeaturesOverviewSection />
      <TestimonialsSection />
      <BenefitsVsFeaturesSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
