import React from 'react';
import { ChildrenProp, DialogDescriptionProps, DialogFooterProp } from '../types';
import { animation, description, footer, gap, title } from './style.css';

export function DialogTitle({ children }: ChildrenProp) {
  return <div className={title}>{children}</div>;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
  return <div className={`${description}`}>{children}</div>;
}

export function DialogFooter({ children, align }: DialogFooterProp) {
  return <div className={`${footer[align]} ${gap}`}>{children}</div>;
}

export function DialogAnimation({ children }: ChildrenProp) {
  return <div className={animation}>{children}</div>;
}
