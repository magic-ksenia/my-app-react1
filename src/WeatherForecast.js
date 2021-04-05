import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastApiData, setForecastApiData] = useState(null);
  // Search daily forecast by coordinates (API call)
  function handleResponse(response) {
    setForecastApiData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[0]} />
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Monday</div>
            <WeatherIcon code="02d" size={60} />
            <div className="WeatherForecast-temperature">
              <strong>
                <span className="WeatherForecast-max">9</span>°
              </strong>
              ∙ <span className="WeatherForecast-min"> 7</span>°
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">Monday</div>
            <WeatherIcon code="02d" size={60} />
            <div className="WeatherForecast-temperature">
              <strong>
                <span className="WeatherForecast-max">9</span>°
              </strong>
              ∙ <span className="WeatherForecast-min"> 7</span>°
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">Monday</div>
            <WeatherIcon code="02d" size={60} />
            <div className="WeatherForecast-temperature">
              <strong>
                <span className="WeatherForecast-max">9</span>°
              </strong>
              ∙ <span className="WeatherForecast-min"> 7</span>°
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-day">Monday</div>
            <WeatherIcon code="02d" size={60} />
            <div className="WeatherForecast-temperature">
              <strong>
                <span className="WeatherForecast-max">9</span>°
              </strong>
              ∙ <span className="WeatherForecast-min"> 7</span>°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2ccfd3ff79016dcd8763eb6a62db444b";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
