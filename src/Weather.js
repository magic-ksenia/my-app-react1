import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="Search"
              className="form-control"
              placeholder="Enter a city..."
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-light" value="Search" />
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-light">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>

      <div className="Lastupdated">
        <h5>
          Last updated:
          <span id="date-time">February 24, Wednesday | 19:09</span>
        </h5>
      </div>

      <div className="row">
        <div className="col-7">
          <div className="Overview">
            <h1>
              <span className="city">Dreamland</span>,{" "}
              <span className="country"> US</span>
            </h1>
            <h4 id="local-time">February 24, Wednesday | 13:09</h4>
            <div className="Weather-temperature">
              <span className="Temperature" id="temperature">
                23
              </span>
              <span className="Units">
                <a href="/" className="Active">
                  °C
                </a>
                |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="Descriptionemoji text-center mt-4">
            <img
              src={require("./media/WeatherIcons/01n.png")}
              alt="icon"
              width="200px"
            />
            <h4 className="Description" id="description">
              Overcast clouds
            </h4>
          </div>
          <div className="details">
            <ul>
              <li className="Feelslike">
                <img
                  src={require("./media/feelslike.png")}
                  alt="thermometer"
                  width="22px"
                />
                Feels like <span id="feels-like">20</span>°
              </li>
              <li className="Humidity">
                <img
                  src={require("./media/humidity.png")}
                  alt="Humidity"
                  width="22px"
                />
                Humidity: <span id="humidity">87</span> %
              </li>
              <li className="Wind">
                <img
                  src={require("./media/wind.png")}
                  alt="Wind"
                  width="22px"
                />
                Wind: <span id="wind">2</span> m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
