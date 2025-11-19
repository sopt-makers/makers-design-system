interface CalendarDate {
  year: number;
  month: number;
  day: number;
  isCurrentMonth: boolean;
}

export function generateCalendarDates(year: number, month: number): CalendarDate[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const dates: CalendarDate[] = [];

  // previous month dates
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    dates.push({
      year: prevYear,
      month: prevMonth,
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  // current month dates
  for (let day = 1; day <= daysInMonth; day++) {
    dates.push({
      year,
      month,
      day,
      isCurrentMonth: true,
    });
  }

  // next month dates
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  const totalCells = Math.ceil(dates.length / 7) * 7;
  const remainingCells = totalCells - dates.length;

  for (let day = 1; day <= remainingCells; day++) {
    dates.push({
      year: nextYear,
      month: nextMonth,
      day,
      isCurrentMonth: false,
    });
  }

  return dates;
}

export function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
}

export function parseDateInput(value: string): Date | null {
  const trimmed = value.trim();

  if (trimmed === '') {
    return null;
  }

  const normalized = trimmed.replace(/[-/]/g, '.');
  const parts = normalized
    .split('.')
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  if (parts.length !== 3) {
    return null;
  }

  const [yearString, monthString, dayString] = parts;
  const year = Number(yearString);
  const month = Number(monthString);
  const day = Number(dayString);

  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return null;
  }

  const date = new Date(year, month - 1, day);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}
