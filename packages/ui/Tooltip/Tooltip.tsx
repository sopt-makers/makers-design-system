import { HTMLAttributes, createContext, useContext } from 'react';
import TooltipTrigger from 'Tooltip/Trigger';
import TooltipContent from 'Tooltip/Content';
import { useTooltip } from 'Tooltip/useTooltip';
import * as S from './style.css';

export interface TooltipContextProps {
  isTooltipVisible: boolean;
  position: 'top' | 'bottom';
  contentRef: React.RefObject<HTMLDivElement>;
}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) throw new Error('Tooltip components must be used within <Tooltip.Root>');

  return context;
};

const TooltipRoot = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { isTooltipVisible, triggerRef, contentRef, position } = useTooltip();

  return (
    <TooltipContext.Provider value={{ isTooltipVisible, position, contentRef }}>
      <div className={S.tooltipWrapper} ref={triggerRef} {...props}>
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
