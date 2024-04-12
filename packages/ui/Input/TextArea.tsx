import { type ChangeEvent, type TextareaHTMLAttributes } from 'react';
import * as S from './style.css';
import AlertCircleIcon from './icons/AlertCircleIcon';
import SendIcon from './icons/SendIcon';

interface TextAreaProps<T> extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  className?: string;
  labelText?: string;
  descriptionText?: string;
  errorMessage?: string;
  value: T;
  maxLength: number;
  height?: string;
  // isError -> validationFn 순서로 적용
  isError?: boolean;
  validationFn?: (input: T) => boolean;
  submitText: () => void;
}

function TextArea<T extends string>(props: TextAreaProps<T>) {
  const { className, labelText, descriptionText, errorMessage, value, maxLength, height, isError, validationFn, submitText, ...inputProps } = props;
  const { onChange, ...restInputProps } = inputProps;

  const hasError = () => {
    if (inputProps.disabled || inputProps.readOnly) return false;
    if (isError !== undefined) return isError;
    if (validationFn && !validationFn(value)) return true;
    return false;
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const slicedText = text.slice(0, maxLength);
    onChange && onChange({ ...e, target: { ...e.target, value: slicedText } });
  }

  const disabled = inputProps.disabled || inputProps.readOnly || value.length === 0 || hasError();
  const required = inputProps.required ? <span className={S.required}>*</span> : null;
  const description = descriptionText ? <p className={S.description}>{descriptionText}</p> : null;
  const input = <textarea className={`${S.input} ${S.textarea} ${hasError() ? S.inputError : ''}`} style={{ height }} value={value} onChange={handleInputChange} {...restInputProps} />;

  return <div className={className} style={{ position: 'relative' }}>
    {labelText ? <label className={S.label}><span>{labelText}{required}</span>{description}{input}</label> : <>{description}{input}</>}

    <button className={S.submitButton} type="submit" disabled={disabled} style={{ transform: `translateY(-48px)` }} onClick={submitText}><SendIcon disabled={disabled} /></button>

    <div className={S.inputBottom}>
      {hasError() ? <div className={S.errorMessage}><AlertCircleIcon /><p>{errorMessage ?? 'error'}</p></div> : <div> </div>}
      <p className={`${S.count} ${value.length === maxLength ? S.maxCount : ''}`}>{value.length}/{maxLength}</p>
    </div>
  </div>
}

export default TextArea;
