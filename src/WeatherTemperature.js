import React from "react";

export default function WeatherTemperature(props) {
  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahreheit");
  }

  if (props.unit === "celsius") {
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
    let fahrenheit = (props.tempC * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
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
