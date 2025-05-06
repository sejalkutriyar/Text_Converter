import React from "react";
import { useState } from "react";
import './App.css';

const App = () => {
  const[input, setInput] = useState("");
  const[output, setOutput] = useState("");
  function upper () {
    setOutput(input.toUpperCase());
  }
  function lower () {
    setOutput(input.toLowerCase());
  }
  function reverse () {
    setOutput(input.split("").reverse().join(""));
  }
  return (
    <div>
    <h1>Text Converter</h1>
      <input
        type = "text"
        value = {input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter text'
      />
      <div>
      <p>
        <button onClick={upper}>Upper Case</button>
        </p>
        <p>
        <button onClick={lower}>Lower Case</button></p>
        <p>
        <button onClick={reverse}>Reverse</button></p>
      </div>
      <p>{output}</p>
    </div>
  )
}

export default App;