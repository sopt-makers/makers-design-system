import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';

interface ButtonOwnProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red';
  rounded?: 'md' | 'lg';
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
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' }
      ],
    },
  },
};

// 커스텀 버튼 스토리
export const Another: StoryObj<ButtonStoryProps> = {
  args: {
    children: 'Another Button',
    size: 'lg',
    theme: 'red',
    rounded: 'lg',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: '#2c2c2c' }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' }
      ],
    },
  },
};
