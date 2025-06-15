
import React from 'react';
import { Zap, MessageSquare, HeadphonesIcon } from 'lucide-react';
import GlowCard from '../ui/GlowCard';

const SolutionsOverviewSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'LeadSpark AI',
      description: 'Capture Leads From Your Website, Social Media, Google, And More! Target the right prospects with LeadSpark\'s automated scraping and outreach across all social media channels, voice calls, emails, and SMS, saving you 15 hours/week on manual lead gen.',
      color: '#2ecc71'
    },
    {
      icon: MessageSquare,
      title: 'ViralBoost AI',
      description: 'Social Media and Messaging. Boost engagement with ViralBoost\'s AI-powered posts on Instagram, TikTok, and more, plus 24/7 chatbots on social platforms and SMS/email follow-ups to nurture leads into clients. Manage all your conversations in one place.',
      color: '#D9CB04'
    },
    {
      icon: HeadphonesIcon,
      title: 'CareGuard AI',
      description: 'Customer Support Automation. CareGuard AI answers inquiries via Chatbots or AI voice agent, books appointments, sends reminders, and follows up on missed calls across SMS, WhatsApp, and all social platforms – saving you 60% on staffing costs.',
      color: '#2ecc71'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automate Your Growth with GrowSnap AI – Save Time, Win More Clients!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <GlowCard
              key={index}
              className="h-full p-8 text-center group cursor-pointer"
              glowColor={solution.color}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-transform group-hover:scale-110`} style={{ backgroundColor: `${solution.color}20` }}>
                <solution.icon className="h-8 w-8" style={{ color: solution.color }} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverviewSection;
