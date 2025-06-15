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
      role='tooltip'
      aria-hidden={!isOpen}
      data-visible={isOpen}
      className={`${S.contentWrapper} ${S.contentWrapperPosition[position]}`}
      ref={contentRef}
    >
      <BubblePointIcon className={`${S.bubblePointIcon} ${S.bubblePointIconPosition[position]}`} />
      <span className={S.content}>{children}</span>
    </div>
  );
});

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
