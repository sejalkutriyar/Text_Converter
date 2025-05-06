import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const upper = () => {
    setOutput(input.toUpperCase());
  };

  const lower = () => {
    setOutput(input.toLowerCase());
  };

  const reverse = () => {
    setOutput(input.split("").reverse().join(""));
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="text-converter-container">
      <h1 className="text-converter-title">Text Converter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
        className="text-converter-input"
      />
      <div className="button-container">
        <button onClick={upper} className="converter-button">
          Upper Case
        </button>
        <button onClick={lower} className="converter-button">
          Lower Case
        </button>
        <button onClick={reverse} className="converter-button">
          Reverse
        </button>
        <button onClick={clear} className="converter-button clear-button">
          Clear
        </button>
      </div>
      <div className="output-container">
        <p className="output-text">{output}</p>
      </div>
    </div>
  );
};

export default App;