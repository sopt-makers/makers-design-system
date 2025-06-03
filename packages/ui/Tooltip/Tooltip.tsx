import React, { useEffect, useRef, useState } from 'react';
import { BubblePointIcon, AlertIcon } from 'Tooltip/icons';
import * as S from './style.css';

interface TooltipProps {
  triggerContent: string;
  children?: React.ReactNode;
}

const Tooltip = ({ triggerContent, children }: TooltipProps) => {
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

  return (
    <div role='tooltip' ref={tooltipRef} className={S.tooltipWrapper}>
      <span className={S.trigger}>
        {triggerContent} <AlertIcon />
      </span>
      {isVisible && (
        <div className={S.contentWrapper}>
          <BubblePointIcon className={S.bubblePointIcon} />
          <span className={S.content}>{children}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
