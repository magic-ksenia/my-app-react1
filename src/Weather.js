import React, { useState } from "react";
import axios from "axios";
import LastUpdated from "./LastUpdated";
import FormatLocalTime from "./FormatLocalTime";

import {
  faWind,
  faTint,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Weather.css";
import Icon from "./media/WeatherIcons/01d.png";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherApiData, setWeatherApiData] = useState({ loaded: false });

  // Integration of details from API
  function handleResponse(response) {
    setWeatherApiData({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      timezone: response.data.timezone,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  // Search current weather by city (API call)
  function searchWeather() {
    const apiKey = "2ccfd3ff79016dcd8763eb6a62db444b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      searchWeather(city);
    } else {
      alert(`Enter a city to submit your search`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherApiData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row row-cols-3 d-flex flex-nowrap">
            <div className="col-7">
              <input
                type="Search"
                className="form-control "
                placeholder="Enter a city.."
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-warning" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#5C636A"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn btn-warning" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#5C636A"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <LastUpdated date={weatherApiData.date} />
        <h1 className="fw-bold text-center">
          {weatherApiData.city}, {weatherApiData.country}
        </h1>
        <FormatLocalTime
          date={weatherApiData.date}
          timezone={weatherApiData.timezone}
        />

        <div className="row g-0 m-0">
          <div className="col-7 p-0">
            <div className="Weather-temperature">
              <span className="Temperature">
                {Math.round(weatherApiData.temperature)}
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
            <div className="mt-3 text-center">
              <img src={Icon} alt={weatherApiData.description} width="110px" />
              <h5 className="Description">{weatherApiData.description}</h5>
            </div>
          </div>
        </div>

        <div className="details">
          <ul>
            <li className="Feelslike">
              <FontAwesomeIcon icon={faThermometerHalf} /> Feels like:{" "}
              {Math.round(weatherApiData.feelslike)}°
            </li>
            <li className="Humidity">
              <FontAwesomeIcon icon={faTint} /> Humidity:{" "}
              {weatherApiData.humidity} %
            </li>
            <li className="Wind">
              <FontAwesomeIcon icon={faWind} /> Wind:{" "}
              {Math.round(weatherApiData.wind)} m/s
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    searchWeather();
    return <h3>Loading...</h3>;
  }
}
