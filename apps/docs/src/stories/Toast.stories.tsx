import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { useToast, ToastProvider, type ToastOptionType } from '@sopt-makers/ui';
import { IconCopy } from '@sopt-makers/icons';
import { CSSProperties } from 'react';
import { fn } from '@storybook/test';

const COPY_ICON = <IconCopy />;

interface ToastArgs {
  icon?: 'success' | 'alert' | 'error' | 'custom' | undefined;
  content: string;
  action?: {
    name: string;
    onClick: () => void;
  };
  style?: CSSProperties;
}

const meta: Meta<ToastArgs> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'radio',
      options: ['success', 'alert', 'error', 'custom'],
      defaultValue: undefined,
      description:
        '토스트의 아이콘으로 사용할 아이콘을 지정합니다.<br />기본 값으로 `undefined`값을 가집니다. <br /><br />custom의 경우 사용자가 직접 아이콘을 지정합니다.',
      mapping: { default: undefined, custom: COPY_ICON },
      table: { type: { summary: 'success | alert | error | custom' } },
    },
    content: { description: '토스트의 내용을 작성합니다.', control: 'text', table: { type: { summary: 'string' } } },
    action: {
      description:
        '토스트의 액션을 지정합니다.<br />`name`에는 액션의 이름을, `onClick`에는 액션의 클릭 이벤트를 지정합니다.',
      table: { type: { summary: 'object' } },
      control: 'object',
    },
    style: {
      description: '토스트의 스타일을 지정합니다.',
      control: 'object',
      table: { type: { summary: 'CSSProperties' } },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <ToastProvider>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '80px' }}>
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
};
export default meta;

const ToastSample = ({ option }: { option: ToastOptionType }) => {
  const { open } = useToast();
  return <button onClick={() => open(option)}>Open Toast</button>;
};

export const Default: StoryObj<ToastArgs> = {
  args: {
    icon: undefined,
    content: '토스트 메시지입니다.',
    action: {
      name: '',
      onClick: () => {},
    },
  },
  render: (args) => {
    const { open } = useToast();

    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };

    return <button onClick={() => open(option)}>Open Toast</button>;
  },
};

export const SuccessIcon: StoryObj<ToastArgs> = {
  name: 'Success',
  args: {
    content: '프로젝트가 등록되었어요.',
    action: {
      name: '',
      onClick: () => {},
    },
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: 'success',
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const AlertIcon: StoryObj<ToastArgs> = {
  name: 'Alert',
  args: {
    content: '이메일을 입력해주세요.',
    action: {
      name: '',
      onClick: () => {},
    },
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: 'alert',
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const ErrorIcon: StoryObj<ToastArgs> = {
  name: 'Error',
  args: {
    content: '프로젝트 수정에 실패했어요.',
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: 'error',
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const CustomIcon: StoryObj<ToastArgs> = {
  name: 'Custom',
  args: {
    content: '링크를 복사했어요.',
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: COPY_ICON,
      content: args.content,
      action: args.action?.name ? args.action : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const ActionButton: StoryObj<ToastArgs> = {
  args: {
    icon: 'success',
    content: '프로젝트가 등록되었어요.',
    action: {
      name: '보러가기',
      onClick: fn(),
    },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const TextOver: StoryObj<ToastArgs> = {
  args: {
    icon: 'alert',
    content:
      '토스트 내용은 두 줄을 초과할 수 없습니다. 토스트 내용은 두 줄을 초과할 수 없습니다. 토스트 내용은 두 줄을 초과할 수 없습니다. ',
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const CloseToast: StoryObj<ToastArgs> = {
  args: {
    icon: 'success',
    content: '토스트를 원하는 타이밍에 닫을 수 있습니다.',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { open, close } = useToast();
    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.action?.name ? args.action : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return (
      <>
        <button onClick={() => open(option)}>Open Toast</button>
        <button onClick={close}>Close Toast</button>
      </>
    );
  },
};
