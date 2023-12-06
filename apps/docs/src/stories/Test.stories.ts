import type { Meta, StoryObj } from '@storybook/react';

import { Test } from "ui";

const meta = {
  title: 'Example/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['black', 'red', 'blue'],
      control: { type: 'radio' },
    },
    size: {
      options: ['normal', 'big'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  args: {
    text: "Primary",
  },
}

export const Secondary: Story = {
  args: {
    text: "Secondary",
  },
}