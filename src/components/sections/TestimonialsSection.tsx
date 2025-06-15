
import React from 'react';
import { CircularTestimonials } from '@/components/ui/CircularTestimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Before GrowSnap AI, our lead generation was a mess. We were manually reaching out to prospects one by one, and it was exhausting. In just two months, we've booked 30% more demos, and I'm saving 15 hours a week on outreach. The AI handles everything while I focus on closing deals.",
      name: "Mark T.",
      designation: "Contractor, Machinery Co.",
      src: "/lovable-uploads/426c4e9b-3664-47ac-b69a-da2b903c0d71.png"
    },
    {
      quote: "Creating engaging social media content used to take hours every week. GrowSnap AI changed that overnight. Our follower count has grown by 25% in three months, and we've booked 15 new clients directly from social interactions. The AI posts feel authentic and drive real engagement.",
      name: "Sarah L.",
      designation: "Marketing Manager, SafeGuard Training",
      src: "/lovable-uploads/2d6945dd-058e-46aa-9513-11279e2bee0e.png"
    },
    {
      quote: "As a small music school, we were losing students because we couldn't answer every call. Parents expect instant responses these days. GrowSnap AI handles inquiries 24/7, books lessons, and even sends SMS reminders. We've reduced no-shows by 40% and haven't missed a single lead since implementation.",
      name: "Emily R.",
      designation: "Owner, Harmony Music Academy",
      src: "/lovable-uploads/2f61b449-02cc-4733-a547-08b051d5abcf.png"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💬 What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            🌟 Real results from real businesses
          </p>
        </div>

        <CircularTestimonials 
          testimonials={testimonials} 
          autoplay={true}
          colors={{
            name: '#2ecc71',
            designation: '#6b7280',
            testimony: '#4b5563',
            arrowBackground: '#2ecc71',
            arrowForeground: '#ffffff',
            arrowHoverBackground: '#27ae60'
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
