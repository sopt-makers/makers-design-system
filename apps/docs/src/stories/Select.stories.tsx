import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@sopt-makers/ui";
import { IconSend } from "@sopt-makers/icons";
import { fn } from '@storybook/test';

const selectOptions = [{
  label: 'All',
  value: '',
  description: 'select all',
  icon: <IconSend />,
}, {
  label: 'Option 1',
  value: 'option1',
  description: 'Description 1',
  icon: <IconSend />,
}, {
  label: 'Option 2',
  value: 'option2',
  description: 'Description 2',
  icon: <IconSend />,
}, {
  label: 'Option 3',
  value: 'option3',
  description: 'Description 3',
  icon: <IconSend />,
}, {
  label: 'Option 4',
  value: 'option4',
  description: 'Description 4',
  icon: <IconSend />,
}, {
  label: 'Option 5',
  value: 'option5',
  description: 'Description 5',
  icon: <IconSend />,
}];

const userOptions = [{
  label: 'Person 1',
  value: 1,
  description: 'person 1 desc',
}, {
  label: 'Person 2',
  value: 2,
  description: 'person 2 desc',
}, {
  label: 'Person 3',
  value: 3,
  description: 'person 3 desc',
}, {
  label: 'Person 4',
  value: 4,
  description: 'person 4 desc',
}, {
  label: 'Person 5',
  value: 5,
  description: 'person 5 desc',
}, {
  label: 'Person 6',
  value: 6,
  description: 'person 6 desc',
}];

const meta = {
  title: "Components/Input/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    placeholder: 'Placeholder',
    visibleOptions: 3,
    onChange: fn(),
  },
  argTypes: {
    defaultValue: { control: 'select', options: ['', 'option1', 'option2', 'option3', 'option4', 'option5'] },
    placeholder: { control: 'text' },
    visibleOptions: { control: 'number' },
  }
} as Meta<typeof Select>;

export default meta;

export const Text: StoryObj = {
  args: {
    type: 'text',
    options: selectOptions,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'textDesc', 'textIcon'] },
  }
};

export const TextDesc: StoryObj = {
  args: {
    type: 'textDesc',
    options: selectOptions,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'textDesc', 'textIcon'] },
  }
};

export const TextIcon: StoryObj = {
  args: {
    type: 'textIcon',
    options: selectOptions,
  },
  argTypes: {
    type: { control: 'radio', options: ['text', 'textDesc', 'textIcon'] },
  }
};

export const UserList: StoryObj = {
  args: {
    type: 'userList',
    options: userOptions,
  },
  argTypes: {
    type: { control: 'radio', options: ['userList', 'userListDesc'] },
  }
};

export const UserListDesc: StoryObj = {
  args: {
    type: 'userListDesc',
    options: userOptions,
  },
  argTypes: {
    type: { control: 'radio', options: ['userList', 'userListDesc'] },
  }
};