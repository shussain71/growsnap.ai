
import React from 'react';

const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#2ecc71]/20 to-[#D9CB04]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#D9CB04]/15 to-[#2ecc71]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#2ecc71]/10 to-[#D9CB04]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-[#2ecc71]/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-12 h-12 border border-[#D9CB04]/30 rounded-full animate-spin-slow delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-[#2ecc71]/20 rotate-45 animate-bounce delay-700"></div>
    </div>
  );
};

export default AnimatedGradient;
