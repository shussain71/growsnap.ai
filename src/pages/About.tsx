
import React, { useState, useEffect } from 'react';
import { 
  Award, Lightbulb, Globe, Handshake, Shield, Sprout,
  TrendingUp, Users, Clock, ArrowRight, Phone, MessageSquare,
  Instagram, Facebook, Target, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowCard from '@/components/ui/GlowCard';

const About = () => {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [currentStats, setCurrentStats] = useState({ businesses: 0, hours: 0, growth: 0 });

  const finalStats = { businesses: 200, hours: 15, growth: 30 };

  const guiding_principles = [
    { 
      icon: Award, 
      title: 'Client Success', 
      description: 'Your growth and efficiency are our top priorities.',
      color: '#2ecc71'
    },
    { 
      icon: Lightbulb, 
      title: 'Practical Innovation', 
      description: 'Cutting-edge AI solutions tailored for real business needs.',
      color: '#D9CB04'
    },
    { 
      icon: Globe, 
      title: 'Accessibility', 
      description: 'Powerful AI that\'s easy to use and affordable.',
      color: '#2ecc71'
    },
    { 
      icon: Handshake, 
      title: 'Partnership', 
      description: 'We\'re your trusted advisor, not just a vendor.',
      color: '#D9CB04'
    },
    { 
      icon: Shield, 
      title: 'Integrity', 
      description: 'Transparency and commitment to data security.',
      color: '#2ecc71'
    },
    { 
      icon: Sprout, 
      title: 'Sustainability', 
      description: 'Promoting long-term growth with eco-friendly automation practices.',
      color: '#D9CB04'
    }
  ];

  const caseStudies = [
    {
      name: "Mark T.",
      company: "Machinery Contractor",
      result: "30% more demos in just two months",
      image: "/lovable-uploads/9b3de9b6-c76c-450e-a30a-9613a5ca4e33.png"
    },
    {
      name: "Emily R.",
      company: "Local Music School Owner",
      result: "Cut student no-shows by 40% with 24/7 support",
      image: "/lovable-uploads/a94e00f2-33c5-4440-a9cf-3c0c2f6f58a0.png"
    },
    {
      name: "David L.",
      company: "Safety Training Program",
      result: "Grew social media following by 25% with automated campaigns",
      image: "/lovable-uploads/f302712c-2f5e-4a8f-b676-4ca700ade566.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedStats) {
            setAnimatedStats(true);
            
            // Animate numbers
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              
              setCurrentStats({
                businesses: Math.floor(finalStats.businesses * progress),
                hours: Math.floor(finalStats.hours * progress),
                growth: Math.floor(finalStats.growth * progress)
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
                setCurrentStats(finalStats);
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [animatedStats]);

  return (
    <div className="min-h-screen">
      {/* Section 1: Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-100">
          <div className="text-2xl">📞</div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-300">
          <div className="text-xl">💬</div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-500">
          <div className="text-2xl">📱</div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-bounce delay-700">
          <div className="text-xl">📧</div>
        </div>
        <div className="absolute top-1/2 left-1/6 animate-bounce delay-900">
          <div className="text-lg">💼</div>
        </div>
        <div className="absolute top-3/4 right-1/6 animate-bounce delay-1100">
          <div className="text-xl">⏰</div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in leading-tight text-foreground">
              You Didn't Start a Business to Get Buried in Busywork.
            </h1>
            <div className="text-xl md:text-2xl leading-relaxed animate-fade-in space-y-6 text-muted-foreground">
              <p className="backdrop-blur-sm bg-background/80 rounded-lg p-6 border border-border">
                📞 The phone rings while you're with a client. A new lead fills out the form on your website. 
                A message comes in on Facebook. Another on Instagram. By the end of the day, you've lost track 
                of who to follow up with, your passion is drained by administrative chaos, and you're leaving money on the table.
              </p>
              <p className="backdrop-blur-sm bg-background/80 rounded-lg p-6 border border-border">
                💼 This is the daily grind for millions of small business owners. You have the skill, the drive, 
                and the vision, but you're being held back by the sheer complexity of modern client acquisition and management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Turning Point */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Floating Elements */}
        <div className="absolute left-1/4 animate-bounce delay-200">
          <div className="text-xl">💡</div>
        </div>
        <div className="absolute right-1/4 animate-bounce delay-600">
          <div className="text-lg">🚀</div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
              💯 We Believe Your Passion Deserves Profit, Not Paperwork.
            </h2>
            <div className="text-xl text-muted-foreground leading-relaxed animate-fade-in space-y-6">
              <p>
                🔧 After more than a decade in the tech world, our founder saw this frustrating disconnect everywhere: 
                the most powerful automation tools were reserved for big corporations, while small businesses were 
                left to fend for themselves with a dozen different apps that didn't talk to each other.
              </p>
              <p>
                🎯 GrowSnap AI was founded on a simple belief: the power of AI and automation shouldn't just be for the giants. 
                Our mission is to provide you with a single, elegant system that handles the repetitive work, 
                so you can focus on the work you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Proof */}
      <section id="stats-section" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 animate-bounce delay-300">
          <div className="text-xl">📊</div>
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-bounce delay-800">
          <div className="text-lg">💪</div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
              📈 From Daily Grind to Sustainable Growth.
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in">
              🎉 Today, over 200 businesses use the GrowSnap AI system to automate their growth and reclaim their freedom.
            </p>

            {/* Animated Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <GlowCard className="p-8 text-center" glowColor="#2ecc71">
                <Users className="h-12 w-12 text-[#2ecc71] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#2ecc71] mb-2">
                  {currentStats.businesses}+
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Businesses Using Our System</div>
                <div className="text-muted-foreground">Automated growth and freedom</div>
              </GlowCard>

              <GlowCard className="p-8 text-center" glowColor="#D9CB04">
                <Clock className="h-12 w-12 text-[#D9CB04] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#D9CB04] mb-2">
                  {currentStats.hours}+ hrs/week
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Average Time Saved</div>
                <div className="text-muted-foreground">Manual work eliminated</div>
              </GlowCard>

              <GlowCard className="p-8 text-center" glowColor="#2ecc71">
                <TrendingUp className="h-12 w-12 text-[#2ecc71] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#2ecc71] mb-2">
                  {currentStats.growth}%+
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">Increase in Leads & Bookings</div>
                <div className="text-muted-foreground">Proven growth results</div>
              </GlowCard>
            </div>

            {/* Case Studies */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🔥 This isn't just theory. It's a proven impact:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <GlowCard key={index} className="p-6 text-center">
                    <img 
                      src={study.image} 
                      alt={study.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-[#2ecc71]"
                    />
                    <h4 className="font-semibold text-foreground text-lg mb-1">{study.name}</h4>
                    <p className="text-[#2ecc71] font-medium mb-3">{study.company}</p>
                    <p className="text-muted-foreground italic">"{study.result}"</p>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Guiding Principles */}
      <section className="py-20 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/5 animate-bounce delay-400">
          <div className="text-xl">🏆</div>
        </div>
        <div className="absolute bottom-1/3 right-1/5 animate-bounce delay-900">
          <div className="text-lg">🌟</div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center animate-fade-in">
              🎯 Our Guiding Principles
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in">
              💪 Our commitment to your success is driven by a core set of values. This is what we stand for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guiding_principles.map((principle, index) => (
                <GlowCard key={index} className="p-8 text-center" glowColor={principle.color}>
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{ backgroundColor: `${principle.color}20` }}
                  >
                    <principle.icon className="h-8 w-8" style={{ color: principle.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Founder's Note */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 animate-bounce delay-500">
          <div className="text-xl">👨‍💼</div>
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-bounce delay-1000">
          <div className="text-lg">✨</div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center animate-fade-in">
              💬 A Message from Our Founder
            </h2>
            <GlowCard className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3">
                  <img 
                    src="/lovable-uploads/890c5109-5dc4-4586-bdaa-7864e6a71dba.png" 
                    alt="Syed Khalid Hussain"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <div className="text-muted-foreground leading-relaxed text-lg mb-8">
                    <p className="mb-6">
                      🔧 After more than a decade in the digital marketing and SaaS worlds, I saw the same frustrating 
                      story play out over and over again: the most powerful automation and AI tools were being built 
                      for big corporations with deep pockets.
                    </p>
                    <p>
                      🎯 I founded GrowSnap AI on a simple, powerful belief: the power of automation shouldn't just be 
                      for the giants. My mission isn't to sell you "AI"; it's to give you back your time. It's to 
                      build you a simple, powerful system that finds your next customer, answers the phone when you're 
                      busy, and follows up with leads so you don't have to.
                    </p>
                  </div>
                  
                  <blockquote className="text-2xl font-semibold text-foreground border-l-4 border-[#2ecc71] pl-6 mb-6 italic">
                    "💡 Technology should empower, not replace. We automate the repetitive so you can focus on strategy and growth."
                  </blockquote>
                  
                  <div className="text-right">
                    <div className="font-bold text-foreground text-xl">Syed Khalid Hussain</div>
                    <div className="text-[#2ecc71] font-semibold">Founder & CEO, GrowSnap AI</div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 animate-bounce delay-600">
          <div className="text-xl">🚀</div>
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-bounce delay-1100">
          <div className="text-lg">💰</div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in text-foreground">
              🚀 Ready to Automate Your Growth?
            </h2>
            <p className="text-xl md:text-2xl mb-12 animate-fade-in text-muted-foreground">
              ✨ Discover how GrowSnap AI can transform your business in a matter of weeks.
            </p>
            
            <GlowCard className="inline-block" glowColor="#2ecc71">
              <Button
                asChild
                size="lg"
                className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-12 py-6 text-xl font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
              >
                <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                  📅 Book Your Free Demo
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
