import './App.css';

import { ChangeEvent, useState } from 'react';

import '@sopt-makers/ui/dist/index.css';

import { colors } from '@sopt-makers/colors';
import { FieldBox, SearchField, Test, TextArea, TextField, SelectV2 } from '@sopt-makers/ui';

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

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
    { label: 'Option 7', value: 'option7' },
    { label: 'Option 8', value: 'option8' },
    { label: 'Option 9', value: 'option9' },
    { label: 'Option 10', value: 'option10' },
  ];

  return (
    <>
      <Test text='Test Component' size='big' color='blue' />
      <TextField
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
        // value={textarea}
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
      <FieldBox
        topAddon={<FieldBox.Label label='안녕?' description='디스크립션' required />}
        bottomAddon={
          <FieldBox.BottomAddon
            leftAddon={<div style={{ color: colors.white }}>레프트애드온</div>}
            rightAddon={<div style={{ color: colors.white }}>롸이트애드온</div>}
          />
        }
      >
        <span style={{ color: colors.white }}>여긴 본문</span>
      </FieldBox>
      <div style={{ textAlign: 'left' }}>
        <SelectV2.Root
          visibleOptions={5}
          onChange={() => {
            console.log('dsad');
          }}
          type='text'
        >
          <SelectV2.Trigger>
            <SelectV2.TriggerContent placeholder='카테고리' />
          </SelectV2.Trigger>
          <SelectV2.Menu>
            {options.map((option) => (
              <SelectV2.MenuItem
                key={option.value}
                option={option}
                onClick={() => {
                  console.log('custom logic');
                }}
              />
            ))}
          </SelectV2.Menu>
        </SelectV2.Root>
        <SelectV2.Root
          visibleOptions={5}
          onChange={() => {
            console.log('dsad');
          }}
          type='text'
          multiple={true}
        >
          <SelectV2.Trigger>
            <SelectV2.TriggerContent
              placeholder='카테고리를 선택해주세요'
              label='카테고리카테고리카테고리카테고리카테고리카테고리카테고리'
            />
          </SelectV2.Trigger>
          <SelectV2.Menu>
            {options.map((option) => (
              <SelectV2.MenuItem
                key={option.value}
                option={option}
                onClick={() => {
                  console.log('custom logic');
                }}
              />
            ))}
          </SelectV2.Menu>
        </SelectV2.Root>
      </div>
    </>
  );
}

export default App;
