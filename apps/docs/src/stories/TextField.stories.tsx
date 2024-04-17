import { ChangeEvent, useState, type InputHTMLAttributes } from 'react';
import { StoryObj } from '@storybook/react';
import { TextField } from '@sopt-makers/ui';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  labelText?: string;
  descriptionText?: string;
  value: string;
  errorMessage?: string;
  isError?: boolean;
}

const useTextField = (props: TextFieldProps) => {
  const [text, setText] = useState(props.value);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return <TextField<string> {...props} value={text} onChange={handleTextChange} />
}

export default {
  title: 'Components/Input/TextField',
  component: useTextField,
  tags: ['autodocs'],
  args: {
    style: { width: '335px' }
  },
  argTypes: {
    style: { control: false }
  }
}

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
    required: true,
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