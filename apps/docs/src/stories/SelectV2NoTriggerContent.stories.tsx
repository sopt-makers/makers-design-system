import type { Meta, StoryObj } from '@storybook/react';
import { SelectV2 } from '@sopt-makers/ui';
import { IconSend, IconDotsVertical } from '@sopt-makers/icons';
import { fn } from '@storybook/test';

const selectOptions = [
  {
    label: '수정',
    value: '',
    description: '수정',
    icon: <IconSend />,
  },
  {
    label: '삭제',
    value: 'option1',
    description: '삭제',
    icon: <IconSend />,
  },
];

const userOptions = [
  {
    label: '수정',
    value: 1,
    description: '수정',
  },
  {
    label: '삭제',
    value: 2,
    description: '삭제',
  },
];

const style = { width: 24, height: 24, color: 'white' };

const meta: Meta<typeof SelectV2.Root> = {
  title: 'Components/Input/SelectV2/NoTriggerContent',
  component: SelectV2.Root,
  tags: ['autodocs'],
  args: {
    visibleOptions: 3,
    onChange: fn(),
  },
  argTypes: {
    defaultValue: { control: 'select', options: ['', 'option1', 'option2', 'option3', 'option4', 'option5'] },
    visibleOptions: { control: 'number' },
  },
};

export default meta;

export const Text: StoryObj<typeof SelectV2.Root> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <div>
          <IconDotsVertical style={style} />
        </div>
      </SelectV2.Trigger>
      <SelectV2.Menu>
        {selectOptions.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
      </SelectV2.Menu>
    </SelectV2.Root>
  ),
  args: {
    type: 'text',
    visibleOptions: 3,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'textDesc', 'textIcon'] },
  },
};

export const TextDesc: StoryObj<typeof SelectV2.Root> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <div>
          <IconDotsVertical style={style} />
        </div>
      </SelectV2.Trigger>
      <SelectV2.Menu>
        <IconSend />
        {selectOptions.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
      </SelectV2.Menu>
    </SelectV2.Root>
  ),
  args: {
    type: 'textDesc',
    visibleOptions: 3,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'textDesc', 'textIcon'] },
  },
};

export const TextIcon: StoryObj<typeof SelectV2.Root> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <div>
          <IconDotsVertical style={style} />
        </div>
      </SelectV2.Trigger>
      <SelectV2.Menu>
        {selectOptions.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
      </SelectV2.Menu>
    </SelectV2.Root>
  ),
  args: {
    type: 'textIcon',
    visibleOptions: 3,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'textDesc', 'textIcon'] },
  },
};

export const UserList: StoryObj<typeof SelectV2.Root> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <div>
          <IconDotsVertical style={style} />
        </div>
      </SelectV2.Trigger>
      <SelectV2.Menu>
        {userOptions.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
      </SelectV2.Menu>
    </SelectV2.Root>
  ),
  args: {
    type: 'userList',
    visibleOptions: 3,
  },
  argTypes: {
    type: { control: 'radio', options: ['userList', 'userListDesc'] },
  },
};

export const UserListDesc: StoryObj<typeof SelectV2.Root> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <div>
          <IconDotsVertical style={style} />
        </div>
      </SelectV2.Trigger>
      <SelectV2.Menu>
        {userOptions.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
      </SelectV2.Menu>
    </SelectV2.Root>
  ),
  args: {
    type: 'userListDesc',
    visibleOptions: 3,
  },
  argTypes: {
    type: { control: 'radio', options: ['userList', 'userListDesc'] },
  },
};
