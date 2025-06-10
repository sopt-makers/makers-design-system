import { useContext } from 'react';
import type { PropsWithChildren, ReactNode  } from 'react';
import { AlertIcon } from 'Tooltip/icons';
import { TooltipContext } from 'Tooltip/Tooltip';
import * as S from './style.css';

export interface TooltipTriggerProps extends PropsWithChildren {
  icon?: ReactNode;
}

function TooltipTrigger({ icon = <AlertIcon />, children }: TooltipTriggerProps) {
  const isTooltipVisible = useContext(TooltipContext);

  return (
    <div aria-describedby={isTooltipVisible ? 'tooltip-content' : undefined} className={S.trigger}>
      <span>{children}</span>
      {icon}
    </div>
  );
}

export default TooltipTrigger;
