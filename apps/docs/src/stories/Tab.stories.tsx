import { Tab, Tag } from '@sopt-makers/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  args: {
    tabItems: ['Tab1', 'Tab2', 'Tab3'],
    selectedInitial: 'Tab1',
    translator: { Tab1: '탭1', Tab2: '탭2', Tab3: '탭3' },
  },
  argTypes: {
    style: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    selectedInitial: { control: 'select', options: ['Tab1', 'Tab2', 'Tab3'] },
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
