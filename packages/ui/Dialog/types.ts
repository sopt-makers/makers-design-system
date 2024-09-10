import type { ReactNode } from 'react';
import type React from 'react';
import type { CheckBoxProps } from 'Control/CheckBox';


export interface ChildrenProp {
  children: ReactNode;
}

export interface DialogDescriptionProps extends ChildrenProp {
  isCheck?: boolean;
}

export interface DialogFooterProp extends ChildrenProp {
  align: 'center' | 'left' | 'right' | 'default';
}

interface TypeOptionsProp {
  cancelButtonText?: string;
  approveButtonText?: string;
  buttonFunction?: () => void;
}

export interface DialogOptionType {
  title: ReactNode;
  description: ReactNode;
  checkBoxOptions?: CheckBoxProps;
  type?: 'default' | 'danger' | 'single';
  typeOptions?: TypeOptionsProp;
}

export interface DialogValueProps extends DialogOptionType {
  isOpen: boolean;
  onClose: () => void;
}

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export interface ProviderChildren { children: React.ReactNode }
