import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music, Wrench, Calculator, Briefcase } from 'lucide-react';

const Industries = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Solutions For Your Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tailored AI automation for specific business needs
            </p>
          </div>
        </div>
      </section>

      {/* Music Schools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12 mb-16">
              <div className="flex items-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ecc71]/10 rounded-full mr-6">
                  <Music className="h-8 w-8 text-[#2ecc71]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Music Schools & Private Instructors</h2>
                  <p className="text-[#2ecc71] font-semibold text-lg">Get 10-20 New Students In The Next 90 Days... Guaranteed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Music schools struggle with missed calls, no-shows, manual scheduling, and inconsistent lead follow-up. 
                    Parents expect instant responses and easy booking, but schools often can't provide 24/7 availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    GrowSnap AI handles inquiries 24/7, books lessons automatically, sends SMS reminders, and follows up 
                    on missed calls. Schools reduce no-shows by 40% and capture leads that would otherwise be lost.
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
              >
                <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                  Get Your Music School Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Other Industries Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Wrench className="h-12 w-12 text-[#D9CB04] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Contractors</h3>
                <p className="text-muted-foreground text-sm">Coming Soon</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Calculator className="h-12 w-12 text-[#2ecc71] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">CPA Firms</h3>
                <p className="text-muted-foreground text-sm">Coming Soon</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Briefcase className="h-12 w-12 text-[#D9CB04] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Services</h3>
                <p className="text-muted-foreground text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
