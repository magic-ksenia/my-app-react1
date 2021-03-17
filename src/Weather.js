import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [details, setDetails] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Integration of details from API
  function displayWeather(response) {
    setLoaded(true);
    setDetails({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  // Search current weather by city (API call)
  function searchWeather(city) {
    let apiKey = "2ccfd3ff79016dcd8763eb6a62db444b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      searchWeather(city);
      setCity("");
    } else {
      alert(`Enter a city to submit your search`);
      setCity("");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <input
            type="Search"
            className="form-control"
            placeholder="Enter a city..."
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" className="btn btn-light" value="Search" />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-light" id="current-location">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>
              {" "}
              Current weather in {details.city}, {details.country}
            </strong>
          </li>
          <li>Temperature: {Math.round(details.temperature)}°C</li>
          <li>Feels like: {Math.round(details.feelslike)}°C</li>
          <li>Humidity: {details.humidity}%</li>
          <li>Wind: {Math.round(details.wind)} m/s</li>
          <li>Description: {details.description}</li>
          <li>
            <img src={details.icon} alt={details.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
