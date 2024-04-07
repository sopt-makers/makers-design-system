import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '../../../../packages/ui';

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
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
