import clsx from 'clsx';
import { useMemo } from 'react';
import { generateCalendarDates, isSameDate } from '../utils';
import { DAYS_OF_WEEK, DATEPICKER_MODE } from '../constants';
import type { DatepickerMode } from '../types';
import * as S from '../style.css';
import DatepickerHeader from './DatepickerHeader';

interface DatepickerDayViewProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onModeChange: (mode: DatepickerMode) => void;
  onMonthChange: (date: Date) => void;

  // range props
  isRange?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
}

function DatepickerDayView({
  selectedDate,
  onDateSelect,
  onModeChange,
  onMonthChange,
  isRange = false,
  startDate,
  endDate,
}: DatepickerDayViewProps) {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const today = useMemo(() => new Date(), []);
  const dates = useMemo(() => generateCalendarDates(year, month), [year, month]);

  const rangeCalculations = useMemo(() => {
    const hasEndDate = Boolean(endDate);
    const hasSameRangeDay = startDate && endDate ? isSameDate(startDate, endDate) : false;
    const hasCompleteRange = Boolean(startDate && endDate && !hasSameRangeDay);

    return {
      hasEndDate,
      hasSameRangeDay,
      hasCompleteRange,
    };
  }, [startDate, endDate]);

  const handlePrevMonth = () => {
    const prevMonth = new Date(year, month - 1, selectedDate.getDate());
    onMonthChange(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(year, month + 1, selectedDate.getDate());
    onMonthChange(nextMonth);
  };

  const monthName = `${month + 1}월`;

  return (
    <div>
      <DatepickerHeader
        onNextClick={handleNextMonth}
        onPrevClick={handlePrevMonth}
        onTitleClick={() => {
          onModeChange(DATEPICKER_MODE.MONTH);
        }}
        showTitleIcon
        title={`${year}년 ${monthName}`}
      />

      <div className={S.dayHeaders}>
        {DAYS_OF_WEEK.map((day) => (
          <div className={S.dayHeader} key={day}>
            {day}
          </div>
        ))}
      </div>

      <div className={clsx(S.grid, S.dayGrid)}>
        {dates.map((date, index) => {
          const currentDate = new Date(date.year, date.month, date.day);
          const isSelected = isSameDate(currentDate, selectedDate);
          const isToday = isSameDate(currentDate, today);

          const { hasEndDate, hasSameRangeDay, hasCompleteRange } = rangeCalculations;

          const isCurrentStart = startDate ? isSameDate(currentDate, startDate) : false;
          const isCurrentEnd = endDate ? isSameDate(currentDate, endDate) : false;

          const isRangeStart = isRange && hasCompleteRange && isCurrentStart;
          const isRangeEnd = isRange && hasCompleteRange && isCurrentEnd;
          const isRangeStartOnly = isRange && isCurrentStart && (!hasEndDate || hasSameRangeDay);
          const isInRange =
            startDate && endDate && isRange && hasCompleteRange && currentDate > startDate && currentDate < endDate;

          return (
            <button
              className={clsx(S.cell, {
                [S.cellOtherMonth]: !date.isCurrentMonth,
                [S.cellSelected]: !isRange && isSelected,
                [S.cellRangeStart]: isRangeStart,
                [S.cellRangeStartOnly]: isRangeStartOnly,
                [S.cellRangeEnd]: isRangeEnd,
                [S.cellInRange]: isInRange,
              })}
              key={index}
              onClick={() => {
                onDateSelect(currentDate);
              }}
              type='button'
            >
              {date.day}
              {isToday ? <span aria-hidden='true' className={S.todayIndicator} /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DatepickerDayView;
