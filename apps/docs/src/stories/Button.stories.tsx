import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';
import { IconCheck } from '../../../../packages/icons/src';

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
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#0F1012' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' },
      ],
    },
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

// 커스텀 버튼 스토리
export const Another: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Another Button',
    size: 'lg',
    theme: 'red',
    rounded: 'lg',
    disabled: false,
    LeftIcon: IconCheck,
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
