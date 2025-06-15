import { useEffect, useRef, useState } from 'react';

type ContentPosition = 'top' | 'bottom';

const TOOLTIP_MARGIN = 20;

interface UseTooltipProps {
  defaultOpen?: boolean;
}

export const useTooltip = ({ defaultOpen = false }: UseTooltipProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [position, setPosition] = useState<ContentPosition>('bottom');

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      calculateTooltipPosition();
    });
  };

  const hideTooltip = () => {
    setIsOpen(false);
  };

  const calculateTooltipPosition = () => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    const isSpaceBelowEnough = spaceBelow < contentRect.height + TOOLTIP_MARGIN;
    const isSpaceAboveEnough = spaceAbove > spaceBelow;

    const updatePosition = isSpaceBelowEnough && isSpaceAboveEnough ? 'top' : 'bottom';
    setPosition(updatePosition);

    requestAnimationFrame(() => {
      const contentElement = contentRef.current;
      if (!contentElement) return;

      contentElement.style.transition = 'none';
      contentElement.style.transform = updatePosition === 'top' ? 'translateY(3px)' : 'translateY(-3px)';

      requestAnimationFrame(() => {
        contentElement.style.transition = 'transform 0.3s ease-out';
        contentElement.style.transform = 'translateY(0)';
      });
    });
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
    isOpen,
    position,
    triggerRef,
    contentRef,
  };
};
