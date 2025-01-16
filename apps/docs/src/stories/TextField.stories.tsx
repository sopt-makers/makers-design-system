import { ChangeEvent, ReactNode, useState, type InputHTMLAttributes } from 'react';
import { StoryObj } from '@storybook/react';
import { TextField } from '@sopt-makers/ui';
import { IconSend } from '@sopt-makers/icons';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string;
  topAddon?: ReactNode;
  bottomAddon?: ReactNode;
  rightAddon?: ReactNode;
  labelText?: string;
  descriptionText?: string;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  // isError -> validationFn 순서로 적용
  isError?: boolean;
  validationFn?: (input: string) => boolean;
}

const useTextField = (props: TextFieldProps) => {
  const [text, setText] = useState(props.value);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return <TextField {...props} value={text} onChange={handleTextChange} />;
};

/**
 * `TextField` 컴포넌트는 **[FieldBox](https://main--6571c88390d085ed7efcce84.chromatic.com/?path=/docs/components-fieldbox--docs)**를 부모 컴포넌트로 삼는 Input 컴포넌트입니다.
 */

export default {
  title: 'Components/Input/TextField',
  component: useTextField,
  tags: ['autodocs'],
  args: {
    style: { width: '335px' },
  },
  argTypes: {
    style: { control: false },
  },
};

export const Default: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  },
};

export const NoLabel: StoryObj<TextFieldProps> = {
  args: {
    labelText: '',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    isError: false,
    errorMessage: 'error message',
    required: false,
    readOnly: false,
    disabled: false,
  },
};

export const NoDescription: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: '',
    placeholder: 'Placeholder...',
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  },
};

export const NoRequired: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    isError: false,
    errorMessage: 'error message',
    required: false,
    readOnly: false,
    disabled: false,
  },
};

export const OnlyText: StoryObj<TextFieldProps> = {
  args: {
    labelText: '',
    descriptionText: '',
    placeholder: 'Placeholder...',
    isError: false,
    errorMessage: 'error message',
    required: false,
    readOnly: false,
    disabled: false,
  },
};

export const Readonly: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    value: 'text',
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: true,
    disabled: false,
  },
};

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    value: 'text',
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: true,
  },
};

export const Error: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    isError: true,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  },
};

export const HasRightAddon: StoryObj<TextFieldProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    rightAddon: <IconSend style={{ width: '24px', height: '24px' }} />,
    required: true,
    readOnly: false,
    disabled: false,
  },
};
