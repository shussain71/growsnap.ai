
import React, { useState, useEffect } from 'react';
import { 
  Music, Store, Calculator, Heart, Users, Dumbbell, 
  Sword, Car, Cog, Beaker, Zap, Wind, BookOpen, 
  Shield, GraduationCap, AlertTriangle, Building, 
  Briefcase, Laptop, Phone, FileText, Eye, ArrowRight
} from 'lucide-react';

const InteractiveIndustrySelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const industries = [
    {
      title: "Music Schools",
      description: "AI-powered student enrollment & management",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      icon: <Music size={24} className="text-white" />,
      color: "#2ecc71"
    },
    {
      title: "E-Commerce Stores",
      description: "24/7 customer support & order management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      icon: <Store size={24} className="text-white" />,
      color: "#D9CB04"
    },
    {
      title: "CPA Firms",
      description: "Automated client onboarding & tax prep",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      icon: <Calculator size={24} className="text-white" />,
      color: "#2ecc71"
    },
    {
      title: "Nonprofit Organizations",
      description: "Donor management & volunteer coordination",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
      icon: <Heart size={24} className="text-white" />,
      color: "#D9CB04"
    },
    {
      title: "Dance Studios",
      description: "Class scheduling & student retention",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      icon: <Users size={24} className="text-white" />,
      color: "#2ecc71"
    },
    {
      title: "Boxing Gyms",
      description: "Member management & training schedules",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
      icon: <Dumbbell size={24} className="text-white" />,
      color: "#D9CB04"
    },
    {
      title: "Martial Arts Schools",
      description: "Belt progression & tournament management",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
      icon: <Sword size={24} className="text-white" />,
      color: "#2ecc71"
    },
    {
      title: "Auto Parts Suppliers",
      description: "Inventory tracking & customer service",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80",
      icon: <Car size={24} className="text-white" />,
      color: "#D9CB04"
    },
    {
      title: "Manufacturing",
      description: "Quality control & production optimization",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      icon: <Cog size={24} className="text-white" />,
      color: "#2ecc71"
    },
    {
      title: "Chemical Industry",
      description: "Safety compliance & process automation",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      icon: <Beaker size={24} className="text-white" />,
      color: "#D9CB04"
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    industries.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-background via-muted/20 to-background rounded-2xl p-8 border border-border">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
          Industries We Transform
        </h2>
        <p className="text-xl text-muted-foreground animate-fade-in">
          Discover how AI automation revolutionizes business operations across sectors
        </p>
      </div>

      {/* Interactive Options Container */}
      <div className="flex w-full max-w-[1000px] mx-auto h-[400px] items-stretch overflow-hidden relative rounded-xl">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer
              ${activeIndex === index ? 'shadow-2xl border-2 border-white' : 'border-2 border-gray-700'}
            `}
            style={{
              backgroundImage: `url('${industry.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              willChange: 'flex-grow, box-shadow, background-size'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow overlay */}
            <div 
              className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                background: activeIndex === index 
                  ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
              }}
            />
            
            {/* Label with icon and info */}
            <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-20 pointer-events-none px-4 gap-3 w-full">
              <div 
                className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full backdrop-blur-sm shadow-lg border-2 transition-all duration-200"
                style={{ 
                  backgroundColor: `${industry.color}20`,
                  borderColor: industry.color
                }}
              >
                {industry.icon}
              </div>
              <div className="text-white whitespace-pre relative">
                <div 
                  className="font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {industry.title}
                </div>
                <div 
                  className="text-base text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {industry.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-6">
          Don't see your industry? We customize solutions for 600+ business types.
        </p>
        <a 
          href="https://api.leadconnectorhq.com/widget/booking/mcyJevtz5l0UMpAH13ft"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#2ecc71]/25 hover:scale-105 group"
        >
          Get Your Custom Industry Solution 🚀
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default InteractiveIndustrySelector;
