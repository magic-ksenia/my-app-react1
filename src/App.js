import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-wrapper">
          <WeatherSearch />
          <Weather />
          <Forecast />
        </div>
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
    </div>
  );
}

export default App;
