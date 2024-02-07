import { createContext, useEffect, useState } from 'react';
import { DialogComponent } from './DialogComponent';
import { DialogOptionType, ProviderChildren } from './types';

export const DialogContext = createContext({
  openDialog(option: DialogOptionType) {},
  closeDialog() {},
  checkCheckBox(isCheckValue:boolean) {},
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
  }, [isCheck]);

  return (
    <>
      <DialogContext.Provider value={{ openDialog, closeDialog, checkCheckBox }}>
        {children}
        {dialogOption && (
          <DialogComponent isOpen={dialogOption !== null} onClose={closeDialog} {...dialogOption} />
        )}
      </DialogContext.Provider>
    </>
  );
}

export default DialogProvider;
