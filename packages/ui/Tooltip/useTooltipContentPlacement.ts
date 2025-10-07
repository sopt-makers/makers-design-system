import { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { useTooltipContext } from './TooltipContext';
import { Placement } from 'Tooltip/types';

const TOOLTIP_MARGIN = 20;

export const useTooltipContentPlacement = (): { placement: Placement } => {
  const { contentRef, isOpen, placement: controlledPlacement } = useTooltipContext();
  const [calculatedPlacement, setCalculatedPlacement] = useState<Placement>('bottom');

  const calculateTooltipPlacement = useCallback(() => {
    if (!contentRef.current) return;

    const contentRect = contentRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - contentRect.bottom;
    const isSpaceBelowEnough = spaceBelow < contentRect.height + TOOLTIP_MARGIN;

    setCalculatedPlacement(isSpaceBelowEnough ? 'top' : 'bottom');
  }, [contentRef]);

  useLayoutEffect(() => {
    if (!isOpen || controlledPlacement) return;

    calculateTooltipPlacement();
  }, [isOpen, calculateTooltipPlacement, controlledPlacement]);

  useEffect(() => {
    if (!isOpen || controlledPlacement) return;

    window.addEventListener('resize', calculateTooltipPlacement);
    window.addEventListener('scroll', calculateTooltipPlacement);
    return () => {
      window.removeEventListener('resize', calculateTooltipPlacement);
      window.removeEventListener('scroll', calculateTooltipPlacement);
    };
  }, [isOpen, calculateTooltipPlacement, controlledPlacement]);

  return { placement: controlledPlacement || calculatedPlacement };
};
