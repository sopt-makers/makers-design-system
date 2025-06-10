import { HTMLAttributes, PropsWithChildren, createContext, useContext } from 'react';
import useTooltip from 'Tooltip/useTooltip';
import * as S from './style.css';
import TooltipTrigger from 'Tooltip/Trigger';
import TooltipContent from 'Tooltip/Content';

export const TooltipContext = createContext<boolean>(false);

const TooltipRoot = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { isTooltipVisible, tooltipRef } = useTooltip();

  return (
    <TooltipContext.Provider value={isTooltipVisible}>
      <div className={S.tooltipWrapper} ref={tooltipRef} {...props}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};

export default Tooltip;
