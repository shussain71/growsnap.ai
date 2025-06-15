
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How fast is setup?",
      answer: "GrowSnap AI can be set up in as little as 24-48 hours. Our team handles the technical configuration while you focus on your business. Most clients see their first automated interactions within the first week."
    },
    {
      question: "How long does the onboarding process take?",
      answer: "The complete onboarding process typically takes 1-2 weeks. This includes initial setup, customization to your business needs, staff training, and fine-tuning of your AI agents to match your brand voice and requirements."
    },
    {
      question: "What if I get too many leads?",
      answer: "That's a great problem to have! GrowSnap AI is designed to help you manage high lead volumes efficiently. Our system can automatically qualify leads, schedule appointments, and prioritize hot prospects so you can focus on closing the best opportunities."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We use enterprise-grade security measures including SSL encryption, secure data centers, and strict privacy protocols. Your data is never shared with third parties and we comply with all relevant data protection regulations."
    },
    {
      question: "How much does GrowSnap AI cost?",
      answer: "Our pricing is customized based on your business size and needs. We offer flexible plans starting from affordable monthly rates. Contact our team for a personalized quote that fits your budget and growth goals."
    },
    {
      question: "Does GrowSnap AI integrate with my existing tools?",
      answer: "Yes! GrowSnap AI integrates with popular CRM systems, email platforms, social media tools, and appointment scheduling software. Our team will help ensure seamless integration with your current tech stack."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 support through multiple channels including chat, email, and phone. Our dedicated success team helps with setup, training, and ongoing optimization to ensure you get maximum value from your investment."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
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
                className="bg-background rounded-lg border border-border px-6"
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
  );
};

export default FAQSection;
