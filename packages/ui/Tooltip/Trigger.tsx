import { useContext } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { AlertIcon } from './icons';
import * as S from './style.css';
import { TooltipContext } from './TooltipContext';

export interface TooltipTriggerProps extends PropsWithChildren {
  icon?: ReactNode;
}

function TooltipTrigger({ icon = <AlertIcon />, children }: TooltipTriggerProps) {
  const isOpen = useContext(TooltipContext);

  return (
    <div aria-describedby={isOpen ? 'tooltip-content' : undefined} className={S.trigger}>
      <span>{children}</span>
      {icon}
    </div>
  );
}

export default TooltipTrigger;
