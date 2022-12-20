import React from "react";

import HourWeather from "./hourWeather";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import "../styles/currentWeather.css";

function CurrentWeather() {
  const currentWeatherImg = mostlycloudy;

  return (
    <div className="weather-container">
      <div className="current-weather-container">
        <img
          src={currentWeatherImg}
          alt="current weather"
          className="current-weather-img"
        />
        <h2>overcast clouds</h2>
        <div className="blue">
          <p className="bigger">
            <strong>Temperature</strong> 10°C to 11°C
          </p>
          <p>
            <strong>Humidity</strong> 78% <strong>Pressure</strong> 1008.48
          </p>
        </div>
      </div>
      <div className="hour-weathers-container">
        <HourWeather hour="03:00" imageName="partlycloudy" temperature="8°C" />
        <HourWeather hour="06:00" imageName="partlycloudy" temperature="9°C" />
        <HourWeather hour="09:00" imageName="clear" temperature="14°C" />
        <HourWeather hour="12:00" imageName="clear" temperature="17°C" />
        <HourWeather hour="15:00" imageName="clear" temperature="18°C" />
        <HourWeather hour="18:00" imageName="clear" temperature="16°C" />
        <HourWeather hour="21:00" imageName="partlycloudy" temperature="13°C" />
      </div>
    </div>
  );
}

export default CurrentWeather;
