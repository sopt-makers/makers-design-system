import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { TopAddon, BottomAddon, FieldBoxErrorMessage, FieldBoxLabel } from './components';

export interface FieldBoxProps extends HTMLAttributes<HTMLDivElement> {
  topAddon?: ReactNode;
  bottomAddon?: ReactNode;
}

const FieldBoxImpl = forwardRef<HTMLDivElement, FieldBoxProps>((props, forwardedRef) => {
  const { topAddon, bottomAddon, children, ...restProps } = props;

  return (
    <div ref={forwardedRef} {...restProps}>
      {topAddon}
      {children}
      {bottomAddon}
    </div>
  );
});

FieldBoxImpl.displayName = 'FieldBoxImpl';

export const FieldBox = Object.assign(FieldBoxImpl, {
  Label: FieldBoxLabel,
  TopAddon,
  BottomAddon,
  ErrorMessage: FieldBoxErrorMessage,
});
