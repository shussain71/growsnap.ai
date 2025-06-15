
import React, { useState } from 'react';
import { Rocket, Megaphone, Shield, Zap, Users, Bot, TrendingUp, Clock, DollarSign } from 'lucide-react';

const BenefitsVsFeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const comparisons = [
    {
      benefit: {
        icon: Rocket,
        title: 'Grow Without the Grind',
        description: 'Focus on strategy while AI handles the repetitive tasks',
        stat: '15+ Hours',
        statDesc: 'Saved Weekly'
      },
      feature: {
        icon: Zap,
        title: '50+ leads/day with AI outreach',
        description: 'Automated prospecting and engagement across all channels',
        stat: '300%',
        statDesc: 'More Outreach'
      }
    },
    {
      benefit: {
        icon: Megaphone,
        title: 'Reach More, Stress Less',
        description: 'Expand your reach without burning out your team',
        stat: '24/7',
        statDesc: 'Always Active'
      },
      feature: {
        icon: Users,
        title: '10 viral posts/day auto-scheduled',
        description: 'AI-generated content optimized for maximum engagement',
        stat: '25%',
        statDesc: 'More Engagement'
      }
    },
    {
      benefit: {
        icon: Shield,
        title: 'Sleep Easy with 24/7 Support',
        description: 'Never miss an opportunity, even when you\'re offline',
        stat: '0',
        statDesc: 'Missed Calls'
      },
      feature: {
        icon: Bot,
        title: 'AI chatbots + voice at 1/3 the cost',
        description: 'Professional support without the overhead',
        stat: '60%',
        statDesc: 'Cost Savings'
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💖 Emotional Benefits + 🧠 Logical Features
          </h2>
          <p className="text-xl text-muted-foreground">
            ✨ Feel the difference, see the results
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Benefit Card */}
              <div 
                className="bg-gradient-to-br from-[#2ecc71]/10 to-[#2ecc71]/5 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-[#2ecc71]/20 group"
                onMouseEnter={() => setHoveredCard(index * 2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-[#2ecc71]/20 rounded-xl group-hover:bg-[#2ecc71]/30 transition-colors duration-300">
                    <comparison.benefit.icon className="h-7 w-7 text-[#2ecc71]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[#2ecc71] transition-colors duration-300">
                      💚 {comparison.benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {comparison.benefit.description}
                    </p>
                    <div className="bg-[#2ecc71]/10 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-[#2ecc71]">
                            {comparison.benefit.stat}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {comparison.benefit.statDesc}
                          </div>
                        </div>
                        <TrendingUp className="h-6 w-6 text-[#2ecc71]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Card */}
              <div 
                className="bg-gradient-to-br from-[#D9CB04]/10 to-[#D9CB04]/5 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-[#D9CB04]/20 group"
                onMouseEnter={() => setHoveredCard(index * 2 + 1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-[#D9CB04]/20 rounded-xl group-hover:bg-[#D9CB04]/30 transition-colors duration-300">
                    <comparison.feature.icon className="h-7 w-7 text-[#D9CB04]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[#D9CB04] transition-colors duration-300">
                      ⚡ {comparison.feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {comparison.feature.description}
                    </p>
                    <div className="bg-[#D9CB04]/10 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-[#D9CB04]">
                            {comparison.feature.stat}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {comparison.feature.statDesc}
                          </div>
                        </div>
                        <Clock className="h-6 w-6 text-[#D9CB04]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#2ecc71]/10 via-background to-[#D9CB04]/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <DollarSign className="h-8 w-8 text-[#2ecc71] mx-auto" />
              <div className="text-3xl font-bold text-[#2ecc71]">$7,500</div>
              <div className="text-sm text-muted-foreground">Saved Per Year</div>
            </div>
            <div className="space-y-2">
              <Clock className="h-8 w-8 text-[#D9CB04] mx-auto" />
              <div className="text-3xl font-bold text-[#D9CB04]">20+ Hours</div>
              <div className="text-sm text-muted-foreground">Saved Per Week</div>
            </div>
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 text-[#2ecc71] mx-auto" />
              <div className="text-3xl font-bold text-[#2ecc71]">300%</div>
              <div className="text-sm text-muted-foreground">Growth Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsVsFeaturesSection;
