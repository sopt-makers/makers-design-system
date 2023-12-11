import React from 'react';
import { ChildrenProp, DialogDescriptionProps, DialogFooterProp } from '../types';
import { description, footer, gap, title } from './style.css';

export function DialogTitle({ children, device = 'mobile' }: ChildrenProp) {
  return <div className={title[device]}>{children}</div>;
}

export function DialogDescription({ children, device = 'mobile' }: DialogDescriptionProps) {
  return <div className={`${description[device]}`}>{children}</div>;
}

export function DialogFooter({ children, align, device = 'mobile' }: DialogFooterProp) {
  return <div className={`${footer[align]} ${gap[device]}`}>{children}</div>;
}
