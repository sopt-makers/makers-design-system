import type { PropsWithChildren } from 'react';
import { forwardRef, useId, useEffect } from 'react';
import clsx from 'clsx';
import { BubblePointIcon } from './icons';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';
import { useTooltip } from './useTooltip';

const TooltipContent = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }) => {
  const { isOpen, setTooltipId } = useTooltipContext();
  const { position, contentRef } = useTooltip();

  const id = useId();
  const tooltipId = `${id}-tooltip`;

  useEffect(() => {
    setTooltipId(tooltipId);
  }, [tooltipId, setTooltipId]);

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
