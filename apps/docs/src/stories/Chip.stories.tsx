import { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@sopt-makers/ui';
import { IconCheck, IconAlarmClock } from '@sopt-makers/icons';

interface ChipOwnProps {
  iconColor?: string;
  size?: 'sm' | 'md';
  active?: boolean;
  LeftIcon?: React.ComponentType;
  RightIcon?: React.ComponentType;
}

type ChipStoryProps = ChipOwnProps & { children: string };

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} as Meta<ChipStoryProps>;

// 기본 chip 스토리
export const Default: StoryObj<ChipStoryProps> = {
  args: {
    children: 'Default Chip',
    size: 'sm',
    active: false,
  },
};

// active chip 스토리
export const Active: StoryObj<ChipStoryProps> = {
  args: {
    children: 'Active Chip',
    size: 'md',
    active: true,
  },
};

// left icon (with color) chip 스토리
export const LeftIcon: StoryObj<ChipStoryProps> = {
  args: {
    children: 'Chip with a LeftIcon',
    size: 'sm',
    active: false,
    LeftIcon: IconCheck,
  },
};

// colored right icon chip 스토리
export const RightIconWithColor: StoryObj<ChipStoryProps> = {
  args: {
    children: 'Chip with a colored RightIcon',
    iconColor: '#cd24ea',
    size: 'sm',
    active: false,
    RightIcon: IconAlarmClock,
  },
};
