import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [movement, setMovement] = useState(300);

  const moveUp = () => {
    setMovement(movement - 50);
  };

  const moveDown = () => {
    setMovement(movement + 50);
  };

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveUp}>👆 Move Up 👆</button>
      <br />
      <button onClick={moveDown}>👆 Move Down 👆</button>

      {/* move this box using inline styles */}
      <div
        className="box"
        style={{
          transform: `translateY(${movement}px)`
        }}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
