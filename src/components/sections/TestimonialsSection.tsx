
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mark T.",
      title: "Contractor, Machinery Co.",
      avatar: "/lovable-uploads/a01d57d5-1596-4c9f-b9e6-f0b61f596953.png",
      text: "Before GrowSnap AI, our lead generation was a mess... In just two months, we've booked 30% more demos, and I'm saving 15 hours a week on outreach.",
      rating: 5
    },
    {
      name: "Sarah L.",
      title: "Marketing Manager, SafeGuard Training",
      avatar: "/lovable-uploads/b65a4e2b-5729-4f03-981e-774aefbec5c8.png",
      text: "Creating engaging social media content... used to take hours... GrowSnap AI changed that overnight... Our follower count has grown by 25% in three months, and we've booked 15 new clients directly from social interactions.",
      rating: 5
    },
    {
      name: "Emily R.",
      title: "Owner, Harmony Music Academy",
      avatar: "/lovable-uploads/b1ec42c4-bc4f-40ab-bd0d-9cbc86859203.png",
      text: "As a small music school, we were losing students because we couldn't answer every call... GrowSnap AI... handles inquiries 24/7, books lessons, and even sends SMS reminders... We've reduced no-shows by 40%...",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-[#2ecc71] mb-4" />
              
              {/* Rating */}
              <div className="flex text-[#D9CB04] mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2ecc71]/5 to-[#D9CB04]/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
