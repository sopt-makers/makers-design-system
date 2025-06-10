import { useEffect, useRef, useState } from 'react';

const useTooltip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
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
    isTooltipVisible,
    tooltipRef,
  };
};

export default useTooltip;
