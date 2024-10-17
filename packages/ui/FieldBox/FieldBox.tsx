import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { FieldBoxLabel } from './Label';

export interface FieldBoxProps extends HTMLAttributes<HTMLDivElement> {
  topAddon?: ReactNode;
  bottomAddon?: ReactNode;
}

const FieldBoxImpl = forwardRef<HTMLDivElement, FieldBoxProps>((props, forwardedRef) => {
  const { topAddon, bottomAddon, children, ...restProps } = props;

  return (
    <div ref={forwardedRef} {...restProps}>
      {topAddon}
      <div>{children}</div>
      <div>{bottomAddon}</div>
    </div>
  );
});

FieldBoxImpl.displayName = 'FieldBoxImpl';

export const FieldBox = Object.assign(FieldBoxImpl, {
  Label: FieldBoxLabel,
});
