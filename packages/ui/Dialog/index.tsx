import { FC, ReactNode } from 'react';

import * as Dialogs from '@radix-ui/react-dialog';
import { DialogDescription, DialogFooter, DialogTitle } from './components';
import { dialogContainer, overlay } from './style.css';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  device: 'desktop' | 'mobile';
  children?: ReactNode;
}

const DialogComponent: FC<DialogProps> = ({ isOpen, onClose, children, device, ...restProps }) => {
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

const Dialog = Object.assign(DialogComponent, {
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
});

export default Dialog;
