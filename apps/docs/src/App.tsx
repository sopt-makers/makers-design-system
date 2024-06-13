import "./App.css";

import { ChangeEvent, useState } from "react";

import SearchField from "../../../packages/ui/Input/SearchField";
import { Test } from "@sopt-makers/ui";
import TextArea from "../../../packages/ui/Input/TextArea";
import TextField from "../../../packages/ui/Input/TextField";

function App() {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [search, setSearch] = useState("");

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
    setSearch("");
  };

  return (
    <>
      <Test text="Test Component" size="big" color="blue" />
      <TextField<string>
        placeholder="Placeholder..."
        required
        labelText="Label"
        descriptionText="description"
        validationFn={inputValidation}
        value={input}
        onChange={handleInputChange}
      />
      <TextArea
        placeholder="Placeholder..."
        required
        labelText="Label"
        descriptionText="description"
        validationFn={textareaValidation}
        value={textarea}
        onChange={handleTextareaChange}
        onSubmit={handleTextareaSubmit}
        maxLength={300}
      />
      <SearchField
        placeholder="Placeholder..."
        value={search}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        onReset={handleSearchReset}
      />
    </>
  );
}

export default App;
