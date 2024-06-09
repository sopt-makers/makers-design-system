import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "@sopt-makers/ui";

const meta = {
  title: "Components/Control/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
} as Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    size: "sm",
    label: "Label",
  },
};

export const LargeLabel: StoryObj = {
  args: {
    checked: false,
    size: "lg",
    label: "Label",
  },
};

export const SmallLabel: StoryObj = {
  args: {
    checked: false,
    size: "sm",
    label: "Label",
  },
};
