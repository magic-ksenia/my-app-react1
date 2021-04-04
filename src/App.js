import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-wrapper">
          <Weather defaultCity="Minsk" />
          <Forecast />
        </div>
        <p className="footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/oksana-stalbovskaya-19901126/"
            target="_blank"
            rel="noreferrer"
          >
            Oksana Stalbovskaya <FontAwesomeIcon icon={faLinkedinIn} />
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/magic-ksenia/my-app-react1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub <FontAwesomeIcon icon={faGithubAlt} />{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
