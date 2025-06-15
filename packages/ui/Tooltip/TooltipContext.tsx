import { createContext, RefObject, useContext } from 'react';

export type ContentPosition = 'top' | 'bottom';

export interface TooltipContextProps {
  isOpen: boolean;
  position: ContentPosition;
  contentRef: RefObject<HTMLDivElement>;
}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) throw new Error('Tooltip 컴포넌트는 Tooltip.Root 내에서 사용되어야 합니다.');

  return context;
};
