import { FieldBox } from 'FieldBox';
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export interface DropZoneProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  required?: boolean;
  width?: number;
  height?: number;
  icon?: ReactNode;
}

const DropZone = forwardRef<HTMLInputElement, DropZoneProps>((props, forwardedRef) => {
  const { label, description, required = false, width, height, icon = 'andada' } = props;

  return (
    <FieldBox topAddon={<FieldBox.Label description={description} label={label} required={required} />}>
      <input ref={forwardedRef} type='file'>
        {icon}
      </input>
    </FieldBox>
  );
});

DropZone.displayName = 'DropZone';

export default DropZone;
