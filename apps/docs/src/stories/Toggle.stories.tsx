import type { Meta, StoryObj } from '@storybook/react';
import  Toggle  from '../../../../packages/ui/Control/Toggle'

const meta = {
    title: 'Components/Control/Toggle',
    component: Toggle,
    tags: ['autodocs'],
  } as Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
      checked: true,
      size: 'large',
    },
  };

  export const LargeToggle: StoryObj = {
    args: {
      checked: false,
      size: 'large',
    },
  };
  
  export const SmallToggle: StoryObj = {
    args: {
      checked: false,
      size: 'small',
    },
  };