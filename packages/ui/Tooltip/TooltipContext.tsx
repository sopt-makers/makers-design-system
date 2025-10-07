import type { ReactNode } from 'react';
import { createContext, useContext, useId, useRef, useState } from 'react';
import type { Placement } from 'Tooltip/types';

interface TooltipContextProps {
  isOpen: boolean;
  showTooltip: () => void;
  hideTooltip: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
  tooltipId: string;
  placement?: Placement;
}

interface TooltipProviderProps {
  controlledOpen?: boolean;
  placement?: Placement;
  children: ReactNode;
}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

export const TooltipProvider = ({ controlledOpen, placement, children }: TooltipProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const id = useId();
  const tooltipId = `${id}-tooltip`;

  const contentRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    setIsOpen(true);
  };

  const hideTooltip = () => {
    setIsOpen(false);
  };

  return (
    <TooltipContext.Provider
      value={{
        isOpen: controlledOpen ?? isOpen,
        showTooltip,
        hideTooltip,
        contentRef,
        tooltipId,
        placement: placement ?? 'right',
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) throw new Error('Tooltip 컴포넌트는 Tooltip.Root 내에서 사용되어야 합니다.');

  return context;
};
