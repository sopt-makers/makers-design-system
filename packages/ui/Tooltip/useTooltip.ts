import React, { useEffect, useRef, useState } from 'react';

const useTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const tooltip = tooltipRef.current;

    if (tooltip) {
      tooltip.addEventListener('mouseenter', handleMouseEnter);
      tooltip.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        tooltip.removeEventListener('mouseenter', handleMouseEnter);
        tooltip.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return {
    isVisible,
    tooltipRef,
  };
};

export default useTooltip;
