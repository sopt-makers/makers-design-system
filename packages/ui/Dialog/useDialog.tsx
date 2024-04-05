import { useCallback, useContext } from 'react';
import { DialogContext } from './DialogProvider';
import type { DialogOptionType } from './types';

const useDialog = () => {
  const { openDialog, closeDialog } = useContext(DialogContext);

  const open = useCallback(
    (option: DialogOptionType) => {
      openDialog(option);
    },
    [openDialog]
  );

  return {
    open,
    close() {
      closeDialog();
    },
  };
};

export default useDialog;
