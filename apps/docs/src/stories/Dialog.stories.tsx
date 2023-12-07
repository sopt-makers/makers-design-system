import { Meta, StoryObj } from '@storybook/react';

import Dialog from 'ui/Dialog';

import { useState } from 'react';


export default {
    title: 'Example/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
  } as Meta;
  
  
export const Desktop:StoryObj = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = () => {
      setIsOpen(true);
    };
    const onClose = () => {
      setIsOpen(false);
    };
    
    return (
        <>
          <button onClick={onOpen}>클릭하여 모달 열기</button>
          <Dialog isOpen={isOpen} onClose={onClose} device={'desktop'}>
              <Dialog.Title>타이틀 자리입니다</Dialog.Title>
              <Dialog.Description>
                안녕하세요! makers입니다.
                이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.

                공지 기능 추가
                솝트 내 공지를 한 곳에서 확인하세요.
                출석 기능 추가
                솝트 출석을 더 편하게 관리하세요.
                많은 관심 부탁드리며
                피드백은 언제나 환영입니다!
                피드백은 언제나 환영입니다!
                피드백은 언제나 환영입니다!
                </Dialog.Description>
              <Dialog.Footer align='right'>
              <button>버튼1</button>
              <button>버튼2</button>
              </Dialog.Footer>
          </Dialog>
        </>
      );
    },
  
    name: '다이얼로그 데스크탑',
  };
  

  export const Mobile:StoryObj = {
    render: function Render() {
      const [isOpen, setIsOpen] = useState<boolean>(false);
  
      const onOpen = () => {
        setIsOpen(true);
      };
      const onClose = () => {
        setIsOpen(false);
      };
      
      return (
          <>
            <button onClick={onOpen}>클릭하여 모달 열기</button>
            <Dialog isOpen={isOpen} onClose={onClose} device={'mobile'}>
                <Dialog.Title>타이틀 자리입니다</Dialog.Title>
                <Dialog.Description>
                  안녕하세요! makers입니다.
                  이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
  
                  공지 기능 추가
                  솝트 내 공지를 한 곳에서 확인하세요.
                  출석 기능 추가
                  솝트 출석을 더 편하게 관리하세요.
                  많은 관심 부탁드리며
                  피드백은 언제나 환영입니다!
                  피드백은 언제나 환영입니다!
                  피드백은 언제나 환영입니다!
                  </Dialog.Description>
                <Dialog.Footer align='center'>
                <button>버튼1</button>
                <button>버튼2</button>
                </Dialog.Footer>
            </Dialog>
          </>
        );
      },
    
      name: '다이얼로그 모바일',
    };
    