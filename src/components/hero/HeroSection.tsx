
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import AnimatedGradient from './AnimatedGradient';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
            <Users className="h-4 w-4 text-[#2ecc71]" />
            <span className="text-sm font-medium text-foreground">Trusted by Over 200 Businesses Nationwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Never Miss a Lead, Call, or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] to-[#D9CB04]">
              Opportunity
            </span>{' '}
            Again
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Let AI Supercharge Your Growth
          </p>
          
          <p className="text-2xl md:text-3xl font-semibold text-[#2ecc71] mb-8">
            Stop Losing Money - Start Winning Today!
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
              Book Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Supporting Text */}
          <p className="text-sm text-muted-foreground mt-6">
            Free demo • No commitment • See results in 30 days
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#2ecc71] rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#D9CB04] rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-[#2ecc71]/50 rounded-full animate-bounce delay-500"></div>
    </section>
  );
};

export default HeroSection;
