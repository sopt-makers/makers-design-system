import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { BubblePointIcon } from './icons';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';

export type TooltipContentProps = PropsWithChildren;

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ children }) => {
  const { isTooltipVisible, position, contentRef } = useTooltipContext();

  return (
    <div
      aria-hidden={!isTooltipVisible}
      className={`${S.contentWrapper} ${S.contentWrapperPosition[position]}`}
      data-visible={isTooltipVisible}
      ref={contentRef}
      role='tooltip'
      style={{ visibility: isTooltipVisible ? 'visible' : 'hidden' }}
    >
      <BubblePointIcon className={`${S.bubblePointIcon} ${S.bubblePointIconPosition[position]}`} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
