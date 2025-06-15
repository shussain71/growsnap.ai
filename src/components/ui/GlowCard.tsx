
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowCard = ({ children, className, glowColor = '#2ecc71' }: GlowCardProps) => {
  return (
    <div 
      className={cn(
        "relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105",
        className
      )}
      style={{
        '--glow-color': glowColor
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        const card = e.currentTarget;
        card.style.boxShadow = `0 20px 40px ${glowColor}20, 0 0 0 1px ${glowColor}30`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.boxShadow = '';
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}15 0%, transparent 70%)`
        }}
      />
    </div>
  );
};

export default GlowCard;
