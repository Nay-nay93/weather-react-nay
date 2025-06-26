import React, {useState} from "react";

export default function WeatherTemperature(props) {
    
    function showFahrenheit(event) {
        event.preventDefault();
        props.setUnit("fahrenheit")
    }
    function showCelsius(event) {
        event.preventDefault();
        props.setUnit("celsius")
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 +32;
    }

    if (props.unit === 'celsius') {
    return (
    <div className="WeatherTemperature">
        <span className="temperature">
            {Math.round(props.celsius)}
        </span>
        <span className="unit">°C |{" "} <a onClick={showFahrenheit}>°F</a></span>
    </div>
    ); 
} else {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(fahrenheit())}
            </span>
            <span className="unit"><a onClick={showCelsius}>°C</a> | °F</span>
        </div>
        ); 
}
}