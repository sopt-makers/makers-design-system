import clsx from 'clsx';
import { MONTHS, DATEPICKER_MODE } from '../constants';
import * as S from '../style.css';
import type { DatepickerMode } from '../types';
import DatepickerHeader from './DatepickerHeader';

interface DatepickerMonthViewProps {
  selectedDate: Date;
  onMonthSelect: (month: number) => void;
  onModeChange: (mode: DatepickerMode) => void;
  onYearChange: (year: number) => void;
}

function DatepickerMonthView({
  selectedDate,
  onMonthSelect,
  onModeChange,
  onYearChange,
}: DatepickerMonthViewProps): JSX.Element {
  const year = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth();
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const handleMonthClick = (monthIndex: number) => {
    onMonthSelect(monthIndex);
    onModeChange(DATEPICKER_MODE.DAY);
  };

  const handlePrevNavigation = () => {
    onYearChange(year - 1);
  };

  const handleNextNavigation = () => {
    onYearChange(year + 1);
  };

  return (
    <div>
      <DatepickerHeader onNextClick={handleNextNavigation} onPrevClick={handlePrevNavigation} title={`${year}년`} />

      <div className={clsx(S.grid, S.monthGrid)}>
        {MONTHS.map((month, index) => {
          const isSelected = index === currentMonth;
          const isToday = index === todayMonth && year === todayYear;

          return (
            <button
              className={clsx(S.cell, S.monthYearCell, {
                [S.cellSelected]: isSelected,
              })}
              key={month}
              onClick={() => {
                handleMonthClick(index);
              }}
              type='button'
            >
              {month}
              {isToday ? <span aria-hidden='true' className={S.todayIndicator} /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DatepickerMonthView;
