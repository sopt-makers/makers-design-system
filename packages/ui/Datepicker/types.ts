import type { DATEPICKER_MODE } from './constants';

export type DatepickerMode = (typeof DATEPICKER_MODE)[keyof typeof DATEPICKER_MODE];

interface CommonDatepickerProps {
  disabled?: boolean;
  className?: string;
}

export interface SingleDatepickerProps extends CommonDatepickerProps {
  isRange?: false;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
}

export interface RangeDatepickerProps extends CommonDatepickerProps {
  isRange: true;
  startDate?: Date | null;
  endDate?: Date | null;
  onRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
  startPlaceholder?: string;
  endPlaceholder?: string;
}

export type DatepickerProps = SingleDatepickerProps | RangeDatepickerProps;
