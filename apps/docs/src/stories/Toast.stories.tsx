import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { useToast, ToastProvider, type ToastOptionType } from '@sopt-makers/ui';
import { IconCopy } from '@sopt-makers/icons';
import { CSSProperties } from 'react';
import { fn } from '@storybook/test';

const COPY_ICON = <IconCopy />;

interface ToastStoryArgs {
  icon?: 'success' | 'alert' | 'error' | 'custom' | undefined;
  content: string;

  /* NOTE: 스토리북 전용 인터페이스 (action 속성을 개별 속성으로 평면화) */
  actionName?: string;
  onActionClick?: () => void;

  style?: CSSProperties;
}

const meta: Meta<ToastStoryArgs> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['default', 'success', 'alert', 'error', 'custom'],
      defaultValue: undefined,
      description:
        '토스트의 아이콘으로 사용할 아이콘을 지정합니다.<br />기본(default) 값으로 `undefined`값을 가집니다. <br /><br />custom의 경우 사용자가 직접 아이콘을 지정합니다.',
      mapping: { default: undefined, custom: COPY_ICON },
      table: { type: { summary: 'success | alert | error | custom' } },
    },
    content: { description: '토스트의 내용을 작성합니다.', control: 'text', table: { type: { summary: 'string' } } },
    actionName: {
      description: '토스트 액션 버튼의 텍스트를 지정합니다.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onActionClick: {
      description: '토스트 액션 버튼 클릭 시 실행할 함수를 지정합니다.',
      action: 'action clicked',
      table: { type: { summary: '() => void' } },
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

export const Default: StoryObj<ToastStoryArgs> = {
  args: {
    icon: undefined,
    content: '토스트 메시지입니다.',
    actionName: '',
    onActionClick: fn(),
    style: undefined,
  },
  render: (args) => {
    const { open } = useToast();

    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };

    return <button onClick={() => open(option)}>Open Toast</button>;
  },
};

export const SuccessIcon: StoryObj<ToastStoryArgs> = {
  name: 'Success',
  args: {
    content: '프로젝트가 등록되었어요.',
    actionName: '',
    onActionClick: fn(),
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: 'success',
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const AlertIcon: StoryObj<ToastStoryArgs> = {
  name: 'Alert',
  args: {
    content: '이메일을 입력해주세요.',
    actionName: '',
    onActionClick: fn(),
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: 'alert',
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const ErrorIcon: StoryObj<ToastStoryArgs> = {
  name: 'Error',
  args: {
    content: '프로젝트 수정에 실패했어요.',
    actionName: '',
    onActionClick: fn(),
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: 'error',
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const CustomIcon: StoryObj<ToastStoryArgs> = {
  name: 'Custom',
  args: {
    content: '링크를 복사했어요.',
    actionName: '',
    onActionClick: fn(),
  },
  parameters: {
    controls: { exclude: ['icon'] },
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: COPY_ICON,
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const ActionButton: StoryObj<ToastStoryArgs> = {
  args: {
    icon: 'success',
    content: '프로젝트가 등록되었어요.',
    actionName: '보러가기',
    onActionClick: fn(),
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const TextOver: StoryObj<ToastStoryArgs> = {
  args: {
    icon: 'alert',
    content:
      '토스트 내용은 두 줄을 초과할 수 없습니다. 토스트 내용은 두 줄을 초과할 수 없습니다. 토스트 내용은 두 줄을 초과할 수 없습니다. ',
    actionName: '',
    onActionClick: fn(),
  },
  render: (args) => {
    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
      style: args.style ? { root: args.style } : undefined,
    };
    return <ToastSample option={option} />;
  },
};

export const CloseToast: StoryObj<ToastStoryArgs> = {
  args: {
    icon: 'success',
    content: '토스트를 원하는 타이밍에 닫을 수 있습니다.',
    actionName: '',
    onActionClick: fn(),
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { open, close } = useToast();
    const option: ToastOptionType = {
      icon: args.icon === 'custom' ? COPY_ICON : args.icon,
      content: args.content,
      action: args.actionName
        ? {
            name: args.actionName,
            onClick: args.onActionClick || fn(),
          }
        : undefined,
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
