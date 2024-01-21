import { FC } from 'react';

import * as Dialogs from '@radix-ui/react-dialog';
import { DialogAnimation, DialogDescription, DialogFooter, DialogTitle } from './components';
import { dialogContainer, overlay } from './style.css';
import { DialogProps } from './types';

export const DialogContainer: FC<DialogProps> = ({ isOpen, onClose, children, ...restProps }) => {
  return (
    <Dialogs.Root open={isOpen} onOpenChange={onClose}>
      <Dialogs.Portal>
        <Dialogs.Overlay className={overlay}>
          <DialogAnimation>
            <Dialogs.Content className={dialogContainer} asChild {...restProps}>
              <div>{children}</div>
            </Dialogs.Content>
          </DialogAnimation>
        </Dialogs.Overlay>
      </Dialogs.Portal>
    </Dialogs.Root>
  );
};

const Dialog = Object.assign(DialogContainer, {
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Animation: DialogAnimation,
});

export default Dialog;
