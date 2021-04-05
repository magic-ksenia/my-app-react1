import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.dayData.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayOfWeek = days[day];
    return dayOfWeek;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()} </div>
      <WeatherIcon code={props.dayDataweather[0].icon} size={60} />
      <div className="WeatherForecast-temperature">
        <strong>
          <span className="WeatherForecast-max">
            {Math.round(props.dayData.temp.max)}
          </span>
          °
        </strong>
        ∙{" "}
        <span className="WeatherForecast-min">
          {" "}
          {Math.round(props.dayData.temp.min)}
        </span>
        °
      </div>
    </div>
  );
}
