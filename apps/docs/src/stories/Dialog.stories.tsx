import { Meta, StoryFn, StoryObj } from '@storybook/react';

import Dialog from 'ui/Dialog';

import { useContext } from 'react';
import DialogProvider, { DialogContext } from 'ui/Dialog/DialogProvider';
import { DialogOptionType } from 'ui/Dialog/types';
import useDialog from '../../../../packages/ui/Dialog/useDialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    ),
  ],
} as Meta;

const DialogButton = ({ option }: { option: DialogOptionType }) => {
  const { open } = useDialog();

  return <button onClick={() => open(option)}>Open Dialog</button>;
};

export const DesktopDefault: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'desktop',
      title: '타이틀 자리입니다.',
      description: '안녕하세요! makers입니다.',
      type: 'default',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 데스크탑 - default',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const DesktopDanger: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'desktop',
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: checkCheckBox,
      },
      type: 'danger',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 데스크탑 - danger',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const DesktopSingle: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'desktop',
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: checkCheckBox,
      },
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 데스크탑 - single',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const DesktopLong: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'desktop',
      title: '타이틀 자리입니다.',
      description: (
        <>
          안녕하세요! makers입니다. <br />
          이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
          <br />
          <br />
          공지 기능 추가
          <br />
          솝트 내 공지를 한 곳에서 확인하세요.
          <br />
          출석 기능 추가
          <br />
          솝트 출석을 더 편하게 관리하세요.
          <br />
          많은 관심 부탁드리며
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          많은 관심 부탁드리며
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          많은 관심 부탁드리며
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          많은 관심 부탁드리며
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
        </>
      ),
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: checkCheckBox,
      },
      type: 'default',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  args: {
    children: 'Default Button',
    size: 'md',
    theme: 'white',
    rounded: 'md',
  },
  name: '다이얼로그 데스크탑 - long',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const MobileDefault: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'mobile',
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      type: 'default',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        color: 'white',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 모바일 - default',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const MobileLong: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'mobile',
      title: '타이틀 자리입니다.',
      description: (
        <>
          안녕하세요! makers입니다. <br />
          이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
          <br />
          <br />
          공지 기능 추가
          <br />
          솝트 내 공지를 한 곳에서 확인하세요.
          <br />
          출석 기능 추가
          <br />
          솝트 출석을 더 편하게 관리하세요.
          <br />
          많은 관심 부탁드리며
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          공지 기능 추가
          <br />
          솝트 내 공지를 한 곳에서 확인하세요.
          <br />
          출석 기능 추가
          <br />
          솝트 출석을 더 편하게 관리하세요.
          <br />
          많은 관심 부탁드리며
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
          <br />
          피드백은 언제나 환영입니다!
        </>
      ),
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: checkCheckBox,
      },
      type: 'default',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 모바일 - long',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const MobileDanger: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'mobile',
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: checkCheckBox,
      },
      type: 'danger',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 모바일 - danger',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export const MobileSingle: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      device: 'mobile',
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: checkCheckBox,
      },
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: '다이얼로그 모바일 - single',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};
