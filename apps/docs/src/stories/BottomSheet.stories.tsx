import {
  BottomSheetActionButton,
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetRoot,
  BottomSheetTrigger,
  Button,
} from '@sopt-makers/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/BottomSheet',
  tags: ['autodocs'],
};
export default meta;

export const BottomSheetUncontrolled: StoryObj = {
  name: 'BottomSheet - Uncontrolled',
  render: () => {
    return (
      <BottomSheetRoot>
        <BottomSheetTrigger>
          <Button size='sm'>열기</Button>
        </BottomSheetTrigger>
        <BottomSheetContent title='Title'>
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

const ControlledSample = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <BottomSheetRoot open={isOpen} onOpenChange={setOpen}>
      <BottomSheetTrigger>
        <Button size='sm'>{isOpen ? '닫기' : '열기'}</Button>
      </BottomSheetTrigger>
      <BottomSheetContent title='Title'>
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
  );
};

export const BottomSheetControlled: StoryObj = {
  name: 'BottomSheet - Controlled',
  render: ControlledSample,
};

export const BottomSheetBackIcon: StoryObj = {
  name: 'BottomSheet - Back Icon',
  render: () => (
    <BottomSheetRoot>
      <BottomSheetTrigger>
        <Button size='sm'>열기</Button>
      </BottomSheetTrigger>
      <BottomSheetContent title='Title' backIcon>
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
};

export const BottomSheetWithActionButton: StoryObj = {
  name: 'BottomSheet - Action Button',
  render: () => (
    <BottomSheetRoot>
      <BottomSheetTrigger>
        <Button size='sm'>열기</Button>
      </BottomSheetTrigger>
      <BottomSheetContent title='Title'>
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

export const BottomSheetBodyScrolled: StoryObj = {
  name: 'BottomSheet - Body Scrolled',
  render: () => (
    <BottomSheetRoot>
      <BottomSheetTrigger>
        <Button size='sm'>열기</Button>
      </BottomSheetTrigger>
      <BottomSheetContent title='Title'>
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
