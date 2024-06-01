import "./App.css";

import { Button, Test } from "@sopt-makers/ui";
import { ChangeEvent, useState } from "react";

import SearchField from "../../../packages/ui/Input/SearchField";
import TAG from "../../../packages/ui/TAG/TAG";
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
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "white", fontSize: "12px" }}>Default</span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="rect" variant="default" type="solid">
          TAG
        </TAG>
        <TAG size="md" shape="rect" variant="default" type="solid">
          TAG
        </TAG>
        <TAG size="lg" shape="rect" variant="default" type="solid">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="pill" variant="default" type="solid">
          TAG
        </TAG>
        <TAG size="md" shape="pill" variant="default" type="solid">
          TAG
        </TAG>
        <TAG size="lg" shape="pill" variant="default" type="solid">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="rect" variant="default" type="line">
          TAG
        </TAG>
        <TAG size="md" shape="rect" variant="default" type="line">
          TAG
        </TAG>
        <TAG size="lg" shape="rect" variant="default" type="line">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="pill" variant="default" type="line">
          TAG
        </TAG>
        <TAG size="md" shape="pill" variant="default" type="line">
          TAG
        </TAG>
        <TAG size="lg" shape="pill" variant="default" type="line">
          TAG
        </TAG>
      </div>
      <span style={{ color: "white", fontSize: "12px" }}>Primary</span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="rect" variant="primary" type="solid">
          TAG
        </TAG>
        <TAG size="md" shape="rect" variant="primary" type="solid">
          TAG
        </TAG>
        <TAG size="lg" shape="rect" variant="primary" type="solid">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="pill" variant="primary" type="solid">
          TAG
        </TAG>
        <TAG size="md" shape="pill" variant="primary" type="solid">
          TAG
        </TAG>
        <TAG size="lg" shape="pill" variant="primary" type="solid">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="rect" variant="primary" type="line">
          TAG
        </TAG>
        <TAG size="md" shape="rect" variant="primary" type="line">
          TAG
        </TAG>
        <TAG size="lg" shape="rect" variant="primary" type="line">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="pill" variant="primary" type="line">
          TAG
        </TAG>
        <TAG size="md" shape="pill" variant="primary" type="line">
          TAG
        </TAG>
        <TAG size="lg" shape="pill" variant="primary" type="line">
          TAG
        </TAG>
      </div>
      <span style={{ color: "white", fontSize: "12px" }}>Secondary</span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="rect" variant="secondary" type="solid">
          TAG
        </TAG>
        <TAG size="md" shape="rect" variant="secondary" type="solid">
          TAG
        </TAG>
        <TAG size="lg" shape="rect" variant="secondary" type="solid">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="pill" variant="secondary" type="solid">
          TAG
        </TAG>
        <TAG size="md" shape="pill" variant="secondary" type="solid">
          TAG
        </TAG>
        <TAG size="lg" shape="pill" variant="secondary" type="solid">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="rect" variant="secondary" type="line">
          TAG
        </TAG>
        <TAG size="md" shape="rect" variant="secondary" type="line">
          TAG
        </TAG>
        <TAG size="lg" shape="rect" variant="secondary" type="line">
          TAG
        </TAG>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <TAG size="sm" shape="pill" variant="secondary" type="line">
          TAG
        </TAG>
        <TAG size="md" shape="pill" variant="secondary" type="line">
          TAG
        </TAG>
        <TAG size="lg" shape="pill" variant="secondary" type="line">
          TAG
        </TAG>
      </div>
    </div>
  );
}

export default App;
