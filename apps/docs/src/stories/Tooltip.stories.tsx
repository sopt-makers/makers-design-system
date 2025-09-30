import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@sopt-makers/ui';
import { IconAlertCircle } from '@sopt-makers/icons';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '툴팁의 열림 상태를 지정합니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      defaultValue: false,
    },
    style: {
      description: '툴팁의 스타일을 지정합니다.',
      table: {
        type: {
          summary: 'object',
        },
      },
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
  render: (args) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content>툴팁 내용입니다.</Tooltip.Content>
    </Tooltip.Root>
  ),
  args: {},
};

export const CustomContent: Story = {
  render: (args) => (
    <Tooltip.Root {...args}>
      <Tooltip.Trigger>
        호버해보세요
        <IconAlertCircle style={{ width: '15px', height: '15px' }} />
      </Tooltip.Trigger>
      <Tooltip.Content>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <IconAlertCircle style={{ width: '15px', height: '15px' }} />
          <span>툴팁 내용입니다.</span>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  ),
  args: {},
};
