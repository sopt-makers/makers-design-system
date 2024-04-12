import { Test } from '@sopt-makers/ui';
import './App.css';
import TextField from '../../../packages/ui/Input/TextField';

function App() {
  return (
    <>
      <Test text="Test Component" size="big" color="blue" />
      <TextField labelText="Label" errorMessage="error message" />
    </>
  );
}

export default App;
