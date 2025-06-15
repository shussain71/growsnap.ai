
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Award, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Values Section */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-[#2ecc71]/10 rounded-lg">
              <Zap className="h-6 w-6 text-[#2ecc71]" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Innovation</h3>
              <p className="text-sm text-muted-foreground">Cutting-edge AI solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-[#D9CB04]/10 rounded-lg">
              <Shield className="h-6 w-6 text-[#D9CB04]" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Integrity</h3>
              <p className="text-sm text-muted-foreground">Transparent and reliable</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-[#2ecc71]/10 rounded-lg">
              <Award className="h-6 w-6 text-[#2ecc71]" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Excellence</h3>
              <p className="text-sm text-muted-foreground">Delivering exceptional results</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Demos</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Affiliate</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Pricing</Link></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 mt-12 text-center">
          <p className="text-muted-foreground">
            © 2024 GrowSnap AI. All rights reserved. Empowering Small Businesses with AI to Grow Without the Grind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
