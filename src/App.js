import React from "react";
import Weather from "./Weather";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-wrapper">
          <Weather defaultCity="Miami" />
        </div>
        <p className="footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/oksana-stalbovskaya-19901126/"
            target="_blank"
            rel="noreferrer"
          >
            Oksana Stalbovskaya
          </a>{" "}
          <FontAwesomeIcon icon={faLinkedinIn} /> and is open-sourced on{" "}
          <a
            href="https://github.com/magic-ksenia/my-app-react1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          <FontAwesomeIcon icon={faGithubAlt} />{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
