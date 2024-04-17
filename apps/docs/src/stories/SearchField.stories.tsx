import { ChangeEvent, useState, type InputHTMLAttributes } from 'react';
import { StoryObj } from '@storybook/react';
import { SearchField } from '@sopt-makers/ui';
import { fn } from '@storybook/test';

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string;
  onSubmit: () => void;
  onReset: () => void;
}

const useSearchField = (props: SearchFieldProps) => {
  const [search, setSearch] = useState(props.value);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSearchReset = () => {
    setSearch('');
  }

  return <SearchField {...props} value={search} onChange={handleSearchChange} onReset={handleSearchReset} />
}

export default {
  title: 'Components/Input/SearchField',
  component: useSearchField,
  tags: ['autodocs'],
  args: {
    value: '',
    style: { width: '335px' },
    onSubmit: fn(),
  },
  argTypes: {
    value: { control: false },
    style: { control: false },
    onSubmit: { action: 'onSubmit' }
  }
}

export const Default: StoryObj<SearchFieldProps> = {
  args: {
    placeholder: 'Placeholder...',
    readOnly: false,
    disabled: false,
  },
};