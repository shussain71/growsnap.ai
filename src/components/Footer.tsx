
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, Award, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Values Section with Green Background */}
      <div className="bg-[#2ecc71] py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Innovation</h3>
                <p className="text-sm text-white/90">Cutting-edge AI solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Integrity</h3>
                <p className="text-sm text-white/90">Transparent and reliable</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Excellence</h3>
                <p className="text-sm text-white/90">Delivering exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Demos</Link></li>
              <li><a href="https://growsnap.ai/home--music-schools-affiliate-signup-page" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Affiliate</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Pricing & ROI Calculator</Link></li>
              <li><Link to="/#faq" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="https://growsnap.ai/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Terms Of Use</a></li>
              <li><a href="https://growsnap.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">Privacy Policy</a></li>
              <li><a href="https://growsnap.ai/ca-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">CA Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6v12h3.5c0 0 0-4.5 0-6h2l.5-2H9.5V8.5c0-.8.4-1 1-1h1V5.5h-2c-2 0-3.5 1.5-3.5 3.5V10H4v2h2.5c0 1.5 0 6 0 6H6z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
