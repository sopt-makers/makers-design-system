import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from 'ui/CheckBox';

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: "#0F1012" }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
} as Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    size: 'small',
  },
};

export const LargeLabel: StoryObj = {
  args: {
    checked: false,
    size: 'large',
    label: 'Label'
  },
};

export const SmallLabel: StoryObj = {
  args: {
    checked: false,
    size: 'small',
    label: 'Label'
  },
};
