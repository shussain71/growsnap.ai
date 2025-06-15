
import React from 'react';
import { Sparkles, Clock, Target } from 'lucide-react';

const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 What's Your Business? Get Your Custom AI Plan!
          </h2>
          
          {/* Subheading with benefits */}
          <div className="mb-8">
            <p className="text-xl text-[#2ecc71] font-semibold mb-4">
              ⚡ Takes 30 Seconds – Unlock Your Solution!
            </p>
            
            {/* Benefits row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-[#2ecc71]" />
                <span className="text-sm font-medium text-muted-foreground">AI-Powered Analysis</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-[#D9CB04]" />
                <span className="text-sm font-medium text-muted-foreground">Instant Results</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="h-5 w-5 text-[#2ecc71]" />
                <span className="text-sm font-medium text-muted-foreground">Custom Strategy</span>
              </div>
            </div>
          </div>
          
          {/* Lead Magnet Form */}
          <div className="bg-background rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-[#2ecc71]/20">
            <div className="mb-4">
              <div className="inline-flex items-center bg-[#2ecc71]/10 border border-[#2ecc71]/20 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-[#2ecc71]">🔥 LIMITED TIME: Free AI Growth Assessment</span>
              </div>
            </div>
            
            <iframe 
              src="https://api.leadconnectorhq.com/widget/form/pt4hp3CyOPxcOC9YPei9" 
              className="w-full h-96 border-0 rounded-lg"
              title="GrowSnap AI Discovery Form"
            />
            
            <p className="text-xs text-muted-foreground mt-4">
              💎 Join 200+ businesses already growing with GrowSnap AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
