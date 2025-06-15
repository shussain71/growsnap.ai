
import React from 'react';

const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Your Business? Get Your Custom AI Plan!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Takes 30 Seconds – Unlock Your Solution!
          </p>
          
          {/* Lead Magnet Form */}
          <div className="bg-background rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/form/pt4hp3CyOPxcOC9YPei9" 
              className="w-full h-96 border-0 rounded-lg"
              title="GrowSnap AI Discovery Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
