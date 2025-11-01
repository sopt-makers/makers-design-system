import { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { useTooltipContext } from './TooltipContext';
import { Placement } from 'Tooltip/types';

const TOOLTIP_MARGIN = 20;

const OPPOSITE_PLACEMENT: Record<Placement, Placement> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',

  topLeft: 'bottomLeft',
  topRight: 'bottomRight',
  bottomLeft: 'topLeft',
  bottomRight: 'topRight',

  leftTop: 'rightTop',
  leftBottom: 'rightBottom',
  rightTop: 'leftTop',
  rightBottom: 'leftBottom',
};

export const useTooltipContentPlacement = (): { placement: Placement } => {
  const { contentRef, isOpen, placement: controlledPlacement } = useTooltipContext();
  const [calculatedPlacement, setCalculatedPlacement] = useState<Placement>('bottom');

  const calculateTooltipPlacement = useCallback(() => {
    if (!contentRef.current) return;

    const rect = contentRef.current.getBoundingClientRect();
    const { width, height, top, bottom, left, right } = rect;

    const spaceTop = top;
    const spaceBottom = window.innerHeight - bottom;
    const spaceLeft = left;
    const spaceRight = window.innerWidth - right;

    const defaultPlacement = controlledPlacement || 'bottom';
    let newPlacement = defaultPlacement;

    const hasSpace = (placement: Placement) => {
      switch (placement) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          return spaceTop >= height + TOOLTIP_MARGIN;

        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          return spaceBottom >= height + TOOLTIP_MARGIN;

        case 'left':
        case 'leftTop':
        case 'leftBottom':
          return spaceLeft >= width + TOOLTIP_MARGIN;

        case 'right':
        case 'rightTop':
        case 'rightBottom':
          return spaceRight >= width + TOOLTIP_MARGIN;

        default:
          return false;
      }
    };

    if (!hasSpace(defaultPlacement)) {
      const alternative = OPPOSITE_PLACEMENT[defaultPlacement] ?? defaultPlacement;
      newPlacement = hasSpace(alternative) ? alternative : defaultPlacement;
    }

    setCalculatedPlacement(newPlacement);
  }, [contentRef, controlledPlacement]);

  useLayoutEffect(() => {
    if (isOpen) calculateTooltipPlacement();
  }, [isOpen, calculateTooltipPlacement]);

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('resize', calculateTooltipPlacement);
    window.addEventListener('scroll', calculateTooltipPlacement);

    return () => {
      window.removeEventListener('resize', calculateTooltipPlacement);
      window.removeEventListener('scroll', calculateTooltipPlacement);
    };
  }, [isOpen, calculateTooltipPlacement]);

  return { placement: calculatedPlacement };
};
