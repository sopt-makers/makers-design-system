import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import BubblePointIcon from 'Tooltip/icons/bubblePoint';
import clsx from 'clsx';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';
import { useTooltipContentPlacement } from 'Tooltip/useTooltipContentPlacement';

export interface TooltipContentProps extends PropsWithChildren {
  size?: 'small' | 'large';
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ children, size = 'small' }) => {
  const { isOpen, tooltipId, contentRef } = useTooltipContext();
  const { placement } = useTooltipContentPlacement();

  return (
    <div
      aria-hidden={!isOpen}
      className={clsx(
        S.contentWrapper[isOpen ? 'visible' : 'hidden'],
        S.contentWrapperPosition[placement],
        S.commonContentWrapper,
        S.contentWrapperSize[size],
      )}
      id={tooltipId}
      ref={contentRef}
      role='tooltip'
    >
      <BubblePointIcon className={clsx(S.bubblePointIcon, S.bubblePointIconPosition[placement])} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
