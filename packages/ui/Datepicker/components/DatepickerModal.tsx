import { useState, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import * as S from '../style.css';
import type { DatepickerMode } from '../types';
import { DATEPICKER_MODE } from '../constants';
import { useDatepickerContext } from '../DatepickerContext';
import DatepickerDayView from './DatepickerDayView';
import DatepickerMonthView from './DatepickerMonthView';

function DatepickerModal() {
  const {
    isOpen,
    handleClose,
    isRange,
    internalValue,
    internalStartDate,
    internalEndDate,
    defaultSelectedDate,
    handleDateChange,
    handleRangeChange,
    anchorRect,
  } = useDatepickerContext();

  const selectedDate = internalValue || internalEndDate || internalStartDate || defaultSelectedDate;
  const [mode, setMode] = useState<DatepickerMode>(DATEPICKER_MODE.DAY);
  const [currentDate, setCurrentDate] = useState(selectedDate);
  const [tempStartDate, setTempStartDate] = useState<Date | null>(internalStartDate);
  const [tempEndDate, setTempEndDate] = useState<Date | null>(internalEndDate);
  const skipSyncRef = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skipSyncRef.current) {
      skipSyncRef.current = false;
      return;
    }
    setCurrentDate(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    setTempStartDate(internalStartDate || null);
  }, [internalStartDate]);

  useEffect(() => {
    setTempEndDate(internalEndDate || null);
  }, [internalEndDate]);

  const prevIsOpenRef = useRef<boolean>(isOpen);

  useEffect(() => {
    const wasOpen = prevIsOpenRef.current;
    if (isOpen && !wasOpen) {
      skipSyncRef.current = false;
      setMode(DATEPICKER_MODE.DAY);
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen, selectedDate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[role="dialog"]') && !target.closest('input')) {
        handleClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const moveToSelectedMonth = (targetDate: Date) => {
    if (currentDate.getFullYear() !== targetDate.getFullYear() || currentDate.getMonth() !== targetDate.getMonth()) {
      skipSyncRef.current = true;
      setCurrentDate(targetDate);
    }
  };

  const handleDateSelect = (date: Date) => {
    if (isRange) {
      if (!tempStartDate || tempEndDate) {
        // 시작 날짜 선택 또는 새로운 범위 시작
        setTempStartDate(date);
        setTempEndDate(null);
        moveToSelectedMonth(date);
      } else {
        // 종료 날짜 선택
        const newStartDate = tempStartDate <= date ? tempStartDate : date;
        const newEndDate = tempStartDate <= date ? date : tempStartDate;
        setTempStartDate(newStartDate);
        setTempEndDate(newEndDate);
        handleRangeChange(newStartDate, newEndDate);
        moveToSelectedMonth(date);
      }
    } else {
      skipSyncRef.current = true;
      setCurrentDate(date);
      handleDateChange(date);
    }
  };

  const handleMonthSelect = (month: number) => {
    const newDate = new Date(currentDate.getFullYear(), month, currentDate.getDate());
    setCurrentDate(newDate);
  };

  const handleYearSelect = (year: number) => {
    const newDate = new Date(year, currentDate.getMonth(), currentDate.getDate());
    setCurrentDate(newDate);
  };

  if (!isOpen || typeof document === 'undefined' || !anchorRect) return null;

  const dropdownStyle = {
    left: anchorRect.left,
    top: anchorRect.bottom + 8,
  } as CSSProperties;

  return createPortal(
    <div className={S.dropdown} ref={dropdownRef} role='dialog' style={dropdownStyle}>
      {mode === DATEPICKER_MODE.DAY && (
        <DatepickerDayView
          endDate={tempEndDate}
          isRange={isRange}
          onDateSelect={handleDateSelect}
          onModeChange={setMode}
          onMonthChange={setCurrentDate}
          selectedDate={currentDate}
          startDate={tempStartDate}
        />
      )}

      {mode === DATEPICKER_MODE.MONTH && (
        <DatepickerMonthView
          onModeChange={setMode}
          onMonthSelect={handleMonthSelect}
          onYearChange={handleYearSelect}
          selectedDate={currentDate}
        />
      )}
    </div>,
    document.body,
  );
}

export default DatepickerModal;
