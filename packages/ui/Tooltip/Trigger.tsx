import type { CSSProperties, PropsWithChildren } from 'react';
import { useTooltipContext } from './TooltipContext';
import * as S from './style.css';

export interface TooltipTriggerProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TooltipTrigger = ({ style, children }: TooltipTriggerProps) => {
  const { showTooltip, hideTooltip, tooltipId } = useTooltipContext();

  return (
    <div
      aria-describedby={tooltipId}
      className={S.trigger}
      style={style}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
    </div>
  );
};

TooltipTrigger.displayName = 'TooltipTrigger';

export default TooltipTrigger;
