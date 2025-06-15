
import React, { useState } from 'react';
import { Zap, MessageSquare, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CpuArchitecture } from '@/components/ui/CpuArchitecture';
import GlowCard from '../ui/GlowCard';

const SolutionsOverviewSection = () => {
  const [activeTab, setActiveTab] = useState('leadspark');

  const solutions = [
    {
      id: 'leadspark',
      icon: Zap,
      title: 'LeadSpark AI',
      subtitle: 'Automated Lead Generation & Outreach',
      description: 'Capture Leads From Your Website, Social Media, Google, And More! Target the right prospects with LeadSpark\'s automated scraping and outreach across all social media channels, voice calls, emails, and SMS, saving you 15 hours/week on manual lead gen.',
      features: [
        'Multi-platform lead scraping',
        'Automated email & SMS outreach',
        'Social media lead generation',
        'Voice call automation',
        'Lead scoring & qualification'
      ],
      benefits: [
        '50+ qualified leads per day',
        '15+ hours saved weekly',
        '300% increase in outreach volume',
        '85% reduction in manual work'
      ],
      color: '#2ecc71',
      savings: 'Save 15+ hours/week'
    },
    {
      id: 'viralboost',
      icon: MessageSquare,
      title: 'ViralBoost AI',
      subtitle: 'Social Media & Messaging Automation',
      description: 'Social Media and Messaging. Boost engagement with ViralBoost\'s AI-powered posts on Instagram, TikTok, and more, plus 24/7 chatbots on social platforms and SMS/email follow-ups to nurture leads into clients. Manage all your conversations in one place.',
      features: [
        'AI-generated social content',
        '24/7 social media chatbots',
        'Instagram & TikTok automation',
        'Unified conversation management',
        'Lead nurturing sequences'
      ],
      benefits: [
        '10 viral posts per day',
        '25% increase in engagement',
        '24/7 automated responses',
        'Unified inbox management'
      ],
      color: '#D9CB04',
      savings: 'Increase engagement 25%+'
    },
    {
      id: 'careguard',
      icon: HeadphonesIcon,
      title: 'CareGuard AI',
      subtitle: 'Customer Support & Retention',
      description: 'Customer Support Automation. CareGuard AI answers inquiries via Chatbots or AI voice agent, books appointments, sends reminders, and follows up on missed calls across SMS, WhatsApp, and all social platforms – saving you 60% on staffing costs.',
      features: [
        'AI voice agents',
        'Smart chatbot responses',
        'Appointment booking',
        'Missed call follow-up',
        'Multi-platform support'
      ],
      benefits: [
        '60% cost reduction',
        '24/7 customer support',
        '90% faster response times',
        'Zero missed opportunities'
      ],
      color: '#2ecc71',
      savings: 'Reduce costs by 60%'
    }
  ];

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚀 Automate Your Growth with GrowSnap AI – Save Time, Win More Clients!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our three core AI solutions work together to transform your business operations
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1">
            {solutions.map((solution) => (
              <TabsTrigger 
                key={solution.id} 
                value={solution.id}
                className="flex flex-col items-center space-y-2 py-4 px-2 data-[state=active]:bg-background"
              >
                <solution.icon className="h-6 w-6" style={{ color: solution.color }} />
                <span className="font-semibold text-sm">{solution.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${solution.color}20` }}
                      >
                        <solution.icon className="h-8 w-8" style={{ color: solution.color }} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">{solution.title}</h3>
                        <p className="text-lg font-semibold" style={{ color: solution.color }}>
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features & Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" style={{ color: solution.color }} />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <div 
                              className="w-2 h-2 rounded-full mr-3"
                              style={{ backgroundColor: solution.color }}
                            ></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Zap className="h-5 w-5 mr-2" style={{ color: solution.color }} />
                        Results You'll See
                      </h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <div 
                              className="w-2 h-2 rounded-full mr-3"
                              style={{ backgroundColor: solution.color }}
                            ></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2" style={{ color: solution.color }}>
                        {solution.savings}
                      </div>
                      <div className="text-sm text-muted-foreground">Typical Results</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Animation */}
                <div className="flex justify-center">
                  <div className="relative">
                    <GlowCard
                      className="p-8 bg-gradient-to-br from-background to-muted/30"
                      glowColor={solution.color}
                    >
                      <CpuArchitecture
                        text={solution.title.split(' ')[0]}
                        className="w-full h-64"
                        animateText={true}
                        animateLines={true}
                        animateMarkers={true}
                      />
                    </GlowCard>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
                  style={{ 
                    backgroundColor: solution.color,
                    boxShadow: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 40px ${solution.color}40, 0 0 0 1px ${solution.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                    🚀 See {solution.title} in Action
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionsOverviewSection;
