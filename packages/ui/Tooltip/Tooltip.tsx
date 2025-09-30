import { type HTMLAttributes } from 'react';
import clsx from 'clsx';
import TooltipTrigger from 'Tooltip/Trigger';
import TooltipContent from 'Tooltip/Content';
import { TooltipProvider } from './TooltipContext';
import * as S from './style.css';

interface TooltipRootProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  style?: React.CSSProperties;
}

const TooltipRoot = ({ isOpen: controlledOpen, children, style, ...props }: TooltipRootProps) => {
  return (
    <TooltipProvider controlledOpen={controlledOpen}>
      <div className={clsx(S.tooltipWrapper, props.className)} style={style} {...props}>
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
