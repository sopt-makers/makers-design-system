import { useEffect, useRef, useState } from 'react';

const TOOLTIP_MARGIN = 20;

export const useTooltip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => {
    setIsTooltipVisible(true);
    requestAnimationFrame(() => calculateTooltipPosition());
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  const calculateTooltipPosition = () => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    const isSpaceBelowEnough = spaceBelow < contentRect.height + TOOLTIP_MARGIN;
    const isSpaceAboveEnough = spaceAbove > spaceBelow;

    setPosition(isSpaceBelowEnough && isSpaceAboveEnough ? 'top' : 'bottom');
  };

  useEffect(() => {
    const triggerElementRef = triggerRef.current;
    if (!triggerElementRef) return;

    triggerElementRef.addEventListener('mouseenter', showTooltip);
    triggerElementRef.addEventListener('mouseleave', hideTooltip);

    window.addEventListener('resize', calculateTooltipPosition);
    window.addEventListener('scroll', calculateTooltipPosition);

    return () => {
      triggerElementRef.removeEventListener('mouseenter', showTooltip);
      triggerElementRef.removeEventListener('mouseleave', hideTooltip);

      window.removeEventListener('resize', calculateTooltipPosition);
      window.removeEventListener('scroll', calculateTooltipPosition);
    };
  }, []);

  return {
    isTooltipVisible,
    position,
    triggerRef,
    contentRef,
  };
};
