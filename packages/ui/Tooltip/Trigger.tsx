import type { PropsWithChildren } from 'react';
import { useTooltipContext } from './TooltipContext';
import * as S from './style.css';

function TooltipTrigger({ children }: PropsWithChildren) {
  const { triggerRef, showTooltip, hideTooltip } = useTooltipContext();

  return (
    <div className={S.trigger} onMouseEnter={showTooltip} onMouseLeave={hideTooltip} ref={triggerRef}>
      {children}
    </div>
  );
}

export default TooltipTrigger;
