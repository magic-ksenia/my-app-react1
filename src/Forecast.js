import React from "react";
import Icon from "./media/WeatherIcons/03d.png";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
        <div className="col">
          <h5 id="day-of-week">09:00</h5>
          <img src={Icon} alt="icon" />
          <div className="Weather-forecast-temperature">
            <strong>
              <span className="Forecast-max">9</span>°
            </strong>
            ∙ <span className="Forecast-min"> 7</span>°
          </div>
        </div>
        <div className="col">
          <h5 id="day-of-week">12:00</h5>
          <img src={Icon} alt="icon" />
          <div className="Weather-forecast-temperature">
            <strong>
              <span className="Forecast-max">9</span>°
            </strong>
            ∙<span className="Forecast-min"> 7</span>°
          </div>
        </div>
        <div className="col">
          <h5 id="day-of-week">15:00</h5>
          <img src={Icon} alt="icon" />
          <div className="Weather-forecast-temperature">
            <strong>
              <span className="Forecast-max">9 </span>°
            </strong>
            ∙<span className="Forecast-min"> 7</span>°
          </div>
        </div>
        <div className="col">
          <h5 id="day-of-week">18:00</h5>
          <img src={Icon} alt="icon" />
          <div className="Weather-forecast-temperature">
            <strong>
              <span className="Forecast-max">9</span>°
            </strong>
            ∙<span className="Forecast-min"> 7</span>°
          </div>
        </div>
        <div className="col">
          <h5 id="day-of-week">21:00</h5>
          <img src={Icon} alt="icon" />
          <div className="Weather-forecast-temperature">
            <strong>
              <span className="Forecast-max">9</span>°
            </strong>
            ∙<span className="Forecast-min"> 7</span>°
          </div>
        </div>
        <div className="col">
          <h5 id="day-of-week">00:00</h5>
          <img src={Icon} alt="icon" />
          <div className="Weather-forecast-temperature">
            <strong>
              <span className="Forecast-max">9</span>°
            </strong>
            ∙ <span className="Forecast-min">7</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
