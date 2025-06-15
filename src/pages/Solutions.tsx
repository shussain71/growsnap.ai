
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, MessageSquare, Calendar, CreditCard, Star, Phone, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

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

  const valueProps = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      value: '$1,856/mo',
      description: 'Replace 10+ expensive tools with one solution at just $97/mo',
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
      <section className="relative py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#2ecc71] rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#D9CB04] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-[#2ecc71]/50 rounded-full animate-bounce delay-500"></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Users className="h-4 w-4 text-[#2ecc71]" />
              <span className="text-sm font-medium text-foreground">✨ Trusted by Over 600+ Businesses Nationwide</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Meet Your AI Enrollment & Support Team!
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in">
              🚀 Replace 10+ Expensive Tools with One AI-Powered Solution
            </p>

            {/* Value Proposition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
              {valueProps.map((prop, index) => (
                <div 
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <prop.icon className="h-8 w-8 mx-auto mb-3" style={{ color: prop.color }} />
                  <div className="text-2xl font-bold mb-2" style={{ color: prop.color }}>
                    {prop.value}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group animate-fade-in"
            >
              <a href="https://growsnap.ai/music-school-ai-demos" target="_blank" rel="noopener noreferrer">
                🎵 See AI in Action for Music Schools
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground mt-4 animate-fade-in">
              🔥 Live demo • See real results • 30-day guarantee
            </p>
          </div>
        </div>
      </section>

      {/* All-in-One Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🎯 All-in-One Solution Benefits
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop juggling multiple expensive tools. Get everything you need in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Consolidation', desc: 'Replace 10+ tools with one solution', icon: '🔧' },
              { title: 'Automation', desc: '24/7 AI handling leads & support', icon: '🤖' },
              { title: 'Customization', desc: 'Tailored for your business needs', icon: '⚙️' },
              { title: 'Mobile-First', desc: 'Works perfectly on all devices', icon: '📱' }
            ].map((benefit, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              💼 Complete AI Business Automation Suite
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to automate lead generation, customer support, and growth
            </p>
          </div>

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
                      <CheckCircle className="w-4 h-4 mr-3" style={{ color: solution.color }} />
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

          {/* Final CTA */}
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-[#D9CB04] hover:bg-[#c4b504] text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#D9CB04]/25 hover:scale-105 group"
            >
              <a href="https://growsnap.ai/music-school-ai-demos" target="_blank" rel="noopener noreferrer">
                🚀 Start Your AI Transformation Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
