import React from "react";
import "./Weather.css";
import Feelslike from "./media/feelslike.png";
import Humidity from "./media/humidity.png";
import Wind from "./media/wind.png";
import Icon from "./media/WeatherIcons/01d.png";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Lastupdated">
        <h6>
          Last updated:{" "}
          <span id="date-time">February 24, Wednesday | 19:09</span>
        </h6>
      </div>

      <div className="row">
        <div className="col-7">
          <div className="Overview">
            <h1>
              <span className="city">Stockholm</span>,{" "}
              <span className="country">SE</span>
            </h1>
            <h4 id="local-time">March 14, Wednesday | 08:09</h4>
            <div className="Weather-temperature">
              <span className="Temperature" id="temperature">
                23
              </span>
              <span className="Units">
                <a href="/" className="Active">
                  °C
                </a>{" "}
                | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="Descriptionemoji text-center mt-4">
            <img src={Icon} alt="icon" width="200px" />
            <h4 className="Description" id="description">
              Overcast clouds
            </h4>
          </div>
          <div className="details">
            <ul>
              <li className="Feelslike">
                <img src={Feelslike} alt="thermometer" width="22px" /> Feels
                like: <span id="feels-like">20</span>°
              </li>
              <li className="Humidity">
                <img src={Humidity} alt="Humidity" width="22px" /> Humidity:{" "}
                <span id="humidity">87</span> %
              </li>
              <li className="Wind">
                <img src={Wind} alt="Wind" width="22px" /> Wind:{" "}
                <span id="wind">2</span> m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
