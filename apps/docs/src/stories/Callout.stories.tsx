import { Callout } from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';
import type React from 'react';

type CalloutProps = React.ComponentProps<typeof Callout>;

export default {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '콜아웃의 내용을 작성합니다.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    type: {
      description: '콜아웃의 타입을 지정합니다. 타입에 따라 색상과 아이콘이 변경됩니다.',
      control: 'radio',
      options: ['danger', 'information', 'warning'],
      table: {
        type: { summary: 'danger | information | warning' },
      },
    },
    hasIcon: {
      description: '아이콘 표시 여부를 지정합니다. buttonLabel이 있으면 이 옵션과 무관하게 아이콘이 항상 표시됩니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    buttonLabel: {
      description: '버튼의 텍스트를 지정합니다. 지정하면 버튼이 표시됩니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    isButtonDisabled: {
      description: '버튼의 비활성화 상태를 지정합니다.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description: '버튼 클릭 시 실행할 함수를 지정합니다.',
      action: 'clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} as Meta<CalloutProps>;

const content = (
  <>
    hasIcon 옵션으로 통해 아이콘을 표시할 수 있으며 <br />
    buttonLabel과 onClick 옵션을 통해 버튼의 text와 클릭 핸들러를 설정할 수 있어요
  </>
);
// danger 콜아웃 스토리
export const Danger: StoryObj<CalloutProps> = {
  args: {
    children: content,
    type: 'danger',
    hasIcon: false,
  },
};
// information 콜아웃 스토리
export const Information: StoryObj<CalloutProps> = {
  args: {
    children: 'hasIcon 옵션으로 통해 아이콘을 표시할 수 있으며  ',
    type: 'information',
    hasIcon: false,
  },
};
// warning 콜아웃 스토리
export const Warning: StoryObj<CalloutProps> = {
  args: {
    children: 'buttonLabel과 onClick 옵션을 통해 버튼의 text와 클릭 핸들러를 설정할 수 있어요',
    type: 'warning',
    hasIcon: false,
  },
};
// danger+icon 콜아웃 스토리
export const MultipleIconCallouts: StoryObj<CalloutProps> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Callout {...(Danger.args as CalloutProps)} hasIcon />
      <Callout {...(Information.args as CalloutProps)} hasIcon />
      <Callout {...(Warning.args as CalloutProps)} hasIcon />
    </div>
  ),
};

export const MultipleButtonCallouts: StoryObj<CalloutProps> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Callout {...(Danger.args as CalloutProps)} buttonLabel='hover, press 해보세요!'>
        <>
          버튼이 있는 경우 hasIcon과 무관하게 아이콘이 항상 표시돼요. <br />
          isButtonDisabled 옵션으로 disabled state를 확인해보세요.
        </>
      </Callout>
      <Callout {...(Information.args as CalloutProps)} buttonLabel='hover, press 해보세요!'>
        <>
          버튼이 있는 경우 hasIcon과 무관하게 아이콘이 항상 표시돼요. <br />
          isButtonDisabled 옵션으로 disabled state를 확인해보세요.
        </>
      </Callout>
      <Callout {...(Warning.args as CalloutProps)} buttonLabel='hover, press 해보세요!'>
        <>
          버튼이 있는 경우 hasIcon과 무관하게 아이콘이 항상 표시돼요. <br />
          isButtonDisabled 옵션으로 disabled state를 확인해보세요.
        </>
      </Callout>
    </div>
  ),
};

// 여러줄 텍스트 콜아웃 스토리
export const CalloutWithLongText: StoryObj<CalloutProps> = {
  args: {
    children:
      'Facebook 정책이 변경되어, 앞으로 Facebook 로그인이 불가해요. 다른 계정으로 재설정 부탁드려요. Facebook 정책이 변경되어, 앞으로 Facebook 로그인이 불가해요. 다른 계정으로 재설정 부탁드려요.',
    type: 'information',
    hasIcon: true,
    buttonLabel: '소셜 계정 재설정하기',
    isButtonDisabled: false,
  },
};

export const CalloutWithShortText: StoryObj<CalloutProps> = {
  args: {
    children: '짧은 텍스트 ',
    type: 'information',
    hasIcon: true,
    buttonLabel: '짧은 라벨',
    isButtonDisabled: false,
  },
};
