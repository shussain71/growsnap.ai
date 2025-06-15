
import React from 'react';
import { Zap, MessageSquare, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowCard from '../ui/GlowCard';

const SolutionsOverviewSection = () => {
  const solutions = [
    {
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
      color: '#2ecc71',
      savings: 'Save 15+ hours/week'
    },
    {
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
      color: '#D9CB04',
      savings: 'Increase engagement 25%+'
    },
    {
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
      color: '#2ecc71',
      savings: 'Reduce costs by 60%'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automate Your Growth with GrowSnap AI – Save Time, Win More Clients!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our three core AI solutions work together to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <GlowCard
              key={index}
              className="h-full p-8 group cursor-pointer"
              glowColor={solution.color}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-transform group-hover:scale-110`} style={{ backgroundColor: `${solution.color}20` }}>
                <solution.icon className="h-8 w-8" style={{ color: solution.color }} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
              <h4 className="text-lg font-semibold mb-4" style={{ color: solution.color }}>{solution.subtitle}</h4>
              
              <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: solution.color }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="font-bold text-lg" style={{ color: solution.color }}>{solution.savings}</div>
                  <div className="text-sm text-muted-foreground">Typical Results</div>
                </div>
              </div>
              
              <Button
                asChild
                className="w-full group-hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: solution.color }}
              >
                <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </GlowCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
              See All Solutions in Action
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverviewSection;
