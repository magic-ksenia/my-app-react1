import React from "react";
import LastUpdated from "./LastUpdated";
import FormatLocalTime from "./FormatLocalTime";
import WeatherTemperature from "./WeatherTemperature";
import FeelsLikeTemperature from "./FeelsLikeTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import { faWind, faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <LastUpdated date={props.apiData.date} />
      <h1 className="city-overview fw-bold text-center">
        {props.apiData.city}, {props.apiData.country}
      </h1>
      <FormatLocalTime
        time={props.apiData.date}
        timezone={props.apiData.timezone}
      />

      <div className="row g-0">
        <div className="col-7 p-0">
          <WeatherTemperature
            tempC={props.apiData.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </div>

        <div className="col-5 p-0">
          <div className="text-center">
            <WeatherIcon code={props.apiData.icon} size={90} />
            <p className="description">{props.apiData.description}</p>
          </div>
        </div>

        <div className="col-4 border-end">
          <small>Feels like</small>
          <br />
          <FeelsLikeTemperature
            tempC={props.apiData.feelslike}
            unit={props.unit}
          />
        </div>

        <div className="col-4 border-end">
          <small>Humidity</small> <br />
          <p className="details">
            {" "}
            <FontAwesomeIcon icon={faTint} /> {props.apiData.humidity}%
          </p>
        </div>

        <div className="col-4">
          <small>Wind</small>
          <br />
          <p className="details">
            <FontAwesomeIcon icon={faWind} /> {Math.round(props.apiData.wind)}
            m/s
          </p>
        </div>
      </div>
    </div>
  );
}
