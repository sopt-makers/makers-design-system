import "./App.css";

import { ChangeEvent, useState } from "react";

import SearchField from "../../../packages/ui/Input/SearchField";
import Tag from "../../../packages/ui/Tag/Tag";
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="rect" variant="default" type="solid">
          Tag
        </Tag>
        <Tag size="md" shape="rect" variant="default" type="solid">
          Tag
        </Tag>
        <Tag size="lg" shape="rect" variant="default" type="solid">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="pill" variant="default" type="solid">
          Tag
        </Tag>
        <Tag size="md" shape="pill" variant="default" type="solid">
          Tag
        </Tag>
        <Tag size="lg" shape="pill" variant="default" type="solid">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="rect" variant="default" type="line">
          Tag
        </Tag>
        <Tag size="md" shape="rect" variant="default" type="line">
          Tag
        </Tag>
        <Tag size="lg" shape="rect" variant="default" type="line">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="pill" variant="default" type="line">
          Tag
        </Tag>
        <Tag size="md" shape="pill" variant="default" type="line">
          Tag
        </Tag>
        <Tag size="lg" shape="pill" variant="default" type="line">
          Tag
        </Tag>
      </div>
      // primary
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="rect" variant="primary" type="solid">
          Tag
        </Tag>
        <Tag size="md" shape="rect" variant="primary" type="solid">
          Tag
        </Tag>
        <Tag size="lg" shape="rect" variant="primary" type="solid">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="pill" variant="primary" type="solid">
          Tag
        </Tag>
        <Tag size="md" shape="pill" variant="primary" type="solid">
          Tag
        </Tag>
        <Tag size="lg" shape="pill" variant="primary" type="solid">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="rect" variant="primary" type="line">
          Tag
        </Tag>
        <Tag size="md" shape="rect" variant="primary" type="line">
          Tag
        </Tag>
        <Tag size="lg" shape="rect" variant="primary" type="line">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="pill" variant="primary" type="line">
          Tag
        </Tag>
        <Tag size="md" shape="pill" variant="primary" type="line">
          Tag
        </Tag>
        <Tag size="lg" shape="pill" variant="primary" type="line">
          Tag
        </Tag>
      </div>
      // secondary
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="rect" variant="secondary" type="solid">
          Tag
        </Tag>
        <Tag size="md" shape="rect" variant="secondary" type="solid">
          Tag
        </Tag>
        <Tag size="lg" shape="rect" variant="secondary" type="solid">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="pill" variant="secondary" type="solid">
          Tag
        </Tag>
        <Tag size="md" shape="pill" variant="secondary" type="solid">
          Tag
        </Tag>
        <Tag size="lg" shape="pill" variant="secondary" type="solid">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="rect" variant="secondary" type="line">
          Tag
        </Tag>
        <Tag size="md" shape="rect" variant="secondary" type="line">
          Tag
        </Tag>
        <Tag size="lg" shape="rect" variant="secondary" type="line">
          Tag
        </Tag>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <Tag size="sm" shape="pill" variant="secondary" type="line">
          Tag
        </Tag>
        <Tag size="md" shape="pill" variant="secondary" type="line">
          Tag
        </Tag>
        <Tag size="lg" shape="pill" variant="secondary" type="line">
          Tag
        </Tag>
      </div>
    </div>
  );
}

export default App;
