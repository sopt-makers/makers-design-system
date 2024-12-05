import { IconImagePlus } from '@sopt-makers/icons';
import { FieldBox } from 'FieldBox';
import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { dropzoneStyle } from './style.css';

export interface DropzoneProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  required?: boolean;
  width?: string;
  height?: string;
  icon?: ReactNode;
}

export const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>((props, forwardedRef) => {
  const {
    label,
    description,
    required = false,
    width = '300px',
    height = '170px',
    icon = <IconImagePlus color='white' style={{ width: '24px', height: '24px' }} />,
  } = props;

  const { getRootProps, getInputProps } = useDropzone();

  return (
    <FieldBox
      topAddon={
        <FieldBox.TopAddon leftAddon={<FieldBox.Label description={description} label={label} required={required} />} />
      }
    >
      <div className={dropzoneStyle} style={{ width, height }} {...getRootProps()}>
        {icon}
        <input ref={forwardedRef} {...getInputProps()} />
      </div>
    </FieldBox>
  );
});

Dropzone.displayName = 'Dropzone';
