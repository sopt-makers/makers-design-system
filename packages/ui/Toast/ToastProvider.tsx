"use client";

import { createContext, useRef, useState } from "react";
import ToastComponent from "./Toast";
import { Children, ToastOptionType } from "./types";

export const ToastContext = createContext({
  openToast(option: ToastOptionType) {},
});

function ToastProvider({ children }: Children) {
  const [toastOption, setToastOption] = useState<ToastOptionType | null>(null);

  const openToast = (option: ToastOptionType) => {
    if (toastOption !== null) return;
    setToastOption(option);
    setTimeout(() => setToastOption(null), 4000);
  };

  return (
    <ToastContext.Provider value={{ openToast }}>
      {children}
      {toastOption && <ToastComponent {...toastOption} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
