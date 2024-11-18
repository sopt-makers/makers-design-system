import type { ReactNode, InputHTMLAttributes } from 'react';
import { FieldBox } from 'FieldBox';
import * as S from './style.css';

interface TextFieldProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string;
  topAddon?: ReactNode;
  bottomAddon?: ReactNode;
  labelText?: string;
  descriptionText?: string;
  required?: boolean;
  errorMessage?: string;
  value?: T;
  // isError -> validationFn 순서로 적용
  isError?: boolean;
  validationFn?: (input: T) => boolean;
}

function TextField<T extends string | number>(props: TextFieldProps<T>) {
  const {
    className,
    topAddon,
    bottomAddon,
    labelText,
    descriptionText,
    required,
    errorMessage,
    value,
    isError,
    validationFn,
    ...inputProps
  } = props;

  const hasError = () => {
    if (inputProps.disabled || inputProps.readOnly) return false;
    if (isError !== undefined) return isError;
    if (validationFn && value && !validationFn(value)) return true;
    return false;
  };

  return (
    <FieldBox
      bottomAddon={
        <FieldBox.BottomAddon
          leftAddon={hasError() && errorMessage ? <FieldBox.ErrorMessage message={errorMessage} /> : null}
          rightAddon={bottomAddon}
        />
      }
      className={className}
      topAddon={
        labelText || descriptionText ? (
          <FieldBox.Label description={descriptionText} label={labelText} required={required} />
        ) : (
          topAddon
        )
      }
    >
      <input {...inputProps} className={`${S.input} ${hasError() ? S.inputError : ''}`} value={value} />
    </FieldBox>
  );
}

export default TextField;
