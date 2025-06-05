import React, { useEffect, useRef, useState } from 'react';
import { BubblePointIcon, AlertIcon } from 'Tooltip/icons';
import * as S from './style.css';
import useTooltip from 'Tooltip/useTooltip';
import { HTMLAttributes } from 'react';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  triggerContent: string;
}

const Tooltip = ({ triggerContent, children, ...props }: TooltipProps) => {
  const { isVisible, tooltipRef } = useTooltip();

  return (
    <div className={S.tooltipWrapper} ref={tooltipRef} {...props}>
      <span className={S.trigger} aria-describedby={isVisible ? 'tooltip-content' : undefined} tabIndex={0}>
        {triggerContent} <AlertIcon />
      </span>
      <div
        role='tooltip'
        className={`${S.contentWrapper} ${S.contentWrapperVariant[isVisible ? 'visible' : 'hidden']}`}
        data-visible={isVisible}
        aria-hidden={!isVisible}
      >
        {children && (
          <>
            <BubblePointIcon className={S.bubblePointIcon} />
            <span className={S.content}>{children}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
