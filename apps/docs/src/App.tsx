import { Test } from '@sopt-makers/ui';
import './App.css';
import TextField from '../../../packages/ui/Input/TextField';
import TextArea from '../../../packages/ui/Input/TextArea';
import { useState, ChangeEvent } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [area, setArea] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const inputValidation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  }

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setArea(e.target.value);
  }
  const textAreaValidation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  }
  const submitText = () => { console.log(area) };

  return (
    <>
      <Test text="Test Component" size="big" color="blue" />
      <TextField<string> labelText="Label" placeholder="Placeholder..." required descriptionText="description" validationFn={inputValidation} value={input} onChange={handleChangeInput} />
      <TextArea<string> labelText="Label" placeholder="Placeholder..." required descriptionText="description" validationFn={textAreaValidation} value={area} onChange={handleChangeTextArea} submitText={submitText} maxLength={300} />
    </>
  );
}

export default App;
