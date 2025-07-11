
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, DollarSign, CheckCircle, Zap, TrendingUp, Shield, Phone, MessageSquare, Target } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';

const Pricing = () => {
  const [monthlyLeads, setMonthlyLeads] = useState(50);
  const [clientValue, setClientValue] = useState(500);
  const [conversionRate, setConversionRate] = useState(20);

  const calculateROI = () => {
    const currentRevenue = (monthlyLeads * clientValue * conversionRate) / 100;
    const improvedLeads = monthlyLeads * 1.3; // 30% more leads
    const improvedConversion = conversionRate * 1.25; // 25% better conversion
    const newRevenue = (improvedLeads * clientValue * improvedConversion) / 100;
    const increase = ((newRevenue - currentRevenue) / currentRevenue) * 100;
    return Math.round(increase);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10 relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DollarSign className="absolute top-20 left-[10%] h-8 w-8 text-[#2ecc71]/30 animate-bounce" style={{animationDelay: '0s'}} />
          <Calculator className="absolute top-32 right-[15%] h-10 w-10 text-[#D9CB04]/40 animate-bounce" style={{animationDelay: '1s'}} />
          <TrendingUp className="absolute bottom-40 left-[20%] h-12 w-12 text-[#2ecc71]/25 animate-bounce" style={{animationDelay: '2s'}} />
          <Zap className="absolute top-40 right-[25%] h-6 w-6 text-[#D9CB04]/30 animate-bounce" style={{animationDelay: '0.5s'}} />
          <Shield className="absolute bottom-60 right-[10%] h-8 w-8 text-[#2ecc71]/35 animate-bounce" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#2ecc71]/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <DollarSign className="h-5 w-5 text-[#2ecc71]" />
              <span className="text-[#2ecc71] font-semibold">Smart Investment</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              We've Got a Plan That's Perfect For You 💰
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
              <span className="text-[#2ecc71] font-bold">Save Up To $7,500/Year</span> vs. Multiple Tools
            </p>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              Discover how GrowSnap AI can transform your business growth and calculate your potential ROI
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <GlowCard className="p-6 text-center shadow-lg transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
              <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#2ecc71]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">⚡ All-in-One Solution</h3>
              <p className="text-muted-foreground">Replace 15+ expensive tools with one powerful platform</p>
            </GlowCard>
            
            <GlowCard className="p-6 text-center shadow-lg transition-all duration-300 hover:scale-105" glowColor="#D9CB04">
              <div className="w-16 h-16 bg-[#D9CB04]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#D9CB04]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">📈 Proven Results</h3>
              <p className="text-muted-foreground">30%+ more leads, 25%+ better conversion rates</p>
            </GlowCard>
            
            <GlowCard className="p-6 text-center shadow-lg transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
              <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#2ecc71]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">🛡️ Risk-Free Trial</h3>
              <p className="text-muted-foreground">30-day money-back guarantee on all plans</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Contact Sales Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <GlowCard className="p-12 shadow-xl transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
              <Calculator className="h-20 w-20 text-[#2ecc71] mx-auto mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                🎯 Custom Pricing for Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every business is unique, and so are our solutions. We create custom pricing packages 
                based on your specific needs, business size, and growth goals. Contact our sales team 
                for a personalized quote and see how much you can save with AI automation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <GlowCard className="p-4 transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
                  <CheckCircle className="h-6 w-6 text-[#2ecc71] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">✅ 30-Day Money-Back</div>
                  <div className="text-xs text-muted-foreground">Guarantee</div>
                </GlowCard>
                
                <GlowCard className="p-4 transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
                  <Shield className="h-6 w-6 text-[#2ecc71] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">🔒 Secure SSL</div>
                  <div className="text-xs text-muted-foreground">Payments</div>
                </GlowCard>
                
                <GlowCard className="p-4 transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
                  <ArrowRight className="h-6 w-6 text-[#2ecc71] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">🚫 Cancel</div>
                  <div className="text-xs text-muted-foreground">Anytime</div>
                </GlowCard>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3">📧 Contact Sales:</h3>
                <a 
                  href="mailto:syed@mail.growsnap.ai" 
                  className="text-[#2ecc71] hover:underline font-medium text-lg transition-colors duration-300"
                >
                  syed@mail.growsnap.ai
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group w-full md:w-auto"
              >
                <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                  🚀 Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
                📊 Universal ROI Calculator
              </h2>
              <p className="text-xl text-muted-foreground animate-fade-in">
                See your potential return on investment with GrowSnap AI automation
              </p>
            </div>
            
            <GlowCard className="p-8 md:p-12 shadow-xl transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">💼 Your Current Business</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        📈 Current Monthly Leads
                      </label>
                      <input 
                        type="number" 
                        value={monthlyLeads}
                        onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                        placeholder="50"
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent text-lg transition-all duration-300 hover:shadow-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        💰 Average Client Value ($)
                      </label>
                      <input 
                        type="number" 
                        value={clientValue}
                        onChange={(e) => setClientValue(Number(e.target.value))}
                        placeholder="500"
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent text-lg transition-all duration-300 hover:shadow-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        🎯 Current Conversion Rate (%)
                      </label>
                      <input 
                        type="number" 
                        value={conversionRate}
                        onChange={(e) => setConversionRate(Number(e.target.value))}
                        placeholder="20"
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent text-lg transition-all duration-300 hover:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">🚀 With GrowSnap AI</h3>
                  
                  <GlowCard className="p-8 border border-[#2ecc71]/20 transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
                    <h4 className="font-semibold text-foreground mb-6 text-lg">✨ Projected Results:</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">📊 Additional Monthly Leads:</span>
                        <span className="font-bold text-[#2ecc71] text-lg">+30%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">🎯 Improved Conversion Rate:</span>
                        <span className="font-bold text-[#2ecc71] text-lg">+25%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">⏱️ Time Saved Per Week:</span>
                        <span className="font-bold text-[#2ecc71] text-lg">15+ hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">💵 Cost Savings vs Tools:</span>
                        <span className="font-bold text-[#D9CB04] text-lg">$7,500/year</span>
                      </div>
                      <hr className="border-border my-4" />
                      <div className="flex justify-between items-center py-2 bg-[#2ecc71]/5 rounded-lg px-4">
                        <span className="font-bold text-foreground text-lg">🎉 Estimated ROI:</span>
                        <span className="font-bold text-[#2ecc71] text-2xl">{calculateROI()}%+</span>
                      </div>
                    </div>
                  </GlowCard>
                  
                  <Button
                    asChild
                    className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105"
                  >
                    <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                      💬 Talk to an Expert
                    </a>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
