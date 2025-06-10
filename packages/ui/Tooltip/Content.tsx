import { forwardRef, PropsWithChildren } from 'react';
import { useTooltipContext } from './Tooltip';
import { BubblePointIcon } from './icons';
import * as S from './style.css';

export type TooltipContentProps = PropsWithChildren;

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ children }) => {
  const { isTooltipVisible, position, contentRef } = useTooltipContext();

  return (
    <div
      ref={contentRef}
      role='tooltip'
      aria-hidden={!isTooltipVisible}
      data-visible={isTooltipVisible}
      className={`${S.contentWrapper} ${S.contentWrapperPosition[position]}`}
      style={{ visibility: isTooltipVisible ? 'visible' : 'hidden' }}
    >
      <BubblePointIcon className={`${S.bubblePointIcon} ${S.bubblePointIconPosition[position]}`} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

export default TooltipContent;
