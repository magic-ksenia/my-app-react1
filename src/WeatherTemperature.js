import React, { useState } from "react";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahreheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.tempC * 1.8 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.tempC)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
