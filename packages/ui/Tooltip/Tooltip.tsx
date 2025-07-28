import { useId, type HTMLAttributes } from 'react';
import clsx from 'clsx';
import TooltipTrigger from 'Tooltip/Trigger';
import TooltipContent from 'Tooltip/Content';
import { TooltipProvider } from './TooltipContext';
import * as S from './style.css';

interface TooltipRootProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

const TooltipRoot = ({ isOpen: controlledOpen, children, ...props }: TooltipRootProps) => {
  const id = useId();

  return (
    <TooltipProvider controlledOpen={controlledOpen} id={id}>
      <div className={clsx(S.tooltipWrapper, props.className)} {...props}>
        {children}
      </div>
    </TooltipProvider>
  );
};

const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};

export default Tooltip;
