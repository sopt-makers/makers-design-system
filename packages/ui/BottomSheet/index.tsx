/* eslint-disable -- able to click dim sesction jsx-a11y/click-events-have-key-events */
/* eslint-disable -- able to click dim sesction jsx-a11y/no-static-element-interactions */

import { HTMLAttributes, PropsWithChildren, ReactNode, useEffect } from 'react';
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
import { createPortal } from 'react-dom';

export function BottomSheetTrigger({ children }: HTMLAttributes<HTMLButtonElement>) {
  const { open, onOpenChange } = useBottomSheetContext();

  const handleOpenChange = () => {
    onOpenChange(!open);
  };

  return <div onClick={handleOpenChange}>{children}</div>;
}

BottomSheetTrigger.displayName = 'BottomSheetTrigger';

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

  const isUncontrolled = _open === undefined;

  const open = isUncontrolled ? internalOpenValue : _open;
  const handleOpenChange = (value: boolean) => {
    if (isUncontrolled) {
      if (value) {
        internalOpen();
      } else {
        internalClose();
      }
    } else {
      onOpenChange?.(value);
    }
  };

  return (
    <BottomSheetProvider open={open} onOpenChange={handleOpenChange}>
      {children}
    </BottomSheetProvider>
  );
}

BottomSheetRoot.displayName = 'BottomSheetRoot';

interface ContentProps {
  title?: string;
  backIcon?: boolean;
}

export function BottomSheetContent({ title, backIcon, children }: PropsWithChildren<ContentProps>) {
  const { open, onOpenChange } = useBottomSheetContext();

  useEffect(() => {
    if (window === undefined) return;

    const getScrollbarWidth = () => {
      return window.innerWidth - document.documentElement.clientWidth;
    };

    /** overflow hidden 시 스크롤바 사라짐으로 layout shift 방지를 위한 padding-right를 추가 */
    const originPaddingRight = document.body.style.paddingRight;
    if (open) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = originPaddingRight;
    };
  }, [open]);

  return createPortal(
    open && (
      <>
        <div className={dimStyle} onClick={() => onOpenChange(false)} />
        <div className={overlayStyle}>
          {title && (
            <div className={titleWrapperStyle}>
              {backIcon && <IconChevronLeft onClick={() => onOpenChange(false)} className={iconStyle} />}
              <p className={titleTextStyle}>{title}</p>
            </div>
          )}
          {children}
        </div>
      </>
    ),
    document.body,
  );
}

BottomSheetContent.displayName = 'BottomSheetContent';

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

BottomSheetBody.displayName = 'BottomSheetBody';

export function BottomSheetActionButton({ children }: PropsWithChildren) {
  return (
    <div className={buttonWrapperStyle}>
      <Button size='lg' variant='fill' className={actionButtonStyle}>
        {children}
      </Button>
    </div>
  );
}

BottomSheetActionButton.displayName = 'BottomSheetActionButton';
