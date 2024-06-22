import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@sopt-makers/ui";

const meta = {
  title: "Components/Control/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'lg'] },
  }
} as Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    size: "lg",
  },
};

export const LargeToggle: StoryObj = {
  args: {
    checked: false,
    size: "lg",
  },
};

export const SmallToggle: StoryObj = {
  args: {
    checked: false,
    size: "sm",
  },
};
