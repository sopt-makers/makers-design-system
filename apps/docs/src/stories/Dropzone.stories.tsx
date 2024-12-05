import { Dropzone, DropzoneProps } from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<DropzoneProps> = {
  title: 'Components/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
  args: {
    label: 'label',
    description: 'description',
    required: true,
  },
};

export default meta;

export const Default: StoryObj<DropzoneProps> = {
  args: {
    label: '이미지 등록',
    description: `[PC] 이미지는 1824*328 px 크기로 올려주세요.`,
    width: '500px',
  },
  render: (args) => <Dropzone {...args} />,
};
