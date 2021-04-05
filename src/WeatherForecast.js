import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import Loader from "react-loader-spinner";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastApiData, setForecastApiData] = useState(null);

  // Search daily forecast by coordinates (API call)
  function handleResponse(response) {
    setForecastApiData(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    //const apiKey = "2ccfd3ff79016dcd8763eb6a62db444b";
    const apiKey = "c2337c1b9cca266d22845eead27c0335";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[0]} />
          </div>

          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay dayData={forecastApiData[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    loadForecast();
    return (
      <div className="loading">
        <h6>Loading...</h6>
        <Loader
          type="ThreeDots"
          color="#ffc107"
          height={100}
          width={100}
          timeout={90000}
        />{" "}
      </div>
    );
  }
}
