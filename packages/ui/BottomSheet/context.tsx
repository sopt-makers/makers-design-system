import { createContext, PropsWithChildren, useContext } from 'react';

interface ContextProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BottomSheetContext = createContext<ContextProps | null>(null);

export function BottomSheetProvider({ open, onOpenChange, children }: PropsWithChildren<ContextProps>) {
  return (
    <BottomSheetContext.Provider
      value={{
        open,
        onOpenChange,
      }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheetContext() {
  const context = useContext(BottomSheetContext);

  if (context === null) {
    throw new Error('this hook must be used within a BottomSheetProvider');
  }

  return context;
}
