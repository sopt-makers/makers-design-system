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
    style: { control: 'radio', options: ['Primary', 'Secondary'] },
    size: { control: 'radio', options: ['Small', 'Medium', 'Large'] },
    selectedInitial: { control: 'select', options: ['Tab1', 'Tab2', 'Tab3'] },
  }
} as Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: 'Primary',
    size: 'Small',
  },
};

export const Secondary: StoryObj = {
  args: {
    style: 'Secondary',
    size: 'Large',
  },
};
