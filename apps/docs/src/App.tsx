import './App.css';

import { ChangeEvent, useState } from 'react';

import '@sopt-makers/ui/dist/index.css';

import { colors } from '@sopt-makers/colors';
import {
  FieldBox,
  SearchField,
  Test,
  TextArea,
  TextField,
  SelectV2,
  BottomSheetRoot,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetActionButton,
  BottomSheetBody,
} from '@sopt-makers/ui';

interface Option<T> {
  label: string;
  value: T;
  description?: string;
  icon?: React.ReactNode;
  profileUrl?: string;
}

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

  const defaultOptions: Option<string>[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
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
          onChange={(value) => {
            console.log(value);
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
          onChange={(value) => {
            console.log(value);
          }}
          type='text'
          multiple={true}
          defaultValue={defaultOptions}
        >
          <SelectV2.Trigger>
            <SelectV2.TriggerContent placeholder='카테고리를 선택해주세요' label='카테고리' />
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
      <div>
        <BottomSheetRoot>
          <BottomSheetTrigger>열기</BottomSheetTrigger>
          <BottomSheetContent title='Title'>
            <BottomSheetBody>
              <p style={{ color: 'white' }}>
                커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의
                모든 커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로, 이용자는 커뮤니티 이용 전 반드시 모든 내용을
                숙지하여야 합니다. 방송통신심의위원회의 정보통신에 관한 심의규정, 현행 법률, 서비스 이용약관 및 커뮤니티
                이용규칙을 위반하거나, 사회 통념 및 관련 법령을 기준으로 타 이용자에게 악영향을 끼치는 경우, 게시물이
                삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 커뮤니티 이용규칙은 누구나 기분 좋게 참여할 수 있는
                커뮤니티를 만들기 위해 제정되었습니다. 서비스 내의 모든 커뮤니티는 커뮤니티 이용규칙에 의해 운영되므로,
              </p>
            </BottomSheetBody>
            <BottomSheetActionButton>Button</BottomSheetActionButton>
          </BottomSheetContent>
        </BottomSheetRoot>
      </div>
    </>
  );
}

export default App;
