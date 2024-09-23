import { CheckBox } from 'Control';
import Button from '../Button';
import Dialog from './Dialog';
import { buttonSize, checkBoxWapper, descriptionMarginBottom } from './style.css';
import type { DialogValueProps } from './types';

export default function DialogComponent({
  isOpen,
  onClose,
  title,
  description,
  checkBoxOptions,
  type,
  typeOptions,
}: DialogValueProps) {
  const onApprove = () => {
    typeOptions?.buttonFunction && typeOptions.buttonFunction();
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Title>{title}</Dialog.Title>
      <div className={descriptionMarginBottom[`${checkBoxOptions !== undefined}`]}>
        <Dialog.Description isCheck={checkBoxOptions !== undefined}>{description}</Dialog.Description>
      </div>
      {checkBoxOptions ? (
        <div className={checkBoxWapper}>
          <CheckBox
            checked={checkBoxOptions.checked}
            color={checkBoxOptions.color}
            label={checkBoxOptions.label}
            onChange={checkBoxOptions.onChange}
            size={checkBoxOptions.size ?? 'sm'}
          />
        </div>
      ) : null}
      {type && typeOptions ? (
        <Dialog.Footer align='default'>
          {type === 'default' && (
            <>
              <Button className={buttonSize} onClick={onClose} rounded='md' size='md' theme='black'>
                {typeOptions.cancelButtonText}
              </Button>
              <Button className={buttonSize} onClick={onApprove} rounded='md' size='md' theme='white'>
                {typeOptions.approveButtonText}
              </Button>
            </>
          )}
          {type === 'danger' && (
            <>
              <Button className={buttonSize} onClick={onClose} rounded='md' size='md' theme='black'>
                {typeOptions.cancelButtonText}
              </Button>
              <Button className={buttonSize} onClick={onApprove} rounded='md' size='md' theme='red'>
                {typeOptions.approveButtonText}
              </Button>
            </>
          )}
          {type === 'single' && (
            <Button className={buttonSize} onClick={onApprove} rounded='md' size='md' theme='white'>
              {typeOptions.approveButtonText}
            </Button>
          )}
        </Dialog.Footer>
      ) : null}
    </Dialog>
  );
}
