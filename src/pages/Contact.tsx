
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ecc71]/10 via-background to-[#D9CB04]/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch with GrowSnap AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Reach out with any questions, and our team will respond within 24 hours.
            </p>
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
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#2ecc71]/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-[#2ecc71]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-[#2ecc71] transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <iframe 
                    src="https://link.msgsndr.com/widget/form/7ED82nFk4WjPap9HhVmQ" 
                    className="w-full h-96 border-0 rounded-lg"
                    title="GrowSnap AI Contact Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
