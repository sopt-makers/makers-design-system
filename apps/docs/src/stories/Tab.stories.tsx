import { Tab, Tag } from '@sopt-makers/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '동일한 위계의 요소를 그룹화하여 화면이동 없이 빠르게 탐색합니다.',
      },
    },
  },
  args: {
    tabItems: ['Tab1', 'Tab2', 'Tab3'],
    selectedInitial: 'Tab1',
    translator: { Tab1: '탭1', Tab2: '탭2', Tab3: '탭3' },
  },
  argTypes: {
    tabItems: {
      description: '여러 Tab 항목을 전달합니다.',
      table: { type: { summary: 'T[]' } },
    },
    selectedInitial: {
      control: 'select',
      options: ['Tab1', 'Tab2', 'Tab3'],
      description: 'Tab의 초기 선택 값을 설정합니다.',
      table: { type: { summary: 'T (optional)' } },
    },
    translator: {
      description: 'Tab 항목의 텍스트를 원하는 컴포넌트로 변경합니다.',
      table: { type: { summary: 'Record<T, ReactNode>' } },
    },
    style: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
      description: 'Tab의 스타일을 설정합니다.',
      table: { type: { summary: 'primary | secondary' } },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Tab의 크기를 설정합니다.',
      table: { type: { summary: 'sm | md | lg' } },
    },
  },
} as Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: 'primary',
    size: 'sm',
  },
};

export const Secondary: StoryObj = {
  args: {
    style: 'secondary',
    size: 'lg',
  },
};

export const WithComponent: StoryObj = {
  args: {
    style: 'primary',
    size: 'md',
    translator: {
      Tab1: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          탭1
          <Tag>1</Tag>
        </div>
      ),
      Tab2: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          탭2
          <Tag>2</Tag>
        </div>
      ),
      Tab3: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          탭3
          <Tag>3</Tag>
        </div>
      ),
    },
  },
};
