import { FC } from 'react';

import * as Dialogs from '@radix-ui/react-dialog';
import React from 'react';
import { DialogDescription, DialogFooter, DialogTitle } from './components';
import { dialogContainer, overlay } from './style.css';
import { DialogProps } from './types';

export const DialogContainer: FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  device,
  ...restProps
}) => {
  return (
    <Dialogs.Root open={isOpen} onOpenChange={onClose}>
      <Dialogs.Portal>
        <Dialogs.Overlay className={overlay}>
          <div>
            <Dialogs.Content className={dialogContainer[device]} asChild {...restProps}>
              <div>{children}</div>
            </Dialogs.Content>
          </div>
        </Dialogs.Overlay>
      </Dialogs.Portal>
    </Dialogs.Root>
  );
};

const Dialog = Object.assign(DialogContainer, {
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
});

export default Dialog;
