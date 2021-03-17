import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather APP - test</h1>
      <header className="App-header">
        <Weather />
        <Forecast />
      </header>
      <p className="footer">
        <i className="fab fa-github" aria-hidden="true"></i>
        <a
          href="https://github.com/magic-ksenia/my-app-react1"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>{" "}
        by Oksana Stalbovskaya👩🏻‍💻
      </p>
    </div>
  );
}

export default App;
