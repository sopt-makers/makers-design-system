import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { BubblePointIcon } from './icons';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';

export type TooltipContentProps = PropsWithChildren;

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ children }) => {
  const { isOpen, position, contentRef } = useTooltipContext();

  return (
    <div
      aria-hidden={!isOpen}
      className={`${S.contentWrapper} ${S.contentWrapperPosition[position]}`}
      data-visible={isOpen}
      ref={contentRef}
      role='tooltip'
    >
      <BubblePointIcon className={`${S.bubblePointIcon} ${S.bubblePointIconPosition[position]}`} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
