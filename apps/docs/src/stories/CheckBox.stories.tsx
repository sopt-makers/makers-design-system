import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CheckBox from 'ui/CheckBox';

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: function Render() {
    const [checked, onChange] = useState<boolean>(false);

    return <CheckBox checked={checked} size="small" onChange={(e) => onChange(e.target.checked)} />;
  },

  name: '체크박스 기본',
};

export const LargeLabel: StoryObj = {
  render: function Render() {
    const [checked, onChange] = useState<boolean>(false);

    return (
      <CheckBox
        checked={checked}
        size="large"
        label="Label"
        onChange={(e) => onChange(e.target.checked)}
      />
    );
  },

  name: '체크박스 설명 있는 큰 사이즈',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const SmallLabel: StoryObj = {
  render: function Render() {
    const [checked, onChange] = useState<boolean>(false);

    return (
      <CheckBox
        checked={checked}
        size="small"
        label="Label"
        onChange={(e) => onChange(e.target.checked)}
      />
    );
  },

  name: '체크박스 설명 있는 작은 사이즈',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};
