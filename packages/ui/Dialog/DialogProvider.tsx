'use client';

import React, { ChangeEvent, createContext, useCallback, useEffect, useState } from 'react';
import { DialogComponent } from './DialogComponent';
import { DialogOptionType, ProviderChildren } from './types';

export const DialogContext = createContext({
  openDialog(option: DialogOptionType) {},
  closeDialog() {},
  checkCheckBox(e: ChangeEvent<HTMLInputElement>) {},
});

function DialogProvider({ children }: ProviderChildren) {
  const [dialogOption, setDialogOption] = useState<DialogOptionType | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });

  const openDialog = useCallback(
    (option: DialogOptionType) => {
      setDialogOption(option);
    },
    [dialogOption]
  );

  const closeDialog = () => {
    setDialogOption(null);
  };

  const checkCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setDialogOption((prevOption) => ({
      ...prevOption,
      checkBoxOptions: { ...prevOption?.checkBoxOptions, checked: e.target.checked },
    }));
  };

  return (
    <>
      {isMounted && (
        <DialogContext.Provider value={{ openDialog, closeDialog, checkCheckBox }}>
          {children}
          {dialogOption && (
            <DialogComponent
              isOpen={dialogOption !== null}
              onClose={closeDialog}
              {...dialogOption}
            />
          )}
        </DialogContext.Provider>
      )}
    </>
  );
}

export default DialogProvider;
