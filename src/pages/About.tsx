
import React from 'react';
import { Award, Shield, Zap, Users, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '200+', label: 'Businesses Empowered Nationwide' },
    { number: '15+', label: 'hrs/week Average Time Saved Per Client' },
    { number: '30%+', label: 'Typical Growth in Leads/Bookings' }
  ];

  const values = [
    { icon: Award, title: 'Client Success', description: 'Your growth is our mission' },
    { icon: Zap, title: 'Practical Innovation', description: 'AI that actually works for real businesses' },
    { icon: Shield, title: 'Accessibility', description: 'Enterprise-level AI for small business budgets' },
    { icon: Users, title: 'Partnership', description: 'We succeed when you succeed' },
    { icon: Heart, title: 'Integrity', description: 'Transparent, honest, reliable' },
    { icon: TrendingUp, title: 'Sustainability', description: 'Building long-term growth foundations' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Small Businesses with AI to Grow Without the Grind
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We believe AI shouldn't be complex or costly. GrowSnap AI provides accessible automation tools 
              that help small businesses save time, reduce stress, and achieve sustainable growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#2ecc71] mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              From Business Challenges to AI Solutions
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Small and medium-sized businesses (SMBs) often face overwhelming challenges: missed calls mean lost revenue, 
                manual processes consume precious time, and competing with larger companies seems impossible without a massive budget.
              </p>
              <p className="mb-6">
                GrowSnap AI was founded to change that. We believe every small business deserves access to the same powerful 
                automation tools that enterprise companies use, but without the complexity or cost barriers.
              </p>
              <p>
                Our mission is simple: empower small businesses with AI that actually works, is easy to implement, 
                and delivers measurable results from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ecc71]/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-[#2ecc71]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Meet the Founder
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                  <Users className="h-24 w-24 text-muted-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Syed Khalid Hussain</h3>
                  <p className="text-[#2ecc71] font-semibold mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With over a decade of experience in digital marketing, SaaS, and AI-driven solutions, 
                    Syed founded GrowSnap AI to empower businesses with accessible automation. His vision 
                    is to democratize AI technology and make it work for real small business challenges.
                  </p>
                  <blockquote className="text-lg italic text-foreground border-l-4 border-[#2ecc71] pl-4">
                    "Technology should empower, not replace. We automate the repetitive so you can focus on strategy and growth."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
