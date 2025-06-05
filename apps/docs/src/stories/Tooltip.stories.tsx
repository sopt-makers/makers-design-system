import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@sopt-makers/ui';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    triggerContent: {
      control: 'text',
      description: '툴팁을 트리거하는 텍스트입니다.',
    },
    children: {
      control: 'text',
      description: '툴팁 내용입니다.',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerContent: 'Tooltip',
    children: 'Default Content',
  },
};
