import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@sopt-makers/ui';
import { IconPlus, IconChevronRight } from '@sopt-makers/icons';

interface ButtonOwnProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red';
  rounded?: 'md' | 'lg';
  variant?: 'fill' | 'outlined';
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
    theme: { control: 'radio', options: ['white', 'black', 'blue', 'red'] },
    rounded: { control: 'radio', options: ['md', 'lg'] },
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
    theme: 'white',
    rounded: 'md',
    disabled: false,
  },
};

// outlined 버튼 스토리
export const Outlined: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Outlined Button',
    size: 'md',
    theme: 'white',
    rounded: 'md',
    variant: 'outlined',
    disabled: false,
  },
};

// 커스텀 버튼 스토리
export const LeftIcon: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'LeftIcon Button',
    size: 'sm',
    theme: 'red',
    rounded: 'lg',
    disabled: false,
    LeftIcon: IconPlus,
  },
};

export const RightIcon: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'RightIcon Button',
    size: 'lg',
    theme: 'blue',
    rounded: 'lg',
    disabled: false,
    RightIcon: IconChevronRight,
  },
};
