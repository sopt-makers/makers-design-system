'use client';

import React, { createContext, useState } from 'react';
import { DialogComponent } from './DialogComponent';
import { DialogOptionType, ProviderChildren } from './types';

export const DialogContext = createContext({
  openDialog(option: DialogOptionType) {},
  closeDialog() {},
});

function DialogProvider({ children }: ProviderChildren) {
  const [dialogOption, setDialogOption] = useState<DialogOptionType | null>(null);

  const openDialog = (option: DialogOptionType) => {
    setDialogOption(option);
  };

  const closeDialog = () => {
    setDialogOption(null);
  };
  console.log(dialogOption);
  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      {dialogOption && <DialogComponent onClose={closeDialog} {...dialogOption} />}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
