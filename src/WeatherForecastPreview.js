import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function convertTemperature(celsius) {
    if (props.unit === "fahrenheit") {
      return Math.round((celsius * 9) / 5 + 32);
    }
    return Math.round(celsius);
  }

  function maxTemperature() {
    return `${convertTemperature(props.data.temperature.maximum)}°`;
  }

  function minTemperature() {
    return `${convertTemperature(props.data.temperature.minimum)}°`;
  }

  return (
    <div className="WeatherForecastPreview">
      <div className="forecast-time">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
