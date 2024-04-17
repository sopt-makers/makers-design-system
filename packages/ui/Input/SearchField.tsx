import { useState, type FocusEvent, type InputHTMLAttributes } from 'react';
import * as S from './style.css';
import SearchIcon from './icons/SearchIcon';
import XCircleIcon from './icons/XCircleIcon';

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string;
  value: string;
  onSubmit: () => void;
  onReset: () => void;
  disableEnterSubmit?: boolean;
}

function SearchField(props: SearchFieldProps) {
  const { className, value, onSubmit, onReset, disableEnterSubmit = false, ...inputProps } = props;

  const [isFocused, setIsFocused] = useState(false);

  const disabled = inputProps.disabled || inputProps.readOnly || value.length === 0;

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget) {
      onReset();
    }
    setIsFocused(false);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!disableEnterSubmit && !disabled && event.key === 'Enter') {
      onSubmit();
    }
  };

  return <div className={className} style={{ position: 'relative' }}>
    <input {...inputProps} className={`${S.input} ${S.searchField}`} onBlur={handleBlur} onFocus={handleFocus} onKeyDown={handleKeyPress} type="text" value={value} />
    {!disabled && isFocused ?
      <button className={S.submitButton} type="reset">
        <XCircleIcon />
      </button> :
      <button className={S.submitButton} disabled={disabled} onClick={onSubmit} type="submit">
        <SearchIcon disabled={disabled} />
      </button>
    }
  </div>
}

export default SearchField;
