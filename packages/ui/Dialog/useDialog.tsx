import { useContext } from 'react';
import { DialogContext } from './DialogProvider';
import { DialogOptionType } from './types';

const useDialog = () => {
  const { openDialog, closeDialog } = useContext(DialogContext);

  return {
    open(option: DialogOptionType) {
      openDialog(option);
    },
    close() {
      closeDialog();
    },
  };
};

export default useDialog;
