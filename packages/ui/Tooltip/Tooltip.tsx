import type { HTMLAttributes } from 'react';
import TooltipTrigger from './Trigger';
import TooltipContent from './Content';
import { useTooltip } from './useTooltip';
import * as S from './style.css';

import { TooltipContext } from './TooltipContext';

function TooltipRoot({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { isTooltipVisible, triggerRef, contentRef, position } = useTooltip();

  return (
    <TooltipContext.Provider value={{ isTooltipVisible, position, contentRef }}>
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
