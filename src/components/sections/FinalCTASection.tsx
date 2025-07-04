
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CreditCard, RotateCcw, CheckCircle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Risk-Free Badge */}
          <div className="inline-flex items-center bg-[#2ecc71]/10 border border-[#2ecc71]/20 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="w-5 h-5 text-[#2ecc71] mr-2" />
            <span className="text-lg font-semibold text-[#2ecc71]">🔥 TRY IT RISK FREE</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            💯 100% Money Back Guarantee
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2ecc71] mb-8">
            📅 Book Your Demo Today
          </h3>
          
          {/* Urgency */}
          <div className="inline-flex items-center bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-12">
            <span className="w-2 h-2 bg-[#2ecc71] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-foreground">⏰ Only 2 Spots Left This Week</span>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Button
              asChild
              size="lg"
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
            >
              <a href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" target="_blank" rel="noopener noreferrer">
                🚀 Book Your Free Demo
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#2ecc71]/10 rounded-full flex items-center justify-center group-hover:bg-[#2ecc71]/20 transition-colors duration-300">
                <Shield className="h-10 w-10 text-[#2ecc71]" />
              </div>
              <div className="font-semibold text-lg text-foreground">
                30-Day Money-Back Guarantee
              </div>
              <div className="text-sm text-muted-foreground">Risk-free trial period</div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#2ecc71]/10 rounded-full flex items-center justify-center group-hover:bg-[#2ecc71]/20 transition-colors duration-300">
                <CreditCard className="h-10 w-10 text-[#2ecc71]" />
              </div>
              <div className="font-semibold text-lg text-foreground">
                Secure SSL Payments
              </div>
              <div className="text-sm text-muted-foreground">Bank-level encryption</div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#2ecc71]/10 rounded-full flex items-center justify-center group-hover:bg-[#2ecc71]/20 transition-colors duration-300">
                <RotateCcw className="h-10 w-10 text-[#2ecc71]" />
              </div>
              <div className="font-semibold text-lg text-foreground">
                Cancel Anytime
              </div>
              <div className="text-sm text-muted-foreground">No long-term contracts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
