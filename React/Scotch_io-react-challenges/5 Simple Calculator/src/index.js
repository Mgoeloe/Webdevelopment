import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [total, setTotal] = useState();

  const result = () => {
    setTotal(numberOne + numberTwo);
  };

  const multiply = () => {
    setTotal(numberOne * numberTwo);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          value={numberOne}
          type="number"
          onChange={(event) => setNumberOne(+event.target.value)}
        />
        <input
          value={numberTwo}
          type="number"
          onChange={(event) => setNumberTwo(+event.target.value)}
        />
      </div>

      <button onClick={result}>Add Them! </button>
      <button onClick={multiply}> Multiply Them!</button>

      <h2>{total}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
