import { Callout } from "@sopt-makers/ui";
import { Meta, StoryObj } from "@storybook/react";

interface CalloutProps {
  children: React.ReactNode;
  type: "danger" | "information" | "warning";
  hasIcon?: boolean;
  buttonLabel?: string;
  isButtonDisabled?: boolean;
  onClick?: () => void;
}

export default {
  title: "Components/Callout",
  component: Callout,
  tags: ["autodocs"],
  argTypes: {
    type: { control: 'radio', options: ['danger', 'information', 'warning'] },
  }
} as Meta<CalloutProps>;

// danger 콜아웃 스토리
export const Danger: StoryObj<CalloutProps> = {
  args: {
    children: "hasIcon 옵션으로 통해 아이콘을 표시할 수 있어요",
    type: "danger",
    hasIcon: false,
  },
};
// information 콜아웃 스토리
export const Information: StoryObj<CalloutProps> = {
  args: {
    children: "hasIcon 옵션으로 통해 아이콘을 표시할 수 있어요",
    type: "information",
    hasIcon: false,
  },
};
// warning 콜아웃 스토리
export const Warning: StoryObj<CalloutProps> = {
  args: {
    children: "hasIcon 옵션으로 통해 아이콘을 표시할 수 있어요",
    type: "warning",
    hasIcon: false,
  },
};

// warning+icon+button 콜아웃 스토리
export const CalloutWithBtn: StoryObj<CalloutProps> = {
  args: {
    children: (
      <>
        버튼이 있는 경우 hasIcon과 무관하게 아이콘이 항상 표시돼요. <br />
        isButtonDisabled 옵션으로 disabled state를 확인해보세요.
      </>
    ),
    type: "warning",
    hasIcon: true,
    buttonLabel: "hover, press 해보세요!",
    isButtonDisabled: false,
  },
};

// 여러줄 텍스트 콜아웃 스토리
export const CalloutWithLongText: StoryObj<CalloutProps> = {
  args: {
    children:
      "Facebook 정책이 변경되어, 앞으로 Facebook 로그인이 불가해요. 다른 계정으로 재설정 부탁드려요. Facebook 정책이 변경되어, 앞으로 Facebook 로그인이 불가해요. 다른 계정으로 재설정 부탁드려요.",
    type: "information",
    hasIcon: true,
    buttonLabel: "소셜 계정 재설정하기",
    isButtonDisabled: false,
  },
};
