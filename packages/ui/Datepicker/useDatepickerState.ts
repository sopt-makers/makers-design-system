import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { formatDate, parseDateInput } from './utils';
import type { DatepickerProps } from './types';

export function useDatepickerState(props: DatepickerProps) {
  const { disabled = false } = props;

  const isRange = props.isRange === true;
  const value = !isRange ? props.value : undefined;
  const onChange = !isRange ? props.onChange : undefined;
  const startDate = isRange ? props.startDate : undefined;
  const endDate = isRange ? props.endDate : undefined;
  const onRangeChange = isRange ? props.onRangeChange : undefined;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | null>(value ?? null);
  const [internalStartDate, setInternalStartDate] = useState<Date | null>(startDate ?? null);
  const [internalEndDate, setInternalEndDate] = useState<Date | null>(endDate ?? null);
  const defaultSelectedDate = useMemo(() => new Date(), []);
  const getFormattedDate = useCallback((date: Date | null) => (date ? formatDate(date) : ''), []);
  const [singleInputText, setSingleInputText] = useState<string>(() => getFormattedDate(value ?? null));
  const [startInputText, setStartInputText] = useState<string>(() => getFormattedDate(startDate ?? null));
  const [endInputText, setEndInputText] = useState<string>(() => getFormattedDate(endDate ?? null));
  const primaryInputRef = useRef<HTMLInputElement>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    setInternalValue(value ?? null);
  }, [value]);

  useEffect(() => {
    setInternalStartDate(startDate ?? null);
  }, [startDate]);

  useEffect(() => {
    setInternalEndDate(endDate ?? null);
  }, [endDate]);

  // anchor rect management for positioning
  const updateAnchorRect = useCallback(() => {
    if (!primaryInputRef.current) return;
    const rect = primaryInputRef.current.getBoundingClientRect();
    setAnchorRect(rect);
  }, []);

  const handleInputClick = useCallback(() => {
    if (disabled) return;
    updateAnchorRect();
    setIsOpen(true);
  }, [disabled, updateAnchorRect]);

  // date change handlers
  const handleDateChange = useCallback(
    (date: Date) => {
      setInternalValue(date);
      setSingleInputText(formatDate(date));
      onChange?.(date);
    },
    [onChange],
  );

  const handleRangeChange = useCallback(
    (newStartDate: Date | null, newEndDate: Date | null) => {
      setInternalStartDate(newStartDate);
      setInternalEndDate(newEndDate);
      setStartInputText(newStartDate ? formatDate(newStartDate) : '');
      setEndInputText(newEndDate ? formatDate(newEndDate) : '');
      onRangeChange?.(newStartDate, newEndDate);
    },
    [onRangeChange],
  );

  // input commit handlers
  const commitSingleInput = useCallback(() => {
    const trimmed = singleInputText.trim();

    if (trimmed === '') {
      if (internalValue !== null) {
        setInternalValue(null);
        onChange?.(null);
      }
      return;
    }

    const parsed = parseDateInput(trimmed);

    if (!parsed) {
      setSingleInputText(getFormattedDate(internalValue));
      return;
    }

    setInternalValue(parsed);
    onChange?.(parsed);
  }, [singleInputText, internalValue, onChange, getFormattedDate]);

  const commitRangeInput = useCallback(() => {
    const startTrimmed = startInputText.trim();
    const endTrimmed = endInputText.trim();

    const parsedStart = startTrimmed === '' ? null : parseDateInput(startTrimmed);
    const parsedEnd = endTrimmed === '' ? null : parseDateInput(endTrimmed);

    if (startTrimmed !== '' && !parsedStart) {
      setStartInputText(getFormattedDate(internalStartDate));
      return;
    }

    if (endTrimmed !== '' && !parsedEnd) {
      setEndInputText(getFormattedDate(internalEndDate));
      return;
    }

    let nextStart = parsedStart;
    let nextEnd = parsedEnd;

    if (nextStart && nextEnd && nextStart > nextEnd) {
      const earlier = nextEnd;
      const later = nextStart;
      nextStart = earlier;
      nextEnd = later;
    }

    handleRangeChange(nextStart ?? null, nextEnd ?? null);
    setStartInputText(getFormattedDate(nextStart ?? null));
    setEndInputText(getFormattedDate(nextEnd ?? null));
  }, [startInputText, endInputText, internalStartDate, internalEndDate, handleRangeChange, getFormattedDate]);

  // keyboard handlers
  const handleSingleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        commitSingleInput();
        return;
      }

      if (event.key === 'ArrowDown' && event.altKey) {
        event.preventDefault();
        handleInputClick();
      }
    },
    [commitSingleInput, handleInputClick],
  );

  const handleRangeInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        commitRangeInput();
        return;
      }

      if (event.key === 'ArrowDown' && event.altKey) {
        event.preventDefault();
        handleInputClick();
      }
    },
    [commitRangeInput, handleInputClick],
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setAnchorRect(null);
  }, []);

  // reposition modal on scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    const handleReposition = () => {
      updateAnchorRect();
    };

    handleReposition();

    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [isOpen, updateAnchorRect]);

  return {
    isOpen,
    isRange,
    disabled,
    internalValue,
    internalStartDate,
    internalEndDate,
    defaultSelectedDate,
    singleInputText,
    startInputText,
    endInputText,
    anchorRect,

    placeholder: !isRange ? props.placeholder : undefined,
    startPlaceholder: isRange ? props.startPlaceholder : undefined,
    endPlaceholder: isRange ? props.endPlaceholder : undefined,

    primaryInputRef,

    setSingleInputText,
    setStartInputText,
    setEndInputText,

    handleInputClick,
    handleDateChange,
    handleRangeChange,
    handleClose,
    commitSingleInput,
    commitRangeInput,
    handleSingleInputKeyDown,
    handleRangeInputKeyDown,
  };
}

export type UseDatepickerStateReturn = ReturnType<typeof useDatepickerState>;
