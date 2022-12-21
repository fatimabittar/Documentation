import React from "react";

import HourWeather from "./hourWeather";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import clear from "../images/weather-icons/clear.svg";
import rain from "../images/weather-icons/rain.svg";
import clouds from "../images/weather-icons/cloudy.svg";
import "../styles/currentWeather.css";

function CurrentWeather(props) {
  const { list } = props;
  const currentWeather = list[0];
  const hourWeatherList = list.slice(1, 8);

  let currentWeatherImg;
  switch (currentWeather.weather[0].main) {
    case "mostlycloudy":
      currentWeatherImg = mostlycloudy;
      break;
    case "Clear":
      currentWeatherImg = clear;
      break;
    case "Rain":
      currentWeatherImg = rain;
      break;
    case "Clouds":
      currentWeatherImg = clouds;
      break;
    default:
      break;
  }
  return (
    <div className="weather-container">
      <div className="current-weather-container">
        <img
          src={currentWeatherImg}
          alt="current weather"
          className="current-weather-img"
        />
        <h2>{currentWeather.weather[0].description}</h2>
        <div className="blue">
          <p className="bigger">
            <strong>Temperature</strong>{" "}
            {Math.round(currentWeather.main.temp_min - 273.15)}°C to&nbsp;
            {Math.round(currentWeather.main.temp_max - 273.15)}°C
          </p>
          <p>
            <strong>Humidity</strong> {currentWeather.main.humidity}%&nbsp;
            <strong>Pressure</strong> {currentWeather.main.pressure}
          </p>
        </div>
      </div>
      <div className="hour-weathers-container">
        {hourWeatherList.map((item) => (
          <HourWeather
            hour={item.dt_txt.substring(11, 16)}
            imageName={item.weather[0].main}
            temperature={Math.round(item.main.temp - 273.15)}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentWeather;
