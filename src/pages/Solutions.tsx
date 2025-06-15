
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, MessageSquare, Calendar, CreditCard, Star, Phone } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI Voice Agent',
      subtitle: 'Your 24/7 Call Handler & Lead Closer',
      description: 'Gracefully handles parent calls after hours, answers FAQs, and books trial lessons automatically. Never lose a lead to voicemail again - our AI voice agent sounds natural and converts prospects into paying students.',
      features: ['24/7 availability', 'Natural conversation flow', 'Automatic appointment booking', 'FAQ handling'],
      color: '#2ecc71'
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Bot + Appointment Booking',
      subtitle: 'Converts Website Visitors into Booked Lessons',
      description: 'Instantly responds to parents browsing your site, answers their questions, and schedules lessons without staff involvement. Our intelligent chatbot qualifies leads and books them directly into your calendar.',
      features: ['Instant responses', 'Lead qualification', 'Direct calendar integration', 'Smart conversation routing'],
      color: '#D9CB04'
    },
    {
      icon: Phone,
      title: 'Missed Call Text-Back System',
      subtitle: 'Never Lose a Lead to a Voicemail Again',
      description: 'Automatically sends an SMS after a missed call, giving parents an instant way to reconnect and book. This simple system recovers leads that would otherwise be lost forever.',
      features: ['Automatic SMS responses', 'Personalized messages', 'Lead recovery', 'Follow-up sequences'],
      color: '#2ecc71'
    },
    {
      icon: Calendar,
      title: 'Advanced Scheduling & Cancellation Prevention',
      subtitle: 'Smart Tools to Keep Lessons On Track',
      description: 'Simplifies how schools schedule, reschedule, and reduce no-shows with automated reminders. Our system sends strategic reminders and makes rescheduling easy to prevent cancellations.',
      features: ['Automated reminders', 'Easy rescheduling', 'No-show prevention', 'Calendar optimization'],
      color: '#D9CB04'
    },
    {
      icon: CreditCard,
      title: 'Integrated Payment System',
      subtitle: 'Seamless, Stress-Free Billing for Parents',
      description: 'Let parents pay for lessons instantly through Stripe—no manual invoices, no confusion. Automated billing and payment processing makes revenue collection effortless.',
      features: ['Stripe integration', 'Automatic invoicing', 'Recurring payments', 'Payment tracking'],
      color: '#2ecc71'
    },
    {
      icon: Star,
      title: 'Review Generation System',
      subtitle: 'Your Reputation Builder on Autopilot',
      description: 'Automatically sends review requests after each lesson to build trust, SEO, and enrollment inquiries. Turn satisfied students into powerful marketing assets.',
      features: ['Automatic review requests', 'Google & Facebook reviews', 'Reputation monitoring', 'SEO improvement'],
      color: '#D9CB04'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Your AI Enrollment & Support Team!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive AI solutions designed specifically for small businesses
            </p>
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
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6`} style={{ backgroundColor: `${solution.color}20` }}>
                  <solution.icon className="h-8 w-8" style={{ color: solution.color }} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
                <h4 className="text-lg font-semibold mb-4" style={{ color: solution.color }}>{solution.subtitle}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: solution.color }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  style={{ background: `radial-gradient(circle at center, ${solution.color}10 0%, transparent 70%)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
