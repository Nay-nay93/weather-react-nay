import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=13c9444ao05d100014e814t7f46bd8da
    `;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
        <footer>
          This project was coded by Naomi Greco and is open-sourced on GitHub
          and hosted on Netlify
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a City" onChange={updateCity} />
        <input type="submit" value="Submit" />
      </form>

      {weather && (
        <ul>
          <li>
            <strong>Temperature:</strong> {weather.temperature}°C
          </li>
          <li>
            <strong>Description:</strong> {weather.description}
          </li>
          <li>
            <strong>Humidity:</strong> {weather.humidity}%
          </li>
          <li>
            <strong>Wind Speed:</strong> {weather.wind} m/s
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      )}
    </div>
  );
}
