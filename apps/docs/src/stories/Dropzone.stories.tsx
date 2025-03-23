import { Button, Dropzone, DropzoneProps, FieldBox } from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<DropzoneProps> = {
  title: 'Components/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
  args: {
    width: '300px',
  },
};

export default meta;

export const Default: StoryObj<DropzoneProps> = {
  render: (args) => <Dropzone {...args} />,
};

export const WithFieldbox: StoryObj<DropzoneProps> = {
  render: (args) => (
    <FieldBox
      topAddon={
        <FieldBox.TopAddon
          leftAddon={<FieldBox.Label label='이미지 등록' description='description' required />}
          rightAddon={
            <Button variant='outlined' size='sm' disabled>
              Button
            </Button>
          }
        />
      }
    >
      <Dropzone {...args} />
    </FieldBox>
  ),
};
