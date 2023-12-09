import React from 'react';
import { ChildrenProp, DialogFooterProp } from '../types';
import { description, footer, title } from './style.css';

export function DialogTitle({ children }: ChildrenProp) {
  return <div className={title}>{children}</div>;
}

export function DialogDescription({ children }: ChildrenProp) {
  return <div className={description}>{children}</div>;
}

export function DialogFooter({ children, align }: DialogFooterProp) {
  return <div className={footer[align]}>{children}</div>;
}
