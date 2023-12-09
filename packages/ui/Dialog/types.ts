import React, { ReactNode } from 'react';
import { CheckBoxProps } from '../CheckBox';

export interface ChildrenProp {
  children: ReactNode;
}

export interface DialogFooterProp extends ChildrenProp {
  align: 'center' | 'left' | 'right';
}

interface TypeOptionsProp {
  cancelButtonText: string;
  approveButtonText: string;
  buttonFunction?: () => void;
}

export interface DialogOptionType {
  isOpen?: boolean;
  onClose?: () => void;
  device: 'desktop' | 'mobile';
  title: ReactNode;
  description: ReactNode;
  checkBoxOptions?: CheckBoxProps;
  type?: 'default' | 'danger' | 'single';
  typeOptions?: TypeOptionsProp;
}

export interface DialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  device: 'desktop' | 'mobile';
  children?: ReactNode;
}

export type ProviderChildren = { children: React.ReactNode };
