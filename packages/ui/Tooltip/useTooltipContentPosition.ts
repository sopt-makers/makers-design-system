import { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { useTooltipContext } from './TooltipContext';
import { Placement } from 'Tooltip/types';

const TOOLTIP_MARGIN = 20;

export const useTooltipContentPosition = (): { position: Placement } => {
  const { contentRef, isOpen, position: controlledPosition } = useTooltipContext();
  const [calculatedPosition, setCalculatedPosition] = useState<Placement>('bottom');

  const calculateTooltipPosition = useCallback(() => {
    if (!contentRef.current) return;

    const contentRect = contentRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - contentRect.bottom;
    const isSpaceBelowEnough = spaceBelow < contentRect.height + TOOLTIP_MARGIN;

    setCalculatedPosition(isSpaceBelowEnough ? 'top' : 'bottom');
  }, [contentRef]);

  useLayoutEffect(() => {
    if (!isOpen || controlledPosition) return;

    calculateTooltipPosition();
  }, [isOpen, calculateTooltipPosition, controlledPosition]);

  useEffect(() => {
    if (!isOpen || controlledPosition) return;

    window.addEventListener('resize', calculateTooltipPosition);
    window.addEventListener('scroll', calculateTooltipPosition);
    return () => {
      window.removeEventListener('resize', calculateTooltipPosition);
      window.removeEventListener('scroll', calculateTooltipPosition);
    };
  }, [isOpen, calculateTooltipPosition, controlledPosition]);

  return { position: controlledPosition || calculatedPosition };
};
