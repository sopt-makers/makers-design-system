import { useContext } from "react";
import { ToastContext } from "./ToastProvider";
import { ToastOptionType } from "./types";

const useToast = () => {
  const { openToast } = useContext(ToastContext);

  return {
    open(option: ToastOptionType) {
      openToast(option);
    },
  };
};

export default useToast;
