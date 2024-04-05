"use client";

import { createContext, useEffect, useState } from 'react';
import DialogComponent from './DialogComponent';
import type { DialogOptionType, ProviderChildren } from './types';

export const DialogContext = createContext({
  openDialog: (_option: DialogOptionType) => {},
  closeDialog: () => {},
  checkCheckBox: (_isCheckValue:boolean) => {},
});

function DialogProvider({ children }: ProviderChildren) {
  const [dialogOption, setDialogOption] = useState<DialogOptionType | null>(null);
  const [isCheck, setIsCheck] = useState(dialogOption?.checkBoxOptions?.checked ?? false);

  const openDialog = (option: DialogOptionType) => {
    setDialogOption(option);
  };

  const closeDialog = () => {
    setDialogOption(null);
  };

  const checkCheckBox = (isCheckValue:boolean) => {
    setIsCheck(isCheckValue);
  };
  
  useEffect(() => {
    if (dialogOption?.checkBoxOptions) {
      const newCheckBoxOption = { ...dialogOption.checkBoxOptions, checked: isCheck };
      const newDialogOption = { ...dialogOption, checkBoxOptions: newCheckBoxOption };
      setDialogOption(newDialogOption);
    }
  }, [isCheck, dialogOption]);

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, checkCheckBox }}>
        {children}
        {dialogOption ? <DialogComponent isOpen={Boolean(dialogOption)} onClose={closeDialog} {...dialogOption} /> : null}
      </DialogContext.Provider>
  );
}

export default DialogProvider;
