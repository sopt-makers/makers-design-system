import { createContext, useContext, type RefObject, type KeyboardEvent } from 'react';

export interface DatepickerContextValue {
  // state
  isOpen: boolean;
  isRange: boolean;
  disabled: boolean;
  internalValue: Date | null;
  internalStartDate: Date | null;
  internalEndDate: Date | null;
  defaultSelectedDate: Date;
  singleInputText: string;
  startInputText: string;
  endInputText: string;
  anchorRect: DOMRect | null;

  primaryInputRef: RefObject<HTMLInputElement>;

  // props
  placeholder?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;

  // setters
  setSingleInputText: (value: string) => void;
  setStartInputText: (value: string) => void;
  setEndInputText: (value: string) => void;

  // handlers
  handleInputClick: () => void;
  handleDateChange: (date: Date) => void;
  handleRangeChange: (startDate: Date | null, endDate: Date | null) => void;
  handleClose: () => void;
  commitSingleInput: () => void;
  commitRangeInput: () => void;
  handleSingleInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleRangeInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const DatepickerContext = createContext<DatepickerContextValue | null>(null);

export function useDatepickerContext() {
  const context = useContext(DatepickerContext);
  if (!context) {
    throw new Error('useDatepickerContext must be used within DatepickerContext.Provider');
  }
  return context;
}
