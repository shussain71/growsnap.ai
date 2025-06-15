
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}

export const AnimatedTestimonials = ({ 
  testimonials, 
  autoplay = true,
  className 
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={cn("max-w-6xl mx-auto px-4 py-20", className)}>
      <div className="relative">
        {/* Main testimonial display */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg min-h-[400px] flex flex-col justify-center">
          <Quote className="h-12 w-12 text-[#2ecc71] mb-6" />
          
          <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
            "{testimonials[active]?.quote}"
          </blockquote>
          
          <div className="flex items-center space-x-4">
            <img 
              src={testimonials[active]?.src} 
              alt={testimonials[active]?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#2ecc71]"
            />
            <div>
              <div className="font-semibold text-foreground text-lg">
                {testimonials[active]?.name}
              </div>
              <div className="text-muted-foreground">
                {testimonials[active]?.designation}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background border border-border rounded-full p-3 hover:bg-muted transition-colors shadow-lg"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background border border-border rounded-full p-3 hover:bg-muted transition-colors shadow-lg"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                active === index 
                  ? "bg-[#2ecc71] scale-110" 
                  : "bg-muted hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail preview */}
      <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300",
              active === index 
                ? "border-[#2ecc71] scale-110 shadow-lg" 
                : "border-transparent opacity-60 hover:opacity-80"
            )}
          >
            <img 
              src={testimonial.src} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
