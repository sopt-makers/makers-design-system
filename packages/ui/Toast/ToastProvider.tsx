'use client';

import { createContext, useRef, useState } from 'react';
import ToastComponent from './Toast';
import { Children, ToastOptionType } from './types';

export const ToastContext = createContext({
  openToast(option: ToastOptionType) {},
});

function ToastProvider({ children }: Children) {
  const [toastOption, setToastOption] = useState<ToastOptionType | null>(null);
  const toastTimer = useRef<NodeJS.Timeout>();

  const openToast = (option: ToastOptionType) => {
    setToastOption(option);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    const timer = setTimeout(() => {
      setToastOption(null);
    }, 4000);
    toastTimer.current = timer;
  };

  return (
    <ToastContext.Provider value={{ openToast }}>
      {children}
      {toastOption && <ToastComponent {...toastOption} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
