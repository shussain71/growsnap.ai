
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Pricing & ROI Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how GrowSnap AI can transform your business growth and calculate your potential ROI
            </p>
          </div>
        </div>
      </section>

      {/* Contact Sales Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border border-border rounded-2xl p-12">
              <Calculator className="h-16 w-16 text-[#2ecc71] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Custom Pricing for Your Business
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every business is unique, and so are our solutions. We create custom pricing packages 
                based on your specific needs, business size, and growth goals. Contact our sales team 
                for a personalized quote and see how much you can save with AI automation.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-2">Contact Sales:</h3>
                <a 
                  href="mailto:syed@mail.growsnap.ai" 
                  className="text-[#2ecc71] hover:underline font-medium"
                >
                  syed@mail.growsnap.ai
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
              >
                <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Universal ROI Calculator
            </h2>
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <p className="text-center text-muted-foreground mb-8">
                See your potential return on investment with GrowSnap AI automation
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Monthly Leads
                    </label>
                    <input 
                      type="number" 
                      placeholder="50"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Average Client Value ($)
                    </label>
                    <input 
                      type="number" 
                      placeholder="500"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Conversion Rate (%)
                    </label>
                    <input 
                      type="number" 
                      placeholder="20"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-[#2ecc71]/10 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Projected Results with GrowSnap AI:</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Additional Monthly Leads:</span>
                        <span className="font-semibold text-[#2ecc71]">+30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Improved Conversion Rate:</span>
                        <span className="font-semibold text-[#2ecc71]">+25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time Saved Per Week:</span>
                        <span className="font-semibold text-[#2ecc71]">15+ hours</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold text-foreground">Estimated ROI:</span>
                        <span className="font-bold text-[#2ecc71]">300%+</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white"
                  >
                    <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                      Talk to an Expert
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
