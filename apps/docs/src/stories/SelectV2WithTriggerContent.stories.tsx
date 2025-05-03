import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectV2 } from '@sopt-makers/ui';
import { IconSend } from '@sopt-makers/icons';
import { fn } from '@storybook/test';

interface SelectStoryArgs extends ComponentProps<typeof SelectV2.Root> {
  // placeholder와 label은 TriggerContent의 props이므로 여기서 제거
}

const selectOptions = [
  {
    label: 'All',
    value: '',
    description: 'select all',
    icon: <IconSend />,
  },
  {
    label: 'Option 1',
    value: 'option1',
    description: 'Description 1',
    icon: <IconSend />,
  },
  {
    label: 'Option 2',
    value: 'option2',
    description: 'Description 2',
    icon: <IconSend />,
  },
  {
    label: 'Option 3',
    value: 'option3',
    description: 'Description 3',
    icon: <IconSend />,
  },
  {
    label: 'Option 4',
    value: 'option4',
    description: 'Description 4',
    icon: <IconSend />,
  },
  {
    label: 'Option 5',
    value: 'option5',
    description: 'Description 5',
    icon: <IconSend />,
  },
];

const userOptions = [
  {
    label: 'Person 1',
    value: 1,
    description: 'person 1 desc',
  },
  {
    label: 'Person 2',
    value: 2,
    description: 'person 2 desc',
  },
  {
    label: 'Person 3',
    value: 3,
    description: 'person 3 desc',
  },
  {
    label: 'Person 4',
    value: 4,
    description: 'person 4 desc',
  },
  {
    label: 'Person 5',
    value: 5,
    description: 'person 5 desc',
  },
  {
    label: 'Person 6',
    value: 6,
    description: 'person 6 desc',
  },
];

const multipleOptions = [
  {
    label: 'Option 1',
    value: 'option1',
    description: 'Description 1',
  },
  {
    label: 'Option 2',
    value: 'option2',
    description: 'Description 2',
  },
  {
    label: 'Option 3',
    value: 'option3',
    description: 'Description 3',
  },
  {
    label: 'Option 4',
    value: 'option4',
    description: 'Description 4',
  },
  {
    label: 'Option 5',
    value: 'option5',
    description: 'Description 5',
  },
  {
    label: 'Option 6',
    value: 'option6',
    description: 'Description 6',
  },
];

const meta: Meta<typeof SelectV2.Root> = {
  title: 'Components/Input/SelectV2/WithTriggerContent',
  component: SelectV2.Root,
  tags: ['autodocs'],
  args: {
    visibleOptions: 3,
    onChange: fn(),
    multiple: false,
  },
  argTypes: {
    defaultValue: { control: 'select', options: ['', 'option1', 'option2', 'option3', 'option4', 'option5'] },
    visibleOptions: { control: 'number', description: '보여줄 옵션 개수' },
    onChange: {
      control: false,
      description: 'onChange 이벤트 핸들러',
    },
    multiple: { control: 'boolean', description: '다중선택으로 쓸 때 true 로 설정합니다.' },
    type: {
      control: 'radio',
      options: ['text', 'textDesc', 'textIcon', 'userList', 'userListDesc'],
      description: 'select 컴포넌트 type',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<SelectV2.Root onChange={fn()} multiple={true}>
  <SelectV2.Trigger>
    <SelectV2.TriggerContent placeholder='placeholder' />
  </SelectV2.Trigger>
  <SelectV2.Menu>
    {options.map((option) => (
      <SelectV2.MenuItem key={option.value} option={option} />
    ))}
  </SelectV2.Menu>
</SelectV2.Root>
        `,
      },
      description: {
        component: `SelectV2 컴포넌트는 다양한 옵션을 선택할 수 있는 드롭다운 메뉴를 제공합니다.<br /> 다양한 옵션을 제공하여 사용자가 원하는 값을 쉽게 선택할 수 있도록 도와줍니다.`,
      },
    },
  },
};

export default meta;

export const Text: StoryObj<SelectStoryArgs> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder='placeholder' />
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

export const TextDesc: StoryObj<SelectStoryArgs> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder='placeholder' />
      </SelectV2.Trigger>
      <SelectV2.Menu>
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

export const TextIcon: StoryObj<SelectStoryArgs> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder='placeholder' />
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

export const UserList: StoryObj<SelectStoryArgs> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder='placeholder' />
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

export const UserListDesc: StoryObj<SelectStoryArgs> = {
  render: (args) => (
    <SelectV2.Root {...args}>
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder='placeholder' />
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

export const Multiple: StoryObj<SelectStoryArgs> = {
  render: (args) => (
    <SelectV2.Root {...args} multiple={true}>
      <SelectV2.Trigger>
        <SelectV2.TriggerContent placeholder='placeholder' label='카테고리' />
      </SelectV2.Trigger>
      <SelectV2.Menu>
        {multipleOptions.map((option) => (
          <SelectV2.MenuItem key={option.value} option={option} />
        ))}
      </SelectV2.Menu>
    </SelectV2.Root>
  ),
  args: {
    type: 'text',
    visibleOptions: 3,
    multiple: true,
  },
  argTypes: {
    multiple: { control: true },
  },
  parameters: {
    docs: {
      source: {
        code: `
<SelectV2.Root multiple={true} onChange={fn()}>
  <SelectV2.Trigger>
    <SelectV2.TriggerContent
      placeholder="placeholder"
      label="카테고리"
    />
  </SelectV2.Trigger>
  <SelectV2.Menu>
    {options.map((option) => (
      <SelectV2.MenuItem key={option.value} option={option} />
    ))}
  </SelectV2.Menu>
</SelectV2.Root>
        `,
      },
      description: {
        story: `SelectV2 컴포넌트는 다중 선택을 지원합니다.<br /> multiple prop을 true로 설정하면 다중 선택 모드로 작동합니다.<br />  다중 선택 시 숫자 왼쪽에 보여지는 라벨을 설정하려면 TriggerContent의 label prop을 사용하세요. `,
      },
    },
  },
};
