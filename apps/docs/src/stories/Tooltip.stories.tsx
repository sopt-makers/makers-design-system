import type { Meta, StoryObj } from '@storybook/react';
import { Button, Tag, Tooltip } from '@sopt-makers/ui';
import { IconAlertCircle, IconChevronRight } from '@sopt-makers/icons';
import type { ReactNode, CSSProperties } from 'react';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';

const Placement = [
  'top',
  'bottom',
  'left',
  'right',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
] as const;

interface TooltipStoryArgs {
  placement?: (typeof Placement)[number];
  isOpen?: boolean;
  size?: 'small' | 'large';
  title?: ReactNode;
  bodyText?: ReactNode;
  closeButton?: boolean;
  secondaryButton?: ReactNode;
  style?: CSSProperties;
}

const meta: Meta<TooltipStoryArgs> = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: '툴팁 크기를 설정합니다.',
      table: {
        type: {
          summary: 'small | large',
        },
      },
    },
    placement: {
      control: 'select',
      options: Placement,
      description: '툴팁 위치를 설정합니다.',
      table: {
        type: {
          summary:
            'top | bottom | left | right | topLeft | topRight | bottomLeft | bottomRight | leftTop | leftBottom | rightTop | rightBottom',
        },
      },
    },
    title: {
      control: 'text',
      description: '툴팁 제목을 설정합니다.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    bodyText: {
      control: 'text',
      description: '툴팁 내용을 설정합니다.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    closeButton: {
      control: 'boolean',
      description: '툴팁 닫기 버튼을 설정합니다. <br />`large` 크기일 때만 표시됩니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    secondaryButton: {
      control: false,
      description: '툴팁 보조 버튼을 설정합니다.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    isOpen: {
      control: 'boolean',
      description: '툴팁 열림 여부를 설정합니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<TooltipStoryArgs>;

export const Default: Story = {
  render: (args) => (
    <Tooltip.Root placement={args.placement} isOpen={args.isOpen}>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content
        title={args.title}
        bodyText={args.bodyText}
        size={args.size}
        closeButton={args.closeButton}
        secondaryButton={args.secondaryButton}
      >
        {!args.title && !args.bodyText && '툴팁 내용입니다.'}
      </Tooltip.Content>
    </Tooltip.Root>
  ),
  args: {
    title: '',
    bodyText: '',
    size: 'small',
    closeButton: false,
    secondaryButton: undefined,
  },
};

export const SmallWithTag: Story = {
  render: (args) => (
    <Tooltip.Root placement={args.placement} isOpen={args.isOpen}>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content bodyText={args.bodyText} style={{ width: '272px' }} />
    </Tooltip.Root>
  ),
  args: {
    bodyText: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tag style={{ backgroundColor: colors.orangeAlpha200, color: colors.secondary, whiteSpace: 'nowrap' }}>New</Tag>
        Small Tooltip은 본문을 두 줄 이상 작성하면 요런 모습이에요.
      </div>
    ),
    size: 'small',
  },
};

export const SmallWithPrefixIcon: Story = {
  render: (args) => (
    <Tooltip.Root placement={args.placement} isOpen={args.isOpen}>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content
        prefixIcon={<IconAlertCircle style={{ width: '16px', height: '16px' }} />}
        bodyText={args.bodyText}
        style={{ width: 'fit-content' }}
      />
    </Tooltip.Root>
  ),
  args: {
    bodyText: 'min-width은 160px로 설정되어있어요.',
    size: 'small',
  },
};

export const LargeWithPrefixIcon: Story = {
  render: (args) => (
    <Tooltip.Root placement={args.placement} isOpen={args.isOpen}>
      <Tooltip.Trigger>
        호버해보세요
        <IconAlertCircle style={{ width: '15px', height: '15px' }} />
      </Tooltip.Trigger>
      <Tooltip.Content
        size='large'
        prefixIcon={<IconAlertCircle style={{ width: '15px', height: '15px' }} />}
        title={args.title}
        bodyText={args.bodyText}
        closeButton={args.closeButton}
        secondaryButton={args.secondaryButton}
        style={{ width: '272px' }}
      />
    </Tooltip.Root>
  ),
  args: {
    title: '제목 텍스트입니다.',
    bodyText: '이곳에 본문 텍스트를 작성해주세요.',
    size: 'large',
    closeButton: true,
    secondaryButton: (
      <button
        style={{
          display: 'flex',
          width: 'fit-content',
          padding: '0',
          alignItems: 'center',
          border: 'none',
          backgroundColor: 'transparent',
          color: colors.gray30,
          ...fontsObject.LABEL_4_12_SB,
        }}
      >
        Text Button
        <IconChevronRight style={{ width: '16px', height: '16px' }} />
      </button>
    ),
  },
};

export const LargeWithTitleAndBody: Story = {
  render: (args) => (
    <Tooltip.Root placement={args.placement} isOpen={args.isOpen}>
      <Tooltip.Trigger>호버해보세요</Tooltip.Trigger>
      <Tooltip.Content
        title={args.title}
        bodyText={args.bodyText}
        size={args.size}
        closeButton={args.closeButton}
        secondaryButton={args.secondaryButton}
        style={{ width: '272px' }}
      />
    </Tooltip.Root>
  ),
  args: {
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        제목 텍스트입니다.<Tag style={{ backgroundColor: colors.orangeAlpha200, color: colors.secondary }}>New</Tag>
      </div>
    ),
    bodyText: '이곳에 본문 텍스트를 작성해주세요.',
    size: 'large',
    closeButton: false,
    secondaryButton: (
      <Button theme='black' style={{ width: '100%' }}>
        Button
      </Button>
    ),
  },
};
