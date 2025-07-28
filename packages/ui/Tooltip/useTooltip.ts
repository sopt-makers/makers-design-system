import { useLayoutEffect, useState } from 'react';
import type { ContentPosition } from './TooltipContext';
import { useTooltipContext } from './TooltipContext';

const TOOLTIP_MARGIN = 20;

export const useTooltip = () => {
  const { contentRef } = useTooltipContext();
  const [position, setPosition] = useState<ContentPosition>('bottom');

  const calculateTooltipPosition = () => {
    if (!contentRef.current) return;

    const contentRect = contentRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - contentRect.bottom;
    const isSpaceBelowEnough = spaceBelow < contentRect.height + TOOLTIP_MARGIN;

    setPosition(isSpaceBelowEnough ? 'top' : 'bottom');
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', calculateTooltipPosition);
    window.addEventListener('scroll', calculateTooltipPosition);
    return () => {
      window.removeEventListener('resize', calculateTooltipPosition);
      window.removeEventListener('scroll', calculateTooltipPosition);
    };
  }, []);

  return { position, contentRef };
};
