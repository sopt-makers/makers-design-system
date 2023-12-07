import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { useToast, ToastProvider, ToastOptionType } from "ui";

const meta: Meta = {
  component: Button,
  decorators: [
    (Story: StoryFn) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj;

const ToastSample = ({ option }: ToastOptionType) => {
  const { open } = useToast();
  return <button onClick={() => open(option)}>Open Toast</button>;
};

export const Default: Story = {
  render: () => {
    const option = { icon: "success", content: "기본 토스트" };
    return <ToastSample option={option} />;
  },
};

export const TextOver: Story = {
  render: () => {
    const option = {
      icon: "success",
      content:
        "두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. ",
    };
    return <ToastSample option={option} />;
  },
};

export const ActionButton: Story = {
  render: () => {
    const option = {
      icon: "alert",
      content: "액션 버튼이 있는 토스트",
      action: { name: "보러가기", onClick: () => {} },
    };
    return <ToastSample option={option} />;
  },
};
