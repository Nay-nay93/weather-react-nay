import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
  }
  
  useEffect(() => {
      let apiKey = "13c9444ao05d100014e814t7f46bd8da";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleForecastResponse);

  }, [props.coordinates]);

  if (!forecast) {
    return null;
  }

  return(
    <div className="WeatherForecast row">
      {forecast.slice(0, 5).map((day, index) => (
        <div className="col" key={`${index}-${props.unit}`}>
          <WeatherForecastPreview data={day} unit={props.unit} />
        </div>
      ))}
    </div>
  );
}
