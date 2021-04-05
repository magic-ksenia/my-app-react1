import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.dayData.temp.max);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.dayData.temp.min);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.dayData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = days[day];
    return dayOfWeek;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.dayData.weather[0].icon} size={50} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-thermometer-high"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
          </svg>
          {maxTemp()}
        </span>{" "}
        <span className="WeatherForecast-min">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-thermometer-low"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z" />
            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
          </svg>
          {minTemp()}
        </span>
      </div>
    </div>
  );
}
