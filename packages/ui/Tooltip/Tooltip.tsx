import type { HTMLAttributes } from 'react';
import TooltipTrigger from './Trigger';
import TooltipContent from './Content';
import { useTooltip } from './useTooltip';
import { TooltipContext } from './TooltipContext';
import * as S from './style.css';

interface TooltipRootProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  defaultOpen?: boolean;
}

function TooltipRoot({ isOpen: open, defaultOpen = false, children, ...props }: TooltipRootProps) {
  const { isOpen: internalOpen, triggerRef, contentRef, position } = useTooltip({ defaultOpen });

  const isOpen = open ?? internalOpen;

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
