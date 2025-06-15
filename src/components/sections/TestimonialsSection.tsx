
import React from 'react';
import { CircularTestimonials } from '@/components/ui/CircularTestimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Before GrowSnap AI, our lead generation was a mess. We were manually reaching out to prospects one by one, and it was exhausting. In just two months, we've booked 30% more demos, and I'm saving 15 hours a week on outreach. The AI handles everything while I focus on closing deals.",
      name: "Mark T.",
      designation: "Contractor, Machinery Co.",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "Creating engaging social media content used to take hours every week. GrowSnap AI changed that overnight. Our follower count has grown by 25% in three months, and we've booked 15 new clients directly from social interactions. The AI posts feel authentic and drive real engagement.",
      name: "Sarah L.",
      designation: "Marketing Manager, SafeGuard Training",
      src: "https://images.unsplash.com/photo-1494790108755-2616c2e4b2b9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "As a small music school, we were losing students because we couldn't answer every call. Parents expect instant responses these days. GrowSnap AI handles inquiries 24/7, books lessons, and even sends SMS reminders. We've reduced no-shows by 40% and haven't missed a single lead since implementation.",
      name: "Emily R.",
      designation: "Owner, Harmony Music Academy",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
