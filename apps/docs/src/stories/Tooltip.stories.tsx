import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@sopt-makers/ui';
import { IconMessageAlert } from '@sopt-makers/icons';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
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
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content>툴팁 내용입니다.</Tooltip.Content>
    </Tooltip.Root>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <IconMessageAlert style={{ width: '15px', height: '15px' }} />
          <span>툴팁 내용입니다.</span>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  ),
};
