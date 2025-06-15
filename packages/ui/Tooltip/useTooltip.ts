import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { ContentPosition } from 'Tooltip/TooltipContext';

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
  };

  useLayoutEffect(() => {
    const triggerElementRef = triggerRef.current;
    if (!triggerElementRef || defaultOpen) return;

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
  }, [defaultOpen]);

  useEffect(() => {
    if (defaultOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [defaultOpen]);

  return {
    isOpen,
    position,
    triggerRef,
    contentRef,
  };
};
