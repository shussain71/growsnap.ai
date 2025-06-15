
import React from 'react';
import { Rocket, Megaphone, Shield, Zap, Users, Bot } from 'lucide-react';

const BenefitsVsFeaturesSection = () => {
  const comparisons = [
    {
      benefit: {
        icon: Rocket,
        title: 'Grow Without the Grind',
        description: 'Focus on strategy while AI handles the repetitive tasks'
      },
      feature: {
        icon: Zap,
        title: '50+ leads/day with AI outreach',
        description: 'Automated prospecting and engagement across all channels'
      }
    },
    {
      benefit: {
        icon: Megaphone,
        title: 'Reach More, Stress Less',
        description: 'Expand your reach without burning out your team'
      },
      feature: {
        icon: Users,
        title: '10 viral posts/day auto-scheduled',
        description: 'AI-generated content optimized for maximum engagement'
      }
    },
    {
      benefit: {
        icon: Shield,
        title: 'Sleep Easy with 24/7 Support',
        description: 'Never miss an opportunity, even when you\'re offline'
      },
      feature: {
        icon: Bot,
        title: 'AI chatbots + voice at 1/3 the cost',
        description: 'Professional support without the overhead'
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Emotional Benefits + Logical Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Feel the difference, see the results
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Benefit Card */}
              <div className="bg-gradient-to-br from-[#2ecc71]/10 to-[#2ecc71]/5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#2ecc71]/20 rounded-lg">
                    <comparison.benefit.icon className="h-6 w-6 text-[#2ecc71]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {comparison.benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {comparison.benefit.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card */}
              <div className="bg-gradient-to-br from-[#D9CB04]/10 to-[#D9CB04]/5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#D9CB04]/20 rounded-lg">
                    <comparison.feature.icon className="h-6 w-6 text-[#D9CB04]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {comparison.feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {comparison.feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsVsFeaturesSection;
