import type { HTMLAttributes } from 'react';
import { BubblePointIcon, AlertIcon } from 'Tooltip/icons';
import useTooltip from 'Tooltip/useTooltip';
import * as S from './style.css';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  triggerContent: string;
}

function Tooltip({ triggerContent, children, ...props }: TooltipProps) {
  const { isVisible, tooltipRef } = useTooltip();

  return (
    <div className={S.tooltipWrapper} ref={tooltipRef} {...props}>
      <span aria-describedby={isVisible ? 'tooltip-content' : undefined} className={S.trigger}>
        {triggerContent} <AlertIcon />
      </span>
      <div
        aria-hidden={!isVisible}
        className={`${S.contentWrapper} ${S.contentWrapperVariant[isVisible ? 'visible' : 'hidden']}`}
        data-visible={isVisible}
        role='tooltip'
      >
        {children ? (
          <>
            <BubblePointIcon className={S.bubblePointIcon} />
            <span className={S.content}>{children}</span>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Tooltip;
