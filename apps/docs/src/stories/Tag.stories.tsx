import { Meta, StoryObj } from '@storybook/react';

import { Tag, TagProps } from '@sopt-makers/ui';

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    shape: { control: 'radio', options: ['rect', 'pill'] },
    variant: { control: 'radio', options: ['default', 'primary', 'secondary'] },
    type: { control: 'radio', options: ['solid', 'line'] },
  },
} as Meta<TagProps>;

// 기본 태그 스토리
export const Default: StoryObj<TagProps> = {
  args: {
    children: 'Default Tag',
    size: 'sm',
    shape: 'rect',
    variant: 'default',
    type: 'solid',
  },
};
