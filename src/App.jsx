
import { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/", "=", "C"].map((char) => (
            <button key={char} onClick={() => {
                if (char === "=") handleCalculate();
                else if (char === "C") handleClear();
                else handleClick(char);
              }}>
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

