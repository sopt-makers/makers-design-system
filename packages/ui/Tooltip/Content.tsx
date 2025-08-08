import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import BubblePointIcon from 'Tooltip/icons/bubblePoint';
import clsx from 'clsx';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';
import { useTooltip } from './useTooltip';

const TooltipContent = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }) => {
  const { isOpen, tooltipId } = useTooltipContext();
  const { position, contentRef } = useTooltip();

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
    >
      <BubblePointIcon className={clsx(S.bubblePointIcon, S.bubblePointIconPosition[position])} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
