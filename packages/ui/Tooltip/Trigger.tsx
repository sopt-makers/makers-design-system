import type { PropsWithChildren } from 'react';
import { useTooltipContext } from './TooltipContext';
import * as S from './style.css';

export interface TooltipTriggerProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

const TooltipTrigger = ({ children, style }: TooltipTriggerProps) => {
  const { showTooltip, hideTooltip, tooltipId } = useTooltipContext();

  return (
    <div
      aria-describedby={tooltipId}
      className={S.trigger}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      style={style}
    >
      {children}
    </div>
  );
};

TooltipTrigger.displayName = 'TooltipTrigger';

export default TooltipTrigger;
