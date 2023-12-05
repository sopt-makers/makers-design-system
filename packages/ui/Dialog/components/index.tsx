import React, { PropsWithChildren, ReactNode } from 'react';
import { description, footer, title } from './style.css';

export function DialogTitle({children}:PropsWithChildren) {
  return (
    <div className={title}>{children}</div>
  )
}

export function DialogDescription({children}:PropsWithChildren) {
    return (
      <div className={description}>{children}</div>
    )
  }

interface DialogFooterProp{
    children:ReactNode;
    align:"center"|"left"|"right"
}

export function DialogFooter({children,align}:DialogFooterProp) {
    return (
      <div className={footer[align]}>{children}</div>
    )
  }
  