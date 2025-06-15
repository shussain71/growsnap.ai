
import React from 'react';
import { Star, Users, TrendingUp } from 'lucide-react';

const ReputationSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Effortlessly Scale Your Online Reputation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With GrowSnap AI, automate review requests and replies for Google and Facebook all in one platform, 
                effortlessly boosting your rankings and protecting your reputation, just like 1,237+ SMBs. 
                Managing your reviews and, most importantly, protecting your brand's reputation becomes a cinch!
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2ecc71] mb-2">1,237+</div>
                  <div className="text-sm text-muted-foreground">SMBs Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D9CB04] mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Review Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2ecc71] mb-2">4.8★</div>
                  <div className="text-sm text-muted-foreground">Avg. Rating Boost</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2ecc71]/10 to-[#D9CB04]/10 rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Review Cards */}
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-[#D9CB04]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">Google Review</span>
                    </div>
                    <p className="text-sm text-foreground">"Amazing service! They responded instantly and solved our problem."</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-[#D9CB04]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">Facebook Review</span>
                    </div>
                    <p className="text-sm text-foreground">"Best investment we made for our business growth!"</p>
                  </div>

                  {/* Icons */}
                  <div className="flex justify-center space-x-8 pt-4">
                    <Users className="h-8 w-8 text-[#2ecc71]" />
                    <TrendingUp className="h-8 w-8 text-[#D9CB04]" />
                    <Star className="h-8 w-8 text-[#2ecc71]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReputationSection;
