import { type ReactNode, type InputHTMLAttributes, forwardRef } from 'react';
import { FieldBox } from 'FieldBox';
import * as S from './style.css';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string;
  topAddon?: ReactNode;
  bottomAddon?: ReactNode;
  rightAddon?: ReactNode;
  labelText?: string;
  descriptionText?: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  // isError -> validationFn 순서로 적용
  isError?: boolean;
  place?: 'admin';
  validationFn?: (input: string) => boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    topAddon,
    bottomAddon,
    rightAddon,
    labelText,
    descriptionText,
    required,
    errorMessage,
    value,
    isError,
    validationFn,
    place,
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
        (hasError() && errorMessage) || bottomAddon ? (
          <FieldBox.BottomAddon
            leftAddon={hasError() && errorMessage ? <FieldBox.ErrorMessage message={errorMessage} /> : null}
            rightAddon={bottomAddon}
          />
        ) : null
      }
      className={className}
      ref={ref}
      topAddon={
        labelText || descriptionText ? (
          <FieldBox.TopAddon
            leftAddon={<FieldBox.Label description={descriptionText} label={labelText} required={required} />}
          />
        ) : (
          topAddon
        )
      }
    >
      <div className={`${S.inputWrapper({ place })} ${hasError() ? S.inputError : ''}`}>
        <input {...inputProps} className={S.input} value={value} />
        {rightAddon}
      </div>
    </FieldBox>
  );
});

TextField.displayName = 'TextField';

export default TextField;
