import { PropsWithChildren } from 'react';
import { useTooltipContext } from './TooltipContext';
import * as S from './style.css';

const TooltipTrigger = ({ children }: PropsWithChildren) => {
  const { isOpen, triggerRef, showTooltip, hideTooltip } = useTooltipContext();

  return (
    <div ref={triggerRef} className={S.trigger} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
    </div>
  );
};

export default TooltipTrigger;
