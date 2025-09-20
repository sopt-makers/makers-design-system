import { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import { useTooltipContext } from './TooltipContext';

const TOOLTIP_MARGIN = 20;

type ContentPosition = 'top' | 'bottom';

export const useTooltipContentPosition = () => {
  const { contentRef, isOpen } = useTooltipContext();
  const [position, setPosition] = useState<ContentPosition>('bottom');

  const calculateTooltipPosition = useCallback(() => {
    if (!contentRef.current) return;

    const contentRect = contentRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - contentRect.bottom;
    const isSpaceBelowEnough = spaceBelow < contentRect.height + TOOLTIP_MARGIN;

    setPosition(isSpaceBelowEnough ? 'top' : 'bottom');
  }, [contentRef]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    calculateTooltipPosition();
  }, [isOpen, calculateTooltipPosition]);

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('resize', calculateTooltipPosition);
    window.addEventListener('scroll', calculateTooltipPosition);
    return () => {
      window.removeEventListener('resize', calculateTooltipPosition);
      window.removeEventListener('scroll', calculateTooltipPosition);
    };
  }, [isOpen, calculateTooltipPosition]);

  return { position };
};
