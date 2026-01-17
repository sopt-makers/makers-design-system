import { useCallback, useMemo } from 'react';
import { IconCalendar } from '@sopt-makers/icons';
import { TextField } from '../../Input';
import { useDatepickerContext } from '../DatepickerContext';
import { PLACEHOLDER_TEXT } from '../constants';
import * as S from '../style.css';

function DatepickerInput() {
  const {
    disabled,
    isRange,
    placeholder,
    startPlaceholder,
    endPlaceholder,
    singleInputText,
    startInputText,
    endInputText,
    setSingleInputText,
    setStartInputText,
    setEndInputText,
    handleInputClick,
    commitSingleInput,
    commitRangeInput,
    handleSingleInputKeyDown,
    handleRangeInputKeyDown,
    primaryInputRef,
  } = useDatepickerContext();

  const handleIconClick = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      if (disabled) return;
      event.stopPropagation();
      handleInputClick();
    },
    [disabled, handleInputClick],
  );

  const handleIconKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleIconClick(event);
      }
    },
    [handleIconClick],
  );

  const calendarIcon = useMemo(
    () => (
      <div
        onClick={handleIconClick}
        onKeyDown={handleIconKeyDown}
        role='button'
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        tabIndex={disabled ? -1 : 0}
      >
        <IconCalendar style={{ width: '20px', height: '20px', color: 'white' }} />
      </div>
    ),
    [disabled, handleIconClick, handleIconKeyDown],
  );

  if (isRange) {
    return (
      <div className={S.rangeContainer}>
        <div className={S.textFieldWrapper}>
          <TextField
            aria-haspopup='dialog'
            aria-label='시작 날짜 선택'
            disabled={disabled}
            onBlur={commitRangeInput}
            onChange={(e) => {
              setStartInputText(e.target.value);
            }}
            onClick={handleInputClick}
            onKeyDown={handleRangeInputKeyDown}
            placeholder={startPlaceholder || PLACEHOLDER_TEXT}
            ref={primaryInputRef}
            rightAddon={calendarIcon}
            type='text'
            value={startInputText}
          />
        </div>
        <span className={S.rangeSeparator}>-</span>
        <div className={S.textFieldWrapper}>
          <TextField
            aria-label='종료 날짜 선택'
            disabled={disabled}
            onBlur={commitRangeInput}
            onChange={(e) => {
              setEndInputText(e.target.value);
            }}
            onClick={handleInputClick}
            onKeyDown={handleRangeInputKeyDown}
            placeholder={endPlaceholder || PLACEHOLDER_TEXT}
            rightAddon={calendarIcon}
            type='text'
            value={endInputText}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={S.textFieldWrapper}>
      <TextField
        aria-label='날짜 선택'
        disabled={disabled}
        onBlur={commitSingleInput}
        onChange={(e) => {
          setSingleInputText(e.target.value);
        }}
        onClick={handleInputClick}
        onKeyDown={handleSingleInputKeyDown}
        placeholder={placeholder || PLACEHOLDER_TEXT}
        ref={primaryInputRef}
        rightAddon={calendarIcon}
        type='text'
        value={singleInputText}
      />
    </div>
  );
}

export default DatepickerInput;
