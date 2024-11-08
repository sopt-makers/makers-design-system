import { useMemo, useRef, type ChangeEvent, type TextareaHTMLAttributes, isValidElement, useState } from 'react';
import * as S from './style.css';
import AlertCircleIcon from './icons/AlertCircleIcon';
import SendIcon from './icons/SendIcon';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  className?: string;
  topAddon?: React.ReactNode | { labelText?: string; descriptionText?: string };
  rightAddon?: React.ReactNode | { buttonContent?: React.ReactNode; onClick: () => void }; // ReactNode로 버튼을 전달하면 disabled 및 onKeyDown 직접처리 필요

  isError?: boolean;
  validationFn?: (input: string) => boolean; // isError가 없을 때만 적용
  errorMessage?: string; // isError 또는 validationFn 결과가 true일 때만 표시
  value: string; // string 타입으로 한정

  disableEnterSubmit?: boolean; // true일 경우, Enter 키는 줄바꿈으로 동작
  maxLength?: number; // 없으면 무제한
  fixedHeight?: number; // px -> 늘어나지 않도록 높이를 고정
  maxHeight?: number; // px -> 늘어나면서 최대 높이를 제한
}

function TextArea(props: TextAreaProps) {
  const {
    className,
    topAddon,
    rightAddon,
    isError,
    validationFn,
    errorMessage,
    value,
    disableEnterSubmit = false,
    maxLength,
    fixedHeight,
    maxHeight = 130, // lineHeight가 26일 경우 5줄
    ...inputProps
  } = props;
  const { onChange, ...restInputProps } = inputProps;
  const { disabled, readOnly, required } = restInputProps;

  const isValid = validationFn ? validationFn(value) : true;
  const isEmpty = value.length === 0;

  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const [isFocused, setIsFocused] = useState(false);

  const hasError = useMemo(() => {
    if (disabled || readOnly) return false;
    if (isError !== undefined) return isError;
    if (!isValid) return true;
    return false;
  }, [disabled, readOnly, isError, isValid]);

  const isSubmitDisabled = disabled || readOnly || isEmpty || hasError;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const slicedText = maxLength ? text.slice(0, maxLength) : text;
    onChange && onChange({ ...e, target: { ...e.target, value: slicedText } });

    // textarea rows
    if (!fixedHeight) {
      e.target.style.height = '1px';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!disableEnterSubmit && event.key === 'Enter' && !event.shiftKey) {
      // Enter 키를 누르면 onClick 이벤트 발생
      event.preventDefault();
      !isSubmitDisabled && submitButtonRef.current?.click();
    }
  };

  const labelText = useMemo(() => {
    if (topAddon && typeof topAddon === 'object' && 'labelText' in topAddon) {
      return topAddon.labelText;
    }
  }, [topAddon]);

  const descriptionText = useMemo(() => {
    if (topAddon && typeof topAddon === 'object' && 'descriptionText' in topAddon) {
      return topAddon.descriptionText;
    }
  }, [topAddon]);

  const submitButton = useMemo(() => {
    if (rightAddon && typeof rightAddon === 'object' && 'onClick' in rightAddon) {
      return (
        <button
          className={S.textareaSubmitButton}
          disabled={isSubmitDisabled}
          onClick={rightAddon.onClick}
          ref={submitButtonRef}
          type='button'
        >
          {/* buttonContent 가 없을 경우 default로 SendIcon 표시 */}
          {rightAddon.buttonContent ?? <SendIcon disabled={isSubmitDisabled} />}
        </button>
      );
    }
  }, [rightAddon, isSubmitDisabled]);

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setIsFocused(true);
    inputProps.onFocus && inputProps.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setIsFocused(false);
    inputProps.onBlur && inputProps.onBlur(e);
  };

  const requiredEl = required ? <span className={S.required}>*</span> : null;
  const descriptionEl = descriptionText ? <p className={S.description}>{descriptionText}</p> : null;
  const labelEl = labelText ? (
    <label className={S.label} htmlFor={labelText}>
      <span>
        {labelText}
        {requiredEl}
      </span>
      {descriptionEl}
    </label>
  ) : (
    <div className={S.inputWrap}>{descriptionEl}</div>
  );

  return (
    <div className={className}>
      {isValidElement(topAddon) ? topAddon : labelEl}

      <div className={`${S.textareaWrap} ${hasError ? S.inputError : ''} ${isFocused ? S.focus : ''}`}>
        <textarea
          {...restInputProps}
          className={`${S.input} ${S.textarea}`}
          id={labelText}
          onBlur={handleBlur}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={inputProps.onKeyDown ?? handleKeyPress}
          rows={1}
          style={{
            ...inputProps.style,
            height: fixedHeight ? `${fixedHeight}px` : 'auto',
            maxHeight: `${maxHeight}px`,
          }}
          value={value}
        />
        {isValidElement(rightAddon) ? rightAddon : submitButton}
      </div>

      {hasError || maxLength ? (
        <div className={S.inputBottom}>
          {hasError ? (
            <div className={S.errorMessage}>
              <AlertCircleIcon />
              <p>{errorMessage ?? 'error'}</p>
            </div>
          ) : (
            <div> </div> // space-between 속성때문에 필요
          )}

          {maxLength ? (
            <p className={`${S.count} ${value.length > maxLength ? S.maxCount : ''}`}>
              {value.length}/{maxLength}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default TextArea;
