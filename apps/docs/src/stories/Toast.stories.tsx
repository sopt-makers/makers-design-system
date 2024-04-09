import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { useToast, ToastProvider, type ToastOptionType } from "@sopt-makers/ui";
import { IconCopy } from "../../../../packages/icons/src";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "radio",
      options: ["success", "alert", "error", "custom"],
      description: "토스트의 아이콘을 지정합니다.",
      mapping: { custom: <IconCopy /> },
      table: {
        type: {
          summary: "success | alert | error | ReactElement",
        },
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

// export const Component = {
//   component: Toast,
//   args: {
//     icon: "success",
//     content: "프로젝트가 등록되었어요.",
//     action: { name: "보러가기", onClick: () => {} },
//     style: {
//       root: { position: "static", animation: "none", transform: "none" },
//     },
//   },
// };

const ToastSample = ({ option }: { option: ToastOptionType }) => {
  const { open } = useToast();
  return <button onClick={() => open(option)}>Open Toast</button>;
};

export const Default: StoryObj = {
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      content: "저는 토스트예요.",
    };
    return <ToastSample option={option} />;
  },
};

export const SuccessIcon: StoryObj = {
  name: "Icon - Success ",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "success",
      content: "프로젝트가 등록되었어요.",
    };
    return <ToastSample option={option} />;
  },
};

export const AlertIcon: StoryObj = {
  name: "Icon - Alert",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "alert",
      content: "이메일을 입력해주세요.",
    };
    return <ToastSample option={option} />;
  },
};

export const ErrorIcon: StoryObj = {
  name: "Icon - Error",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "error",
      content: "프로젝트 수정에 실패했어요.",
    };
    return <ToastSample option={option} />;
  },
};

export const CustomIcon: StoryObj = {
  name: "Icon - Custom",
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: <IconCopy />,
      content: "링크를 복사했어요.",
    };
    return <ToastSample option={option} />;
  },
};

export const ActionButton: StoryObj = {
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option: ToastOptionType = {
      icon: "success",
      content: "프로젝트가 등록되었어요.",
      action: { name: "보러가기", onClick: () => {} },
    };
    return <ToastSample option={option} />;
  },
};

export const TextOver: StoryObj = {
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

export const CloseToast: StoryObj = {
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { open, close } = useToast();
    const option: ToastOptionType = {
      icon: "success",
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
