import React from "react";
import LastUpdated from "./LastUpdated";
import FormatLocalTime from "./FormatLocalTime";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import {
  faWind,
  faTint,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <LastUpdated date={props.apiData.date} />
      <h1 className="city-overview fw-bold text-center">
        {props.apiData.city}, {props.apiData.country}
      </h1>
      <FormatLocalTime
        date={props.apiData.date}
        timezone={props.apiData.timezone}
      />

      <div className="row g-0">
        <div className="col-7 p-0">
          <div className="Weather-temperature">
            <span className="temperature">
              {Math.round(props.apiData.temperature)}
            </span>
            <span className="Units">
              <a href="/" className="Active">
                °C
              </a>{" "}
              | <a href="/">°F</a>
            </span>
          </div>
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
          <p className="details">
            <FontAwesomeIcon icon={faThermometerHalf} />{" "}
            {Math.round(props.apiData.feelslike)}°
          </p>
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
