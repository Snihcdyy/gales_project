/* INCREMENT AND DECREMENT

import {useState} from "react";

function App(){
  const [count, setCount] = useState(0);

  function handleIncrement(){
    setCount(count + 1);
  }
  function handleDecrement(){
    setCount(prevCount => (prevCount > 0 ? prevCount -1 : 0));
      }
      function handleReset(){
        setCount(0);
      }

      return (
        <div style={{textAlign: "top", marginTop: "20px"}}>
          <h1> Number: {count}</h1>
          <button onClick={handleIncrement} style ={{margin: "10px", padding: "20px"}}>INCREMENT</button>
          <button onClick={handleDecrement} style ={{margin: "10px", padding: "20px"}}>DECREMENT</button>
          <button onClick={handleReset} style={{margin: "10px", padding: "20px"}}>RESET</button>
        </div>
      );
}

export default App;
*/

import { useState } from "react";

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
    <div style={{ width: "250px", margin: "20px auto", textAlign: "center", padding: "15px", border: "5px solid #4CAF50", borderRadius: "10px", backgroundColor: "#f0f0f0" }}>
      <div style={{ marginBottom: "5px", padding: "10px", border: "5px solid #4CAF50", minHeight: "20px", backgroundColor: "#000000", fontSize: "18px", fontWeight: "bold" }}>
      {input || "0"}
      </div>
      <div>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "+", "-", "*", "/", "=", "C"].map((char) => (
          <button
            key={char}
            style={{ margin: "2px", padding: "5px", width: "40px", cursor: "pointer" }}
            onClick={() => {
              if (char === "=") handleCalculate();
              else if (char === "C") handleClear();
              else handleClick(char);
            }}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
}
