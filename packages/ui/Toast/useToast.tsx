import { useContext } from "react";
import { ToastContext } from "./ToastProvider";
import { ToastOptionType } from "./types";

const useToast = () => {
  const { openToast, closeToast } = useContext(ToastContext);

  return {
    open(option: ToastOptionType) {
      openToast(option);
    },
    close() {
      closeToast();
    }
  };
};

export default useToast;
