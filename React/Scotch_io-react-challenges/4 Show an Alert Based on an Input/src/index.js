import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";
import { useState } from "react";

function App() {
  const [phrase, setPhrase] = useState("test");

  if (phrase === "open sesame") {
    alert("You may pass!!");
  }

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        value={phrase}
        type="text"
        placeholder="Super duper secret"
        onChange={(event) => setPhrase(event.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
