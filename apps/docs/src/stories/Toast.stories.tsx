import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { useToast, ToastProvider, type ToastOptionType } from "ui";
import { IconArchive } from "../../../../packages/icons/src";
import ToastComponent from "ui/Toast/Toast";

const meta: Meta = {
  title: "Components/Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "radio",
      options: ["success", "alert", "error", "custom"],
      description: "토스트의 아이콘을 지정합니다.",
      mapping: { custom: <IconArchive /> },
      table: {
        defaultValue: { summary: "success" },
        type: { summary: "success | alert | error | ReactElement" },
      },
    },
    content: { description: "토스트의 내용을 작성합니다." },
    action: {
      description: "토스트의 액션을 지정합니다.",
      table: { type: { summary: "object" } },
    },
    style: {
      description: "토스트의 스타일을 사용자가 지정합니다.",
      table: { type: { summary: "object" } },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};
export default meta;

export const Component: StoryObj = {
  args: {
    icon: "success",
    content: "Default Toast",
    action: { name: "보러가기", onClick: () => {} },
    style: {
      root: { position: "static", animation: "none", transform: "none" },
    },
  },
};

const ToastSample = ({ option }: { option: ToastOptionType }) => {
  const { open } = useToast();
  return <button onClick={() => open(option)}>Open Toast</button>;
};

export const DefaultSuccess: StoryObj = {
  name: "Default - Success",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "success",
      content: "기본 토스트입니다.",
    };
    return <ToastSample option={option} />;
  },
};

export const TextOverAlert: StoryObj = {
  name: "Text Over - Alert",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "alert",
      content:
        "토스트 내용은 두 줄을 초과할 수 없습니다. 토스트 내용은 두 줄을 초과할 수 없습니다. 토스트 내용은 두 줄을 초과할 수 없습니다. ",
    };
    return <ToastSample option={option} />;
  },
};

export const ActionButtonError: StoryObj = {
  name: "Action Button - Error",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "error",
      content: "액션 버튼이 있는 토스트입니다.",
      action: { name: "보러가기", onClick: () => {} },
    };
    return <ToastSample option={option} />;
  },
};

export const ActionButtonCustomIcon: StoryObj = {
  name: "Action Button - Custom Icon",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: <IconArchive />,
      content: "커스텀 아이콘을 사용한 토스트입니다.",
      action: { name: "보러가기", onClick: () => {} },
    };
    return <ToastSample option={option} />;
  },
};

export const CloseToast: StoryObj = {
  name: "CloseToast",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const { open, close } = useToast();
    const option: ToastOptionType = {
      icon: "alert",
      content: "토스트를 원하는 타이밍에 닫을 수 있습니다.",
    };
    return (
      <>
        <button onClick={() => open(option)}>Open Toast</button>
        <button onClick={close}>Close Toast</button>
      </>
    );
  },
};
