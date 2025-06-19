import { forwardRef, PropsWithChildren } from 'react';
import { BubblePointIcon } from './icons';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';
import { useTooltip } from './useTooltip';
import clsx from 'clsx';

const TooltipContent = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }) => {
  const { isOpen } = useTooltipContext();
  const { position, contentRef } = useTooltip();

  return (
    <div
      role='tooltip'
      aria-hidden={!isOpen}
      className={clsx(
        S.contentWrapper[isOpen ? 'visible' : 'hidden'],
        S.contentWrapperPosition[position],
        S.commonContentWrapper,
      )}
      ref={contentRef}
    >
      <BubblePointIcon className={clsx(S.bubblePointIcon, S.bubblePointIconPosition[position])} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
