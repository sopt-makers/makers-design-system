import { forwardRef, useState } from 'react';
import { IconImagePlus } from '@sopt-makers/icons';
import type { DragEvent, DragEventHandler, HTMLAttributes, ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';
import { dropzoneVariants } from './style.css';

export interface DropzoneProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onDrop'> {
  width?: string;
  height?: string;
  icon?: ReactNode;
  disabled?: boolean;
  accept?: string;
  onDrop?: (event: DragEvent<HTMLDivElement>, files: File[]) => void;
}

export const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>((props, forwardedRef) => {
  const {
    width = '100%',
    height = '170px',
    icon = <IconImagePlus color='white' style={{ width: '24px', height: '24px' }} />,
    disabled = false,
    accept,
    onDragOver,
    onDragLeave,
    onDrop,
  } = props;

  const [isDragOver, setIsDragOver] = useState(false);
  const { getRootProps, getInputProps } = useDropzone();

  const handleDragOver: DragEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!disabled) {
      setIsDragOver(true);
      e.dataTransfer.dropEffect = 'copy';
    } else {
      e.dataTransfer.dropEffect = 'none';
    }

    onDragOver?.(e);
  };

  const handleDragLeave: DragEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    onDragLeave?.(e);
  };

  const handleDrop: DragEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    onDrop?.(e, Array.from(e.dataTransfer.files));
  };

  return (
    <div
      aria-disabled={disabled}
      className={isDragOver ? dropzoneVariants.dragOver : dropzoneVariants.default}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ width, height }}
      {...getRootProps()}
    >
      {icon}
      <input accept={accept} disabled={disabled} ref={forwardedRef} {...getInputProps()} />
    </div>
  );
});

Dropzone.displayName = 'Dropzone';
