import { Meta, StoryFn, StoryObj } from '@storybook/react';

import Dialog from 'ui/Dialog';

import { ChangeEvent, useContext, useMemo, useState } from 'react';
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
  
  
// export const DesktopDefault:StoryObj = {
//   render: function Render() {
//     const [isOpen, setIsOpen] = useState<boolean>(false);

//     const onOpen = () => {
//       setIsOpen(true);
//     };
//     const onClose = () => {
//       setIsOpen(false);
//     };
    
//     return (
//         <>
//           <button onClick={onOpen}>클릭하여 모달 열기</button>
//           <Dialog isOpen={isOpen} onClose={onClose} device={'desktop'}>
//               <Dialog.Title>타이틀 자리입니다</Dialog.Title>
//               <Dialog.Description>
//                 안녕하세요! makers입니다.
//                 이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.

//                 공지 기능 추가
//                 솝트 내 공지를 한 곳에서 확인하세요.
//                 출석 기능 추가
//                 솝트 출석을 더 편하게 관리하세요.
//                 많은 관심 부탁드리며
//                 피드백은 언제나 환영입니다!
//                 피드백은 언제나 환영입니다!
//                 피드백은 언제나 환영입니다!
//                 </Dialog.Description>
//               <Dialog.Footer align='right'>
//               <Button size="md" rounded="md" theme="black">버튼1</Button>
//               <Button size="md" rounded="md" theme="white">버튼2</Button>
//               </Dialog.Footer>
//           </Dialog>
//         </>
//       );
//     },
//     name: '다이얼로그 데스크탑 - default',
//     parameters: {
//       layout: 'centered',
//       backgrounds: {
//         default: 'dark', // 기본 배경을 'dark'로 설정
//         values: [
//           { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
//           { name: 'white', value: '#ffffff' }
//         ],
//       },
//     },
//   };

//   export const DesktopDanger:StoryObj = {
//     render: function Render() {
//       const [isOpen, setIsOpen] = useState<boolean>(false);
  
//       const onOpen = () => {
//         setIsOpen(true);
//       };
//       const onClose = () => {
//         setIsOpen(false);
//       };
      
//       return (
//           <>
//             <button onClick={onOpen}>클릭하여 모달 열기</button>
//             <Dialog isOpen={isOpen} onClose={onClose} device={'desktop'}>
//                 <Dialog.Title>타이틀 자리입니다</Dialog.Title>
//                 <Dialog.Description>
//                   안녕하세요! makers입니다.
//                   이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
  
//                   공지 기능 추가
//                   솝트 내 공지를 한 곳에서 확인하세요.
//                   출석 기능 추가
//                   솝트 출석을 더 편하게 관리하세요.
//                   많은 관심 부탁드리며
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   </Dialog.Description>
//                 <Dialog.Footer align='right'>
//                 <Button size="md" rounded="md" theme="black">버튼1</Button>
//                 <Button size="md" rounded="md" theme="red">버튼2</Button>
//                 </Dialog.Footer>
//             </Dialog>
//           </>
//         );
//       },
//       name: '다이얼로그 데스크탑 - danger',
//       parameters: {
//         layout: 'centered',
//         backgrounds: {
//           default: 'dark', // 기본 배경을 'dark'로 설정
//           values: [
//             { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
//             { name: 'white', value: '#ffffff' }
//           ],
//         },
//       },
//     };

//     export const DesktopSingle:StoryObj = {
//       render: function Render() {
//         const [isOpen, setIsOpen] = useState<boolean>(false);
    
//         const onOpen = () => {
//           setIsOpen(true);
//         };
//         const onClose = () => {
//           setIsOpen(false);
//         };
        
//         return (
//             <>
//               <button onClick={onOpen}>클릭하여 모달 열기</button>
//               <Dialog isOpen={isOpen} onClose={onClose} device={'desktop'}>
//                   <Dialog.Title>타이틀 자리입니다</Dialog.Title>
//                   <Dialog.Description>
//                     안녕하세요! makers입니다.
//                     이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
    
//                     공지 기능 추가
//                     솝트 내 공지를 한 곳에서 확인하세요.
//                     출석 기능 추가
//                     솝트 출석을 더 편하게 관리하세요.
//                     많은 관심 부탁드리며
//                     피드백은 언제나 환영입니다!
//                     피드백은 언제나 환영입니다!
//                     피드백은 언제나 환영입니다!
//                     </Dialog.Description>
//                   <Dialog.Footer align='right'>
//                   <Button size="md" rounded="md" theme="white">버튼</Button>
//                   </Dialog.Footer>
//               </Dialog>
//             </>
//           );
//         },
//         name: '다이얼로그 데스크탑 - single',
//         parameters: {
//           layout: 'centered',
//           backgrounds: {
//             default: 'dark', // 기본 배경을 'dark'로 설정
//             values: [
//               { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
//               { name: 'white', value: '#ffffff' }
//             ],
//           },
//         },
//       };

//   export const DesktopLong:StoryObj = {
//     render: function Render() {
//       const [isOpen, setIsOpen] = useState<boolean>(false);
  
//       const onOpen = () => {
//         setIsOpen(true);
//       };
//       const onClose = () => {
//         setIsOpen(false);
//       };
      
//       return (
//           <>
//             <button onClick={onOpen}>클릭하여 모달 열기</button>
//             <Dialog isOpen={isOpen} onClose={onClose} device={'desktop'}>
//                 <Dialog.Title>타이틀 자리입니다</Dialog.Title>
//                 <Dialog.Description>
//                   안녕하세요! makers입니다.
//                   이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
  
//                   공지 기능 추가
//                   솝트 내 공지를 한 곳에서 확인하세요.
//                   출석 기능 추가
//                   솝트 출석을 더 편하게 관리하세요.
//                   많은 관심 부탁드리며
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   </Dialog.Description>
//                 <Dialog.Footer align='right'>
//                 <Button size="md" rounded="md" theme="white">버튼</Button>
//                 </Dialog.Footer>
//             </Dialog>
//           </>
//         );
//       },
//       args: {
//         children: 'Default Button',
//         size: 'md',
//         theme: 'white',
//         rounded: 'md',
//       },
//       name: '다이얼로그 데스크탑 - long',
//       parameters: {
//         layout: 'centered',
//         backgrounds: {
//           default: 'dark', // 기본 배경을 'dark'로 설정
//           values: [
//             { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
//             { name: 'white', value: '#ffffff' }
//           ],
//         },
//       },
//     };
  

//   export const MobileDefault:StoryObj = {
//     render: function Render() {
//       const [isOpen, setIsOpen] = useState<boolean>(false);
  
//       const onOpen = () => {
//         setIsOpen(true);
//       };
//       const onClose = () => {
//         setIsOpen(false);
//       };
      
//       return (
//           <>
//             <button onClick={onOpen}>클릭하여 모달 열기</button>
//             <Dialog isOpen={isOpen} onClose={onClose} device={'mobile'}>
//                 <Dialog.Title>타이틀 자리입니다</Dialog.Title>
//                 <Dialog.Description>
//                   안녕하세요! makers입니다.
//                   이번 업데이트에서는 아래와 같은 내용들이 반영되었습니다.
  
//                   공지 기능 추가
//                   솝트 내 공지를 한 곳에서 확인하세요.
//                   출석 기능 추가
//                   솝트 출석을 더 편하게 관리하세요.
//                   많은 관심 부탁드리며
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   피드백은 언제나 환영입니다!
//                   </Dialog.Description>
//                 <Dialog.Footer align='center'>
//                   <div style={{ display: 'flex', gap: '9px' }}>
//                     <Button size="md" rounded="md" theme="black" style={{ width: '137px' }}>버튼1</Button>
//                     <Button size="md" rounded="md" theme="white" style={{ width: '137px' }}>버튼2</Button>
//                   </div>
//                 </Dialog.Footer>
//             </Dialog>
//           </>
//         );
//       },
//       name: '다이얼로그 모바일 - default',
//       parameters: {
//         layout: 'centered',
//         backgrounds: {
//           default: 'dark', // 기본 배경을 'dark'로 설정
//           values: [
//             { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
//             { name: 'white', value: '#ffffff' }
//           ],
//         },
//       },
//     };

const DialogButton=({option}:{option:DialogOptionType})=>{
  const {open}=useDialog();
  
  return<button onClick={()=>open(option)}>Open Dialog</button>
}

export const DesktopDefault:StoryObj = {
  render: function Render() {
    const [checked, onChange] = useState<boolean>(false);
    const { closeDialog } = useContext(DialogContext);

    const handleCheckBox=(e: ChangeEvent<HTMLInputElement>)  => {
      onChange(e.target.checked)
    }

    const option: DialogOptionType = useMemo(() => {
        return {
        device:"desktop",
        title: "타이틀 자리입니다.",
        description: '안녕하세요! makers입니다.',
        checkBoxOptions:{label:"다시는 보지 않기", checked:checked, size:"small", onChange:handleCheckBox},
        type:"default",
        typeOptions:{
          cancelButtonText: "취소",
          approveButtonText: "확인",
          buttonFunction: closeDialog
        }
      }
    },[checked])

  
    return <DialogButton option={option}/>
    },
    name: '다이얼로그 데스크탑 - default',
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'dark', // 기본 배경을 'dark'로 설정
        values: [
          { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
          { name: 'white', value: '#ffffff' }
        ],
      },
    },
  };
