import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import BubblePointIcon from 'Tooltip/icons/bubblePoint';
import clsx from 'clsx';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';
import { useTooltipContentPosition } from 'Tooltip/useTooltip';

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ children, style, ...props }) => {
  const { isOpen, tooltipId, contentRef } = useTooltipContext();
  const { position } = useTooltipContentPosition();

  const iconColor = { color: style?.backgroundColor };

  return (
    <div
      aria-hidden={!isOpen}
      className={clsx(
        S.contentWrapper[isOpen ? 'visible' : 'hidden'],
        S.contentWrapperPosition[position],
        S.commonContentWrapper,
      )}
      id={tooltipId}
      ref={contentRef}
      role='tooltip'
      style={style}
      {...props}
    >
      <BubblePointIcon className={clsx(S.bubblePointIcon, S.bubblePointIconPosition[position])} style={iconColor} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
