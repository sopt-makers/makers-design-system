import { Test } from '@sopt-makers/ui';
import './App.css';
import TextField from '../../../packages/ui/Input/TextField';
import { useState, ChangeEvent } from 'react';

function App() {
  const [input, setInput] = useState('asdfsdf');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const validation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  }

  return (
    <>
      <Test text="Test Component" size="big" color="blue" />
      <TextField<string> labelText="Label" placeholder="Placeholder..." required descriptionText="description" validationFn={validation} value={input} onChange={handleChangeInput} />
    </>
  );
}

export default App;
