import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@sopt-makers/ui';
import { IconPlus, IconChevronRight } from '@sopt-makers/icons';

interface ButtonOwnProps {
  size?: 'sm' | 'md' | 'lg';
  intent?: 'primary' | 'secondary' | 'success' | 'danger';
  shape?: 'rect' | 'pill';
  variant?: 'fill' | 'outlined' | 'text';
  disabled?: boolean;
  LeftIcon?: React.ComponentType;
  RightIcon?: React.ComponentType;
}

type ButtonStoryProps = ButtonOwnProps & { children: string };

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    intent: { control: 'radio', options: ['primary', 'secondary', 'success', 'danger'] },
    shape: { control: 'radio', options: ['rect', 'pill'] },
    variant: { control: 'radio', options: ['fill', 'outlined'] },
    LeftIcon: { control: false },
    RightIcon: { control: false },
  },
} as Meta<ButtonStoryProps>;

// 기본 버튼 스토리
export const Default: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Default Button',
    size: 'md',
    intent: 'primary',
    shape: 'rect',
    disabled: false,
  },
};

// outlined 버튼 스토리
export const Outlined: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Outlined Button',
    size: 'md',
    intent: 'primary',
    shape: 'rect',
    variant: 'outlined',
    disabled: false,
  },
};

// 커스텀 버튼 스토리
export const LeftIcon: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'LeftIcon Button',
    size: 'sm',
    intent: 'danger',
    shape: 'pill',
    disabled: false,
    LeftIcon: IconPlus,
  },
};

export const RightIcon: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'RightIcon Button',
    size: 'lg',
    intent: 'success',
    shape: 'pill',
    disabled: false,
    RightIcon: IconChevronRight,
  },
};

// text 버튼 스토리
export const Text: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Text Button',
    variant: 'text',
    disabled: false,
    RightIcon: IconChevronRight,
  },
};

// floating 버튼 스토리
