
import React from 'react';
import { Star, Shield, Users, TrendingUp } from 'lucide-react';

const ReputationSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🏆 Why Businesses Trust GrowSnap AI
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of successful businesses that have transformed their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Google Reviews */}
          <div 
            className="bg-background rounded-2xl p-6 text-center shadow-lg border border-border transition-all duration-300 hover:scale-105 cursor-pointer"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px #4285f420, 0 0 0 1px #4285f430';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div className="flex justify-center mb-4">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-8 w-8" />
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground mb-2">Google Reviews</div>
            <div className="text-xs text-muted-foreground">Based on 150+ reviews</div>
          </div>

          {/* Facebook Reviews */}
          <div 
            className="bg-background rounded-2xl p-6 text-center shadow-lg border border-border transition-all duration-300 hover:scale-105 cursor-pointer"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px #1877f220, 0 0 0 1px #1877f230';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div className="flex justify-center mb-4">
              <div className="h-8 w-8 bg-[#1877f2] rounded-full flex items-center justify-center text-white font-bold text-sm">f</div>
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">4.8/5</div>
            <div className="text-sm text-muted-foreground mb-2">Facebook Reviews</div>
            <div className="text-xs text-muted-foreground">Based on 89+ reviews</div>
          </div>

          {/* Business Trust */}
          <div className="bg-background rounded-2xl p-6 text-center shadow-lg border border-border transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#2ecc71]/10 rounded-full">
                <Shield className="h-8 w-8 text-[#2ecc71]" />
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">600+</div>
            <div className="text-sm text-muted-foreground mb-2">Businesses Trust Us</div>
            <div className="text-xs text-muted-foreground">Growing daily</div>
          </div>

          {/* Success Rate */}
          <div className="bg-background rounded-2xl p-6 text-center shadow-lg border border-border transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#D9CB04]/10 rounded-full">
                <TrendingUp className="h-8 w-8 text-[#D9CB04]" />
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">98%</div>
            <div className="text-sm text-muted-foreground mb-2">Success Rate</div>
            <div className="text-xs text-muted-foreground">Client satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            🚀 Ready to join the success stories?
          </p>
          <a 
            href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            📅 Start Your Success Story Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReputationSection;
