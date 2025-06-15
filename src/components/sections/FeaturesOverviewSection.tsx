
import React from 'react';
import { 
  Zap, 
  Clock, 
  Smartphone, 
  MessageCircle, 
  Calendar, 
  Mail, 
  Star, 
  Bot, 
  BarChart3, 
  PhoneCall 
} from 'lucide-react';

const FeaturesOverviewSection = () => {
  const features = [
    { icon: Zap, title: 'Multi-Channel Automation' },
    { icon: Clock, title: '24/7 Lead & Support Automation' },
    { icon: Smartphone, title: 'Mobile-Friendly Management' },
    { icon: MessageCircle, title: 'Consolidated Social Chat' },
    { icon: Calendar, title: 'Smart Appointment Booking' },
    { icon: Mail, title: 'Drag-And-Drop Email Builder' },
    { icon: Star, title: 'Facebook & Google Reviews' },
    { icon: Bot, title: 'Smart Webchat Widget' },
    { icon: BarChart3, title: 'Real-Time Analytics Dashboard' },
    { icon: PhoneCall, title: 'Missed-Call Call-Back & Text-Back' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All The Features You Need In One Place
          </h2>
          <p className="text-xl text-muted-foreground">
            Say goodbye to scattered tools—GrowSnap AI has you covered!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-[#2ecc71]/10 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2ecc71]/10 rounded-lg mb-4 group-hover:bg-[#2ecc71]/20 transition-colors">
                <feature.icon className="h-6 w-6 text-[#2ecc71]" />
              </div>
              <h3 className="text-sm font-medium text-foreground leading-tight">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
