import type { PropsWithChildren } from 'react';
import { useTooltipContext } from './TooltipContext';
import * as S from './style.css';

const TooltipTrigger = ({ children }: PropsWithChildren) => {
  const { showTooltip, hideTooltip, tooltipId } = useTooltipContext();

  return (
    <div aria-describedby={tooltipId} className={S.trigger} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
    </div>
  );
};

TooltipTrigger.displayName = 'TooltipTrigger';

export default TooltipTrigger;
