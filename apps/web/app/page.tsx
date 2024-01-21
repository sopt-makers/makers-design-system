"use client"

import { useContext } from 'react';
import { DialogContext } from 'ui/Dialog/DialogProvider';
import { DialogOptionType } from 'ui/Dialog/types';
import useDialog from '../../../packages/ui/Dialog/useDialog';
import styles from './page.module.css';

export default function Page(): JSX.Element {
    const { closeDialog, checkCheckBox } = useContext(DialogContext);

    const option: DialogOptionType = {
      title: '타이틀 자리입니다.',
      description: (
        <>
          안녕하세요! makers입니다. <br />
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

   

  return (
      <main className={styles.main}>
        <DialogButton option={option} />
      </main>
  );
}

function DialogButton({ option }: { option: DialogOptionType }) {
  const { open } = useDialog();

  return <button onClick={() => open(option)}>Open Dialog</button>;
}

