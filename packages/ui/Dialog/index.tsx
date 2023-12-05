import React, { FC, ReactNode } from "react";

import * as Dialogs from '@radix-ui/react-dialog';
import { m } from 'framer-motion';
import { DialogDescription, DialogFooter, DialogTitle } from "./components";
import { dialogContainer, overlay } from "./style.css";

interface DialogProps{
    isOpen:boolean;
    onClose:()=>void;
    children:ReactNode;
    device: "desktop"|"mobile";
}

const DialogComponent: FC<DialogProps> = ({isOpen, onClose, children, device,...restProps}) => {
  return (
    <Dialogs.Root open={isOpen} onOpenChange={onClose}>
    <Dialogs.Portal>
      <Dialogs.Overlay className={overlay}>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
          <Dialogs.Content asChild {...restProps}>
            <m.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className={dialogContainer[device]}>
              {children}
            </m.div>
          </Dialogs.Content>
        </m.div>
      </Dialogs.Overlay>
    </Dialogs.Portal>
  </Dialogs.Root>
  )
}


const Dialog = Object.assign(DialogComponent, {
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
});

export default Dialog;