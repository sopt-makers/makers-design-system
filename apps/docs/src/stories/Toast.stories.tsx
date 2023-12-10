import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Button } from "ui";
import { useToast, ToastProvider, type ToastOptionType } from "ui";
import { IconArchive } from "../../../../packages/icons/src";

const meta: Meta = {
  title: "Components/Toast",
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

const ToastSample = ({ option }: { option: ToastOptionType }) => {
  const { open } = useToast();
  return <button onClick={() => open(option)}>Open Toast</button>;
};

export const Default: Story = {
  name: "default - success",
  render: () => {
    const option: ToastOptionType = { icon: "success", content: "기본 토스트" };
    return <ToastSample option={option} />;
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark", // 기본 배경을 'dark'로 설정
      values: [
        { name: "dark", value: "#2c2c2c" }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export const TextOver: Story = {
  name: "text over - alert",
  render: () => {
    const option: ToastOptionType = {
      icon: "alert",
      content:
        "두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. 두 줄을 넘었습니다. ",
    };
    return <ToastSample option={option} />;
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark", // 기본 배경을 'dark'로 설정
      values: [
        { name: "dark", value: "#2c2c2c" }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export const ActionButton: Story = {
  name: "action button - error",
  render: () => {
    const option: ToastOptionType = {
      icon: "error",
      content: "액션 버튼이 있는 토스트",
      action: { name: "보러가기", onClick: () => {} },
    };
    return <ToastSample option={option} />;
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark", // 기본 배경을 'dark'로 설정
      values: [
        { name: "dark", value: "#2c2c2c" }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export const CustomIcon: Story = {
  name: "custom icon",
  render: () => {
    const option: ToastOptionType = {
      icon: <IconArchive />,
      content: "커스텀 아이콘을 사용한 토스트",
      action: { name: "보러가기", onClick: () => {} },
    };
    return <ToastSample option={option} />;
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark", // 기본 배경을 'dark'로 설정
      values: [
        { name: "dark", value: "#2c2c2c" }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};
