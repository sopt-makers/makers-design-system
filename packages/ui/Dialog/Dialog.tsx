"use client";

import * as Dialogs from '@radix-ui/react-dialog';
import { DialogAnimation, DialogDescription, DialogFooter, DialogTitle } from './components';
import { dialogContainer, overlay } from './style.css';
import type { DialogProps } from './types';

export function DialogContainer ({ isOpen, onClose, children, ...restProps }: DialogProps) {
  return (
    <Dialogs.Root onOpenChange={onClose} open={isOpen}>
      <Dialogs.Portal>
        <Dialogs.Overlay className={overlay}>
          <DialogAnimation>
            <Dialogs.Content asChild className={dialogContainer} {...restProps}>
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
