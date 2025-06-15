
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CreditCard, RotateCcw } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Headline */}
          <div className="inline-flex items-center bg-[#2ecc71]/10 border border-[#2ecc71]/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#2ecc71] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-[#2ecc71]">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Last Chance: Book Your Free Demo
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Only 2 Spots Left This Week
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg mb-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
              Book Your Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-[#2ecc71]" />
              <span className="text-sm">30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CreditCard className="h-5 w-5 text-[#2ecc71]" />
              <span className="text-sm">Secure SSL Payments</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <RotateCcw className="h-5 w-5 text-[#2ecc71]" />
              <span className="text-sm">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
