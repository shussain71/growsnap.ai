
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, Award, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Values Section with Green Background */}
      <div className="bg-[#2ecc71] py-8 md:py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 md:p-3 bg-white/20 rounded-lg">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">Innovation</h3>
                <p className="text-xs md:text-sm text-white/90">Cutting-edge AI solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 md:p-3 bg-white/20 rounded-lg">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">Integrity</h3>
                <p className="text-xs md:text-sm text-white/90">Transparent and reliable</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 md:p-3 bg-white/20 rounded-lg">
                <Award className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm md:text-base">Excellence</h3>
                <p className="text-xs md:text-sm text-white/90">Delivering exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">About Us</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">Demos</Link></li>
              <li><a href="https://growsnap.ai/global-affiliate-page" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">Affiliate</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">Contact</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">Pricing & ROI Calculator</Link></li>
              <li><Link to="/#faq" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="https://growsnap.ai/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">Terms Of Use</a></li>
              <li><a href="https://growsnap.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">Privacy Policy</a></li>
              <li><a href="https://growsnap.ai/ca-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#2ecc71] transition-colors text-xs md:text-sm">CA Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">FOLLOW US</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a.75.75 0 0 0-.442-.442A7.685 7.685 0 0 0 16.5 4.75c-.77 0-1.514.103-2.204.309a.75.75 0 0 0-.442.442 7.685 7.685 0 0 0-.359 2.379c0 .77.103 1.514.309 2.204.051.171.205.325.376.376.69.206 1.434.309 2.204.309.77 0 1.514-.103 2.204-.309a.75.75 0 0 0 .442-.442c.206-.69.309-1.434.309-2.204 0-.77-.103-1.514-.309-2.204ZM16.5 8.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75ZM12 2.25A9.75 9.75 0 1 0 21.75 12 9.761 9.761 0 0 0 12 2.25ZM12 20.25A8.25 8.25 0 1 1 20.25 12 8.259 8.259 0 0 1 12 20.25ZM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"/>
                  <path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2ecc71] transition-colors">
                <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 md:pt-8 mt-8 md:mt-12 text-center">
          <p className="text-muted-foreground text-xs md:text-sm px-4">
            © 2025 GrowSnap AI. All rights reserved. Empowering Small Businesses with AI to Grow Without the Grind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
