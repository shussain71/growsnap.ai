
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music, DollarSign, TrendingUp, Users } from 'lucide-react';
import InteractiveIndustrySelector from '@/components/InteractiveIndustrySelector';

const Industries = () => {
  const valueProps = [
    {
      icon: DollarSign,
      title: 'Monthly Savings',
      value: 'Save $625/mo',
      description: 'Replace 10+ expensive tools with one solution',
      color: '#2ecc71'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      value: '300%',
      description: 'Average increase in qualified leads within 90 days',
      color: '#D9CB04'
    },
    {
      icon: Users,
      title: 'Time Saved',
      value: '15+ hrs/week',
      description: 'Automated lead generation and customer support',
      color: '#2ecc71'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Animations */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-[#2ecc71] rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-[#D9CB04] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 md:w-5 md:h-5 bg-[#2ecc71]/50 rounded-full animate-bounce delay-500"></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in">
              Tailored Solutions for Every Industry
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 md:mb-6 animate-fade-in px-4">
              From music schools to manufacturing, we understand your unique challenges and deliver customized AI Solutions.
            </p>

            {/* Value Proposition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 animate-fade-in">
              {valueProps.map((prop, index) => (
                <div 
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <prop.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3" style={{ color: prop.color }} />
                  <div className="text-xl md:text-2xl font-bold mb-1 md:mb-2" style={{ color: prop.color }}>
                    {prop.value}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{prop.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 animate-fade-in px-4">
              🚀 See how AI automation transforms businesses across industries
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Music Schools Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-12 mb-12 md:mb-16 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden">
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#2ecc71]/5 to-[#D9CB04]/5" />
              
              <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-8 relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#2ecc71]/10 rounded-full mb-4 md:mb-0 md:mr-6 group-hover:bg-[#2ecc71]/20 transition-colors duration-300">
                  <Music className="h-6 w-6 md:h-8 md:w-8 text-[#2ecc71]" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    🎵 Music Schools & Private Instructors
                  </h2>
                  <p className="text-[#2ecc71] font-semibold text-base md:text-lg">Get 10-20 New Students In The Next 90 Days... Guaranteed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 relative z-10">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Music schools struggle with missed calls, no-shows, manual scheduling, and inconsistent lead follow-up. 
                    Parents expect instant responses and easy booking, but schools often can't provide 24/7 availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    GrowSnap AI handles inquiries 24/7, books lessons automatically, sends SMS reminders, and follows up 
                    on missed calls. Schools reduce no-shows by 40% and capture leads that would otherwise be lost.
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-[#2ecc71] hover:bg-[#27ae60] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group relative z-10"
              >
                <a href="https://growsnap.ai/music-schools691563" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Get Your Music School Plan Today! 🚀
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Interactive Industry Selector */}
            <InteractiveIndustrySelector />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
