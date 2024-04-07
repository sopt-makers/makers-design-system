import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { useContext } from 'react';
import {
  Dialog,
  DialogProvider,
  DialogContext,
  type DialogOptionType,
  useDialog,
} from '@ui';

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

// 데스크탑

export const DesktopDefault: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
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
};

export const DesktopDanger: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      type: 'danger',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
};

export const DesktopSingle: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
};

export const DesktopSingleLabel: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: (e) => checkCheckBox(e.target.checked),
      },
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: 'Desktop Single - Label',
};

export const DesktopSingleLong: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
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
        onChange: (e) => checkCheckBox(e.target.checked),
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
  name: 'Desktop Single - Long',
};

// 모바일

export const MobileDefault: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      type: 'default',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
};

export const MobileDanger: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      type: 'danger',
      typeOptions: {
        cancelButtonText: '취소',
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
};

export const MobileSingle: StoryObj = {
  render: function Render() {
    const { closeDialog } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
};

export const MobileSingleLabel: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: <>안녕하세요! makers입니다.</>,
      checkBoxOptions: {
        label: '다시는 보지 않기',
        checked: false,
        size: 'small',
        color: 'white',
        onChange: (e) => checkCheckBox(e.target.checked),
      },
      type: 'single',
      typeOptions: {
        approveButtonText: '확인',
        buttonFunction: closeDialog,
      },
    };

    return <DialogButton option={option} />;
  },
  name: 'Mobile Single - Label',
};

export const MobileSingleLong: StoryObj = {
  render: function Render() {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
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
        onChange: (e) => checkCheckBox(e.target.checked),
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
  name: 'Mobile Single - Long',
};
