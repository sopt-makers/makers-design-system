import type { HTMLAttributes } from 'react';
import TooltipTrigger from './Trigger';
import TooltipContent from './Content';
import { useTooltip } from './useTooltip';
import { TooltipContext } from './TooltipContext';
import * as S from './style.css';

function TooltipRoot({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { isOpen, triggerRef, contentRef, position } = useTooltip();

  return (
    <TooltipContext.Provider value={{ isOpen, position, contentRef }}>
      <div className={S.tooltipWrapper} ref={triggerRef} {...props}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};

export default Tooltip;
