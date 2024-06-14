import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@sopt-makers/ui";

const meta = {
  title: "Components/Control/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'lg'] },
    label: { control: 'text' },
    color: { control: 'color' },
  }
} as Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    size: "sm",
  },
};

export const LargeRadio: StoryObj = {
  args: {
    checked: false,
    size: "lg",
    label: "Label",
  },
};

export const SmallRadio: StoryObj = {
  args: {
    checked: false,
    size: "sm",
    label: "Label",
  },
};
