import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import TooltipTrigger from 'Tooltip/Trigger';
import TooltipContent from 'Tooltip/Content';
import { TooltipProvider } from './TooltipContext';
import * as S from './style.css';

interface TooltipRootProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

function TooltipRoot({ isOpen: controlledOpen, children, ...props }: TooltipRootProps) {
  return (
    <TooltipProvider controlledOpen={controlledOpen}>
      <div className={clsx(S.tooltipWrapper, props.className)} {...props}>
        {children}
      </div>
    </TooltipProvider>
  );
}

const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};

export default Tooltip;
