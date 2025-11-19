import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Datepicker, type DatepickerProps } from '@sopt-makers/ui';

const meta = {
  title: 'Components/DatePicker',
  component: Datepicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '컴포넌트를 비활성화합니다.',
    },
    className: {
      control: 'text',
      description: '컴포넌트에 적용할 커스텀 className입니다.',
    },
  },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook의 date control은 timestamp를 반환하므로 Date 객체로 변환하는 헬퍼 함수
const toDateOrNull = (value: Date | null | undefined | number): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value === 'number') return new Date(value);
  return null;
};

/**
 * 단일 날짜 선택
 */
const SingleDateExample = (args: DatepickerProps): JSX.Element => {
  const [value, setValue] = useState<Date | null>(!args.isRange && 'value' in args ? toDateOrNull(args.value) : null);

  useEffect(() => {
    if (!args.isRange && 'value' in args) {
      setValue(toDateOrNull(args.value));
    }
  }, [args]);

  const handleChange = (date: Date | null) => {
    setValue(date);
    if (!args.isRange && 'onChange' in args) {
      args.onChange?.(date);
    }
  };

  return (
    <Datepicker
      value={value}
      onChange={handleChange}
      disabled={args.disabled}
      className={args.className}
      placeholder={!args.isRange && 'placeholder' in args ? args.placeholder : undefined}
    />
  );
};

/**
 * 기본 Datepicker
 *
 * 단일 날짜를 선택할 수 있는 기본 Datepicker입니다.
 * - Day 뷰와 Month 뷰를 전환할 수 있습니다.
 * - 입력 필드에 직접 날짜를 입력할 수 있습니다. (YYYY.MM.DD 형식)
 */
export const Default: Story = {
  render: (args) => <SingleDateExample {...args} />,
  args: {
    disabled: false,
    placeholder: 'YYYY.MM.DD',
    onChange: fn(),
  },
};

/**
 * 기본 값이 있는 Datepicker
 *
 * 초기 값을 설정한 Datepicker입니다.
 */
export const WithDefaultValue: Story = {
  render: (args) => <SingleDateExample {...args} />,
  args: {
    disabled: false,
    value: new Date(2000, 3, 29),
    onChange: fn(),
  },
};

/**
 * 비활성화 상태
 *
 * 비활성화된 Datepicker입니다.
 */
export const Disabled: Story = {
  render: (args) => <SingleDateExample {...args} />,
  args: {
    disabled: true,
    value: new Date(2025, 0, 1),
    onChange: fn(),
  },
};

/**
 * 날짜 범위 선택
 */
const DateRangeExample = (args: DatepickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>('startDate' in args ? toDateOrNull(args.startDate) : null);
  const [endDate, setEndDate] = useState<Date | null>('endDate' in args ? toDateOrNull(args.endDate) : null);

  useEffect(() => {
    if ('startDate' in args) setStartDate(toDateOrNull(args.startDate));
    if ('endDate' in args) setEndDate(toDateOrNull(args.endDate));
  }, [args]);

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    if ('onRangeChange' in args) args.onRangeChange?.(start, end);
  };

  return (
    <Datepicker
      isRange={true}
      startDate={startDate}
      endDate={endDate}
      onRangeChange={handleRangeChange}
      disabled={args.disabled}
      className={args.className}
      startPlaceholder={'startPlaceholder' in args ? args.startPlaceholder : undefined}
      endPlaceholder={'endPlaceholder' in args ? args.endPlaceholder : undefined}
    />
  );
};

/**
 * 기본 Date Range
 *
 * 날짜 범위를 선택할 수 있는 Datepicker입니다.
 * - 시작 날짜를 먼저 선택하고, 종료 날짜를 선택합니다.
 * - 시작 날짜와 종료 날짜가 자동으로 정렬됩니다.
 * - 범위 내의 날짜는 시각적으로 표시됩니다.
 */
export const DateRange: Story = {
  render: (args) => <DateRangeExample {...args} />,
  args: {
    isRange: true,
    onRangeChange: fn(),
  },
};

/**
 * 기본값이 있는 Date Range
 *
 * 초기 범위가 설정된 Date Range Picker입니다.
 */
export const DateRangeWithDefaultValue: Story = {
  render: () => {
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    return <DateRangeExample isRange={true} startDate={today} endDate={nextWeek} onRangeChange={fn()} />;
  },
};

/**
 * 비활성화된 Date Range
 *
 * 비활성화된 Date Range Picker입니다.
 */
export const DisabledDateRange: Story = {
  render: () => {
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    return (
      <DateRangeExample
        isRange={true}
        startDate={today}
        endDate={nextWeek}
        disabled={true}
        startPlaceholder='시작 날짜'
        endPlaceholder='종료 날짜'
        onRangeChange={fn()}
      />
    );
  },
};
