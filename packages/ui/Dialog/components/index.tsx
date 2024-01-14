import React from 'react';
import { ChildrenProp, DialogDescriptionProps, DialogFooterProp } from '../types';
import { description, footer, gap, title } from './style.css';

export function DialogTitle({ children }: ChildrenProp) {
  return <div className={title}>{children}</div>;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
  return <div className={`${description}`}>{children}</div>;
}

export function DialogFooter({ children, align }: DialogFooterProp) {
  return <div className={`${footer[align]} ${gap}`}>{children}</div>;
}
