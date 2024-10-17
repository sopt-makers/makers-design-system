import './App.css';

import { ChangeEvent, useState } from 'react';

import '@sopt-makers/ui/dist/index.css';

import { FieldBox, SearchField, Test, TextArea, TextField } from '@sopt-makers/ui';
import { colors } from '@sopt-makers/colors';

function App() {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  const [search, setSearch] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const inputValidation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  const textareaValidation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  };

  const handleTextareaSubmit = () => {
    console.log(textarea);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(search);
  };

  const handleSearchReset = () => {
    setSearch('');
  };

  return (
    <>
      <Test text='Test Component' size='big' color='blue' />
      <TextField<string>
        placeholder='Placeholder...'
        required
        labelText='Label'
        descriptionText='description'
        validationFn={inputValidation}
        value={input}
        onChange={handleInputChange}
      />
      <TextArea
        placeholder='Placeholder...'
        required
        topAddon={{ labelText: 'Label', descriptionText: 'description' }}
        rightAddon={{ onClick: () => handleTextareaSubmit() }}
        validationFn={textareaValidation}
        errorMessage='Error Message'
        value={textarea}
        onChange={handleTextareaChange}
        maxLength={300}
      />
      <SearchField
        placeholder='Placeholder...'
        value={search}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        onReset={handleSearchReset}
      />
      <div style={{ padding: '20px', backgroundColor: colors.secondary }} />
      <FieldBox topAddon={<FieldBox.Label label='안녕?' description='디스크립션' required />}>여긴 본문</FieldBox>
    </>
  );
}

export default App;
