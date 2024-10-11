import { forwardRef } from 'react';
import type { ReactNode } from 'react';

export interface FieldBoxProps {
  topAddon?: ReactNode;
  bottomAddon?: ReactNode;
  children: ReactNode;
}

const FieldBox = forwardRef<HTMLDivElement, FieldBoxProps>((props, forwardedRef) => {
  const { topAddon, bottomAddon, children, ...restProps } = props;

  return (
    <div ref={forwardedRef} {...restProps}>
      <div>{topAddon}</div>
      <div>{children}</div>
      <div>{bottomAddon}</div>
    </div>
  );
});

FieldBox.displayName = 'FieldBox';

export default FieldBox;
