import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather APP - test</h1>
        <Weather />
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
      </header>
    </div>
  );
}

export default App;
