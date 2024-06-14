import type { Meta, StoryObj } from "@storybook/react";
import { UserMention } from "@sopt-makers/ui";
import { fn } from '@storybook/test';
import { useState } from "react";

interface UserOption<T> {
  label: string;
  value: T;
  description?: string;
  profileUrl?: string;
}

interface UserMentionProps<T> {
  className?: string;
  userOptions: UserOption<T>[];
  type: 'Default' | 'Description';
  visibleOptions?: number;
  onChange: (value: T) => void;
}

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

const useUserMention = (props: UserMentionProps<number>) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => { setOpen(true) }
  const toggleClose = () => { setOpen(false) }

  return <>
    <button type="button" onClick={toggleOpen}>
      Open UserMention
    </button>
    {open && <UserMention {...props} toggleClose={toggleClose} />}
  </>
};

const meta = {
  title: "Components/Input/UserMention",
  component: useUserMention,
  tags: ["autodocs"],
  args: {
    userOptions,
    visibleOptions: 3,
    onChange: fn(),
  },
  argTypes: {
    type: { control: 'radio', options: ['Default', 'Description'] },
    visibleOptions: { control: 'number' },
  }
} as Meta<typeof UserMention>;

export default meta;

export const Default: StoryObj = {
  args: {
    type: 'Default',
  },
};

export const Description: StoryObj = {
  args: {
    type: 'Description',
  },
};