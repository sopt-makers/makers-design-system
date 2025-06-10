import { createContext, RefObject, useContext } from 'react';

export interface TooltipContextProps {
  isTooltipVisible: boolean;
  position: 'top' | 'bottom';
  contentRef: RefObject<HTMLDivElement>;
}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) throw new Error('Tooltip components must be used within Tooltip.Root');

  return context;
};
