import {
  BottomSheetActionButton,
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetRoot,
  BottomSheetTrigger,
} from '@sopt-makers/ui';
import type { Meta, StoryObj } from '@storybook/react';

type SampleProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  title?: string;
  backIcon?: boolean;
};

const meta: Meta<SampleProps> = {
  title: 'Components/BottomSheet',
  tags: ['autodocs'],
  parameters: {
    docs: {
      codePanel: true,
    },
  },
  args: {
    defaultOpen: false,
    title: 'Title',
    backIcon: false,
  },
  argTypes: {
    open: { type: 'boolean', control: { type: 'boolean' }, description: '`boolean`' },
    onOpenChange: {
      type: 'function',
      control: { type: 'function' },
      description: '`(open:boolean) => void`',
    },
    defaultOpen: {
      type: 'boolean',
      control: { type: 'boolean' },
      description: '`boolean`',
    },
    title: { type: 'string', control: { type: 'string' }, description: '`string`' },
    backIcon: { type: 'boolean', control: { type: 'boolean' }, description: '`boolean`' },
  },
};
export default meta;

export const BottomSheetDefault: StoryObj<SampleProps> = {
  name: 'BottomSheet - Default',
  render: (args) => {
    return (
      <BottomSheetRoot open={args.open} onOpenChange={args.onOpenChange} defaultOpen={args.defaultOpen}>
        <BottomSheetTrigger>
          <button>열기</button>
        </BottomSheetTrigger>
        <BottomSheetContent title={args.title} backIcon={args.backIcon}>
          <BottomSheetBody>
            <p style={{ color: 'white' }}>
              커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의
              모든 커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을
              숙지하여야 합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티
              이용규칙을 위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이
              삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.
            </p>
          </BottomSheetBody>
        </BottomSheetContent>
      </BottomSheetRoot>
    );
  },
};

export const BottomSheetBackIcon: StoryObj<SampleProps> = {
  name: 'BottomSheet - Back Icon',
  render: (args) => (
    <BottomSheetRoot open={args.open} onOpenChange={args.onOpenChange} defaultOpen={args.defaultOpen}>
      <BottomSheetTrigger>
        <button>열기</button>
      </BottomSheetTrigger>
      <BottomSheetContent title={args.title} backIcon={args.backIcon}>
        <BottomSheetBody>
          <p style={{ color: 'white' }}>
            커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의 모든
            커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을 숙지하여야
            합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티 이용규칙을
            위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이 삭제되고 서비스
            이용이 일정 기간 제한될 수 있습니다.
          </p>
        </BottomSheetBody>
      </BottomSheetContent>
    </BottomSheetRoot>
  ),
  args: {
    backIcon: true,
  },
};

export const BottomSheetWithActionButton: StoryObj<SampleProps> = {
  name: 'BottomSheet - Action Button',
  render: (args) => (
    <BottomSheetRoot open={args.open} onOpenChange={args.onOpenChange} defaultOpen={args.defaultOpen}>
      <BottomSheetTrigger>
        <button>열기</button>
      </BottomSheetTrigger>
      <BottomSheetContent title={args.title} backIcon={args.backIcon}>
        <BottomSheetBody>
          <p style={{ color: 'white' }}>
            커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의 모든
            커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을 숙지하여야
            합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티 이용규칙을
            위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이 삭제되고 서비스
            이용이 일정 기간 제한될 수 있습니다.
          </p>
        </BottomSheetBody>
        <BottomSheetActionButton>Button</BottomSheetActionButton>
      </BottomSheetContent>
    </BottomSheetRoot>
  ),
};

export const BottomSheetBodyScrolled: StoryObj<SampleProps> = {
  name: 'BottomSheet - Body Scrolled',
  render: (args) => (
    <BottomSheetRoot open={args.open} onOpenChange={args.onOpenChange} defaultOpen={args.defaultOpen}>
      <BottomSheetTrigger>
        <button>열기</button>
      </BottomSheetTrigger>
      <BottomSheetContent title={args.title} backIcon={args.backIcon}>
        <BottomSheetBody>
          <p style={{ color: 'white' }}>
            커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의 모든
            커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을 숙지하여야
            합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티 이용규칙을
            위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이 삭제되고 서비스
            이용이 일정 기간 제한될 수 있습니다. 커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기
            위해 제정되었습니다. 서비스 내의 모든 커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용
            전 반드시 모든 내용을 숙지하여야 합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스
            이용약관 및 커뮤니티 이용규칙을 위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는
            경우, 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 커뮤니티 이용규칙은 누구나 기분 좋게
            참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의 모든 커뮤니티는 커뮤니티 이용규칙에 의해
            운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을 숙지하여야 합니다. 방송통신심의위원회의 정보통신에
            관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티 이용규칙을 위반하거나, 사회 통념 및 관련 법령을
            기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.
            커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의 모든
            커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을 숙지하여야
            합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티 이용규칙을
            위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이 삭제되고 서비스
            이용이 일정 기간 제한될 수 있습니다.
          </p>
        </BottomSheetBody>
        <BottomSheetActionButton>Button</BottomSheetActionButton>
      </BottomSheetContent>
    </BottomSheetRoot>
  ),
};
