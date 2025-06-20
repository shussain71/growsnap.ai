import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, Zap, DollarSign, Shield, Users } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import ExpandableContactForm from '@/components/ui/ExpandableContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 888-869-9929',
      link: 'tel:+18888699929'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: '+1 929-344-8441',
      link: 'https://wa.me/19293448441'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@mail.growsnap.ai',
      link: 'mailto:support@mail.growsnap.ai'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '30 N Gould St, Sheridan, WY 82801',
      link: null
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 via chat, email, and phone',
      link: null
    }
  ];

  const companyStats = [
    { label: "Average ROI", value: "150%", icon: DollarSign },
    { label: "Global Business Trust Us", value: "600+", icon: Globe },
    { label: "Success Rate", value: "98.9%", icon: Zap },
    { label: "Response Time", value: "24/7", icon: Clock },
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "Our onboarding is built for speed and precision. For our industry-specific solutions (like the Music School System), we can have you fully operational and live within 3 business days. This includes a dedicated onboarding session with a specialist to ensure your AI is perfectly tuned to your business from day one."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes. While our standard plans are designed to provide immense value for the vast majority of small and medium-sized businesses, we understand that larger organizations or businesses with unique technical requirements may need a custom-built solution. We offer custom Enterprise plans that can include advanced integrations, white-labeling, and a dedicated success manager. Please book a demo to discuss your specific needs with our solutions team."
    },
    {
      question: "Is there a setup fee?",
      answer: "Yes, our plans include a one-time setup investment. This isn't an activation fee; it's for our white-glove onboarding and implementation process. This investment covers a dedicated specialist who will set up your account, custom-train your AI agents on your specific business details, integrate your systems, and personally guide you to ensure you are perfectly positioned to achieve your growth goals from day one."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support to ensure your success. Every client has 24/7 access to our AI-powered Help Center for instant answers, as well as email support from our dedicated customer success team. Our higher-tier plans include additional benefits such as live chat support during business hours and a dedicated Client Success Manager for proactive strategy and guidance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10 relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Phone className="absolute top-20 left-[10%] h-8 w-8 text-[#2ecc71]/30 animate-bounce" style={{animationDelay: '0s'}} />
          <Mail className="absolute top-32 right-[15%] h-10 w-10 text-[#D9CB04]/40 animate-bounce" style={{animationDelay: '1s'}} />
          <MessageSquare className="absolute bottom-40 left-[20%] h-12 w-12 text-[#2ecc71]/25 animate-bounce" style={{animationDelay: '2s'}} />
          <MapPin className="absolute top-40 right-[25%] h-6 w-6 text-[#D9CB04]/30 animate-bounce" style={{animationDelay: '0.5s'}} />
          <Clock className="absolute bottom-60 right-[10%] h-8 w-8 text-[#2ecc71]/35 animate-bounce" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#2ecc71]/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <MessageSquare className="h-5 w-5 text-[#2ecc71]" />
              <span className="text-[#2ecc71] font-semibold">Let's Connect</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Get in Touch with GrowSnap AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              We're here to help! Reach out with any questions, and our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {companyStats.map((stat, index) => (
              <GlowCard 
                key={index} 
                className="p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer" 
                glowColor="#2ecc71"
              >
                <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#2ecc71]" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <GlowCard 
                      key={index} 
                      className="flex items-center space-x-4 p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                      glowColor="#2ecc71"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-[#2ecc71]/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-8 w-8 text-[#2ecc71]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-lg">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-base break-words"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-base">{info.details}</p>
                        )}
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                <GlowCard className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:scale-105" glowColor="#2ecc71">
                  <ExpandableContactForm />
                </GlowCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about GrowSnap AI
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:text-[#2ecc71] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
