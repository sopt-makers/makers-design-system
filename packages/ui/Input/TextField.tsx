import { type InputHTMLAttributes } from 'react';
import * as S from './style.css';
import AlertCircleIcon from './icons/AlertCircleIcon';

interface TextFieldProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string;
  labelText?: string;
  descriptionText?: string;
  errorMessage?: string;
  value: T;
  // isError -> validationFn 순서로 적용
  isError?: boolean;
  validationFn?: (input: T) => boolean;
}

function TextField<T extends string | number>(props: TextFieldProps<T>) {
  const { className, labelText, descriptionText, errorMessage, value, isError, validationFn, ...inputProps } = props;

  const hasError = () => {
    if (inputProps.disabled || inputProps.readOnly) return false;
    if (isError !== undefined) return isError;
    if (validationFn && !validationFn(value)) return true;
    return false;
  }

  const required = inputProps.required ? <span className={S.required}>*</span> : null;
  const description = descriptionText ? <p className={S.description}>{descriptionText}</p> : null;
  const input = <input {...inputProps} className={`${S.input} ${hasError() ? S.inputError : ''}`} value={value} />;

  return <div className={className}>
    {labelText ? <label className={S.label}><span>{labelText}{required}</span>{description}{input}</label> : <div className={S.inputWrap}>{description}{input}</div>}
    {hasError() ? <div className={S.inputBottom}><div className={S.errorMessage}><AlertCircleIcon /><p>{errorMessage ?? 'error'}</p></div></div> : null}
  </div>
}

export default TextField;
