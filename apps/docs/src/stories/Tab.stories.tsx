import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "@sopt-makers/ui";

const meta = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    tabItems: ['Tab1', 'Tab2', 'Tab3'],
    selectedInitial: 'Tab1',
  },
  argTypes: {
    style: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    selectedInitial: { control: 'select', options: ['Tab1', 'Tab2', 'Tab3'] },
  }
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
