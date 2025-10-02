import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';

const meta: Meta = {
  title: 'Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
  width: '24px',
  height: '24px',
  margin: '8px',
};

export const All: Story = {
  render: () => (
    <div className="icons-group">
      <div key="ArrowSolidUp">
          <Icons.ArrowSolidUp style={style} />
          <p>arrow-solid-up</p>
        </div>
      <div key="ArrowSolidLeft">
          <Icons.ArrowSolidLeft style={style} />
          <p>arrow-solid-left</p>
        </div>
      <div key="ArrowSolidDown">
          <Icons.ArrowSolidDown style={style} />
          <p>arrow-solid-down</p>
        </div>
    </div>
  ),
};
