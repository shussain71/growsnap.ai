
import React from 'react';
import { Users, Star, TrendingUp, Clock } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    { icon: Users, number: '600+', label: 'Businesses Served' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, number: '150%', label: 'Average ROI Increase' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="py-6 bg-muted/30 border-t border-b border-border overflow-hidden">
      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll-left whitespace-nowrap">
          {/* First set */}
          {stats.map((stat, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-3 mx-12 flex-shrink-0">
              <div className="p-2 bg-[#2ecc71]/10 rounded-full">
                <stat.icon className="h-6 w-6 text-[#2ecc71]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {stats.map((stat, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-3 mx-12 flex-shrink-0">
              <div className="p-2 bg-[#2ecc71]/10 rounded-full">
                <stat.icon className="h-6 w-6 text-[#2ecc71]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {stats.map((stat, index) => (
            <div key={`third-${index}`} className="flex items-center space-x-3 mx-12 flex-shrink-0">
              <div className="p-2 bg-[#2ecc71]/10 rounded-full">
                <stat.icon className="h-6 w-6 text-[#2ecc71]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
