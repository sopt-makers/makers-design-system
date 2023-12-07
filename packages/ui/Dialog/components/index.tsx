import { ReactNode } from 'react';
import { description, footer, title } from './style.css';

interface ChildrenProp {
  children?: ReactNode | string;
}

export function DialogTitle({ children }: ChildrenProp) {
  return <div className={title}>{children}</div>;
}

export function DialogDescription({ children }: ChildrenProp) {
  return <div className={description}>{children}</div>;
}

interface DialogFooterProp extends ChildrenProp {
  align: 'center' | 'left' | 'right';
}

export function DialogFooter({ children, align }: DialogFooterProp) {
  return <div className={footer[align]}>{children}</div>;
}
