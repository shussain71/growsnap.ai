
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './button';

const StickyScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      setShowButtons(scrollTop > 300);
      setCanScrollUp(scrollTop > 0);
      setCanScrollDown(scrollTop < documentHeight - windowHeight - 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  if (!showButtons) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col space-y-2">
      {canScrollUp && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="w-12 h-12 rounded-full bg-[#2ecc71] hover:bg-[#27ae60] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
      {canScrollDown && (
        <Button
          onClick={scrollToBottom}
          size="sm"
          className="w-12 h-12 rounded-full bg-[#2ecc71] hover:bg-[#27ae60] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default StickyScrollButtons;
