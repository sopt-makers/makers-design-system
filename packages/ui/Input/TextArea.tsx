import { useState, type ChangeEvent, type TextareaHTMLAttributes } from 'react';
import * as S from './style.css';
import AlertCircleIcon from './icons/AlertCircleIcon';
import SendIcon from './icons/SendIcon';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  className?: string;
  labelText?: string;
  descriptionText?: string;
  errorMessage?: string;
  value: string;
  maxLength: number;
  // isError -> validationFn 순서로 적용
  isError?: boolean;
  validationFn?: (input: string) => boolean;
  onSubmit: () => void;
  disableEnterSubmit?: boolean;
  lineHeight?: number; // px
  fixedHeight?: number; // px
}

function TextArea(props: TextAreaProps) {
  const { className, labelText, descriptionText, errorMessage, value, maxLength, isError, validationFn, onSubmit, disableEnterSubmit = false, lineHeight = 26, fixedHeight, ...inputProps } = props;
  const { onChange, ...restInputProps } = inputProps;

  const [calcHeight, setCalcHeight] = useState(48);

  const hasError = () => {
    if (inputProps.disabled || inputProps.readOnly) return false;
    if (isError !== undefined) return isError;
    if (validationFn && !validationFn(value)) return true;
    return false;
  }

  const disabled = inputProps.disabled || inputProps.readOnly || value.length === 0 || hasError();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const slicedText = text.slice(0, maxLength);
    onChange && onChange({ ...e, target: { ...e.target, value: slicedText } });

    if (!fixedHeight) {
      const lines = (slicedText.match(/\n/g) || []).length;
      const height = 48 + lineHeight * (lines > 4 ? 4 : lines);
      setCalcHeight(height);
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!disableEnterSubmit && event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      !disabled && onSubmit();
    }
  };

  const buttonPosition = 48 + ((fixedHeight ?? calcHeight) - 48) / 2;

  const required = inputProps.required ? <span className={S.required}>*</span> : null;
  const description = descriptionText ? <p className={S.description}>{descriptionText}</p> : null;
  const input = <textarea {...restInputProps} className={`${S.input} ${S.textarea} ${hasError() ? S.inputError : ''}`} onChange={handleInputChange} onKeyDown={handleKeyPress} style={{ ...inputProps.style, height: `${fixedHeight ?? calcHeight}px` }} value={value} />;

  return <div className={className} style={{ position: 'relative' }}>
    {labelText ? <label className={S.label}><span>{labelText}{required}</span>{description}{input}</label> : <div className={S.inputWrap}>{description}{input}</div>}

    <button className={S.submitButton} disabled={disabled} onClick={onSubmit} style={{ transform: `translateY(-${buttonPosition}px)` }} type="submit"><SendIcon disabled={disabled} /></button>

    <div className={S.inputBottom}>
      {hasError() ? <div className={S.errorMessage}><AlertCircleIcon /><p>{errorMessage ?? 'error'}</p></div> : <div> </div>}
      <p className={`${S.count} ${value.length === maxLength ? S.maxCount : ''}`}>{value.length}/{maxLength}</p>
    </div>
  </div>
}

export default TextArea;
