import React from "react";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeelsLikeTemperature(props) {
  function feelsLikeTemp() {
    let temperature = Math.round(props.tempC);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  return (
    <p className="details">
      <FontAwesomeIcon icon={faThermometerHalf} /> {feelsLikeTemp()}
    </p>
  );
}
