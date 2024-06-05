import type { Meta, StoryObj } from '@storybook/react';
import  Radio  from '../../../../packages/ui/Control/Radio'

const meta = {
    title: 'Components/Control/Radio',
    component: Radio,
    tags: ['autodocs'],
  } as Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
      checked: true,
      size: 'small',
    },
  };

  export const LargeRadio: StoryObj = {
    args: {
      checked: false,
      size: 'large',
      label: 'Label'
    },
  };
  
  export const SmallRadio: StoryObj = {
    args: {
      checked: false,
      size: 'small',
      label: 'Label'
    },
  };