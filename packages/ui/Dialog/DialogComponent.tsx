import React from 'react';
import Dialog from '.';
import Button from '../Button';
import CheckBox from '../CheckBox';
import { defaultButtonSize } from './style.css';
import { DialogOptionType } from './types';

export const DialogComponent = ({ onClose, ...dialogOption }: DialogOptionType) => {
  return (
    <Dialog isOpen={dialogOption !== null} onClose={onClose} device={'desktop'}>
      <Dialog.Title>{dialogOption.title}</Dialog.Title>
      <Dialog.Description>{dialogOption.description}</Dialog.Description>

      {dialogOption.checkBoxOptions && (
        <CheckBox
          label={dialogOption.checkBoxOptions.label}
          size={dialogOption.checkBoxOptions.size}
          checked={dialogOption.checkBoxOptions.checked}
          onChange={dialogOption.checkBoxOptions.onChange}
        />
      )}
      <Dialog.Footer align={dialogOption.device === 'mobile' ? 'center' : 'right'}>
        {dialogOption.type === 'default' && (
          <>
            <Button
              size="md"
              rounded="md"
              theme="black"
              onClick={close}
              className={defaultButtonSize[dialogOption.device]}
            >
              {dialogOption.typeOptions?.cancelButtonText}
            </Button>
            <Button
              size="md"
              rounded="md"
              theme="white"
              onClick={() => dialogOption.typeOptions?.buttonFunction}
              className={defaultButtonSize[dialogOption.device]}
            >
              {dialogOption.typeOptions?.approveButtonText}
            </Button>
          </>
        )}
        {dialogOption.type === 'danger' && (
          <>
            <Button
              size="md"
              rounded="md"
              theme="black"
              onClick={close}
              className={defaultButtonSize[dialogOption.device]}
            >
              {dialogOption.typeOptions?.cancelButtonText}
            </Button>
            <Button
              size="md"
              rounded="md"
              theme="red"
              onClick={() => dialogOption.typeOptions?.buttonFunction}
              className={defaultButtonSize[dialogOption.device]}
            >
              {dialogOption.typeOptions?.approveButtonText}
            </Button>
          </>
        )}
        {dialogOption.type === 'single' && (
          <Button
            size="md"
            rounded="md"
            theme="white"
            onClick={() => dialogOption.typeOptions?.buttonFunction}
            className={defaultButtonSize[`${dialogOption.device}${dialogOption.type}`]}
          >
            {dialogOption.typeOptions?.approveButtonText}
          </Button>
        )}
      </Dialog.Footer>
    </Dialog>
  );
};
