import AlertCircleIcon from 'Input/icons/AlertCircleIcon';
import { forwardRef, type HTMLAttributes } from 'react';
import { errorMessage } from '../style.css';

export interface FieldBoxErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const FieldBoxErrorMessage = forwardRef<HTMLDivElement, FieldBoxErrorMessageProps>((props, forwardedRef) => {
  const { message } = props;

  return (
    <div className={errorMessage} ref={forwardedRef}>
      <AlertCircleIcon />
      <p>{message}</p>
    </div>
  );
});

FieldBoxErrorMessage.displayName = 'FieldBoxErrorMessage';
