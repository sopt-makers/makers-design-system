import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';

interface ButtonOwnProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red';
  rounded?: 'md' | 'lg';
  disabled?: boolean;
  LeftIcon?: React.ComponentType;
  RightIcon?: React.ComponentType;
}

type ButtonStoryProps = ButtonOwnProps & { children: string };

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
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

// 커스텀 버튼 스토리
export const Another: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Another Button',
    size: 'lg',
    theme: 'red',
    rounded: 'lg',
    disabled: false,
  },
};

export const Disabled: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Disabled Button',
    size: 'md',
    theme: 'blue',
    rounded: 'lg',
    disabled: true,
  },
};