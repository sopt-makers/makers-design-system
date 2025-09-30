/* eslint-disable -- able to click dim sesction jsx-a11y/click-events-have-key-events */
/* eslint-disable -- able to click dim sesction jsx-a11y/no-static-element-interactions */

import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { BottomSheetProvider, useBottomSheetContext } from './context';
import { useBooleanState } from '@toss/react';
import { IconChevronLeft } from '@sopt-makers/icons';
import {
  actionButtonStyle,
  bodyWrapperStyle,
  buttonWrapperStyle,
  contentWrapperStyle,
  dimStyle,
  iconStyle,
  overlayStyle,
  titleTextStyle,
  titleWrapperStyle,
} from './style.css';
import Button from '../Button';

export function BottomSheetTrigger({ children }: HTMLAttributes<HTMLButtonElement>) {
  const { open, onOpenChange } = useBottomSheetContext();

  const handleOpenChange = () => {
    onOpenChange(!open);
  };

  return <div onClick={handleOpenChange}>{children}</div>;
}

interface RootProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BottomSheetRoot({
  open: _open,
  defaultOpen = false,
  onOpenChange,
  children,
}: PropsWithChildren<RootProps>) {
  const [internalOpenValue, internalOpen, internalClose] = useBooleanState(defaultOpen);

  const uncontrolled = _open === undefined;

  const open = uncontrolled ? internalOpenValue : _open;
  const handleOpenChange = (value: boolean) => {
    if (uncontrolled) {
      if (value) {
        internalOpen();
      } else {
        internalClose();
      }
    } else {
      onOpenChange?.(value);
    }
  };

  const handleDimClick = () => {
    if (uncontrolled) {
      internalClose();
    } else {
      onOpenChange?.(false);
    }
  };

  return (
    <BottomSheetProvider open={open} onOpenChange={handleOpenChange}>
      {open && <div className={dimStyle} onClick={handleDimClick} />}
      {children}
    </BottomSheetProvider>
  );
}

interface ContentProps {
  title?: string;
  backIcon?: boolean;
}

export function BottomSheetContent({ title, backIcon, children }: PropsWithChildren<ContentProps>) {
  const { open, onOpenChange } = useBottomSheetContext();

  return (
    open && (
      <div className={overlayStyle}>
        {title && (
          <div className={titleWrapperStyle}>
            {backIcon && <IconChevronLeft onClick={() => onOpenChange(false)} className={iconStyle} />}
            <p className={titleTextStyle}>{title}</p>
          </div>
        )}
        {children}
      </div>
    )
  );
}

interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
}

export const BottomSheetBody = ({ children, ...props }: PropsWithChildren<BodyProps>) => {
  const { maxHeight = '400px', ...restProps } = props;

  return (
    <div className={bodyWrapperStyle} {...restProps}>
      <div className={contentWrapperStyle} style={{ maxHeight }}>
        {children}
      </div>
    </div>
  );
};

export function BottomSheetActionButton({ children }: PropsWithChildren) {
  return (
    <div className={buttonWrapperStyle}>
      <Button size='lg' variant='fill' className={actionButtonStyle}>
        {children}
      </Button>
    </div>
  );
}
