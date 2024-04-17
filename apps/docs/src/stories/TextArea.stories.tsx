import { ChangeEvent, useState, type TextareaHTMLAttributes } from 'react';
import { StoryObj } from '@storybook/react';
import { TextArea } from '@sopt-makers/ui';
import { fn } from '@storybook/test';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  labelText?: string;
  descriptionText?: string;
  errorMessage?: string;
  value: string;
  maxLength: number;
  height?: string;
  isError?: boolean;
  onSubmit: () => void;
  fixedHeight?: number;
}

const useTextArea = (props: TextAreaProps) => {
  const [text, setText] = useState(props.value);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  return <TextArea {...props} value={text} onChange={handleTextChange} />
}

export default {
  title: 'Components/Input/TextArea',
  component: useTextArea,
  tags: ['autodocs'],
  args: {
    value: '',
    style: { width: '335px' },
    onSubmit: fn(),
  },
  argTypes: {
    value: { control: false },
    style: { control: false },
    onSubmit: { action: 'onSubmit' }
  }
}

export const Default: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  }
};

export const FixedHeight: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    value: 'text\ntext\ntext',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
    fixedHeight: 100,
  }
};

export const NoLabel: StoryObj<TextAreaProps> = {
  args: {
    labelText: '',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  }
};

export const NoDescription: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: '',
    placeholder: 'Placeholder...',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  }
};

export const NoRequired: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: false,
    readOnly: false,
    disabled: false,
  }
};

export const OnlyText: StoryObj<TextAreaProps> = {
  args: {
    labelText: '',
    descriptionText: '',
    placeholder: 'Placeholder...',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: false,
    readOnly: false,
    disabled: false,
  }
};

export const Readonly: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    value: 'text',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: true,
    disabled: false,
  }
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    value: 'text',
    maxLength: 300,
    isError: false,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: true,
  }
};

export const Error: StoryObj<TextAreaProps> = {
  args: {
    labelText: 'Label',
    descriptionText: 'Description',
    placeholder: 'Placeholder...',
    maxLength: 300,
    isError: true,
    errorMessage: 'error message',
    required: true,
    readOnly: false,
    disabled: false,
  }
};