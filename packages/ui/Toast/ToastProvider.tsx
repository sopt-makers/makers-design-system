"use client";

import { createContext, useRef, useState } from "react";
import ToastComponent from "./Toast";
import { Children, ToastOptionType } from "./types";

export const ToastContext = createContext({
  openToast(option: ToastOptionType) {},
  closeToast() {},
});

function ToastProvider({ children }: Children) {
  const [toastOption, setToastOption] = useState<ToastOptionType | null>(null);
  const timerRef = useRef<NodeJS.Timeout>();
  const toastRef = useRef<HTMLDivElement>();

  const openToast = (option: ToastOptionType) => {
    if (toastOption) return;

    setToastOption(option);
    const timer = setTimeout(() => {
      setToastOption(null);
    }, 4000);
    timerRef.current = timer;
  };

  const closeToast = () => {
    if (!toastOption) return;

    clearTimeout(timerRef.current);
    setTimeout(() => setToastOption(null), 200);
    if (toastRef.current) {
      toastRef.current.style.opacity = "0";
      toastRef.current.style.transition = "opacity .2s linear";
    }
  };

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      {toastOption && <ToastComponent ref={toastRef} {...toastOption} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
