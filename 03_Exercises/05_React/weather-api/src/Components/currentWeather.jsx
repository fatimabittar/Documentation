import React from "react";
import HourWeather from "./hourWeather";
import partlycloudy from "../images/weather-icons/partlycloudy.svg";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import clear from "../images/weather-icons/clear.svg";
import rain from "../images/weather-icons/rain.svg";
import storm from "../images/weather-icons/storm.svg";
import drizzle from "../images/weather-icons/drizzle.svg";
import snow from "../images/weather-icons/snow.svg";
import fog from "../images/weather-icons/fog.svg";
import "../styles/currentWeather.css";

function CurrentWeather(props) {
  if (props.list.length === 0) {
    return <div className="weather-container"></div>;
  }

  const { list } = props;
  const currentWeather = list[0];
  const hourWeatherList = list.slice(1, 8);

  let currentWeatherImg;
  const id = currentWeather.weather[0].id;
  switch (true) {
    case id < 300:
      currentWeatherImg = storm;
      break;
    case id < 500:
      currentWeatherImg = drizzle;
      break;
    case id < 600:
      currentWeatherImg = rain;
      break;
    case id < 700:
      currentWeatherImg = snow;
      break;
    case id < 800:
      currentWeatherImg = fog;
      break;
    case id === 800:
      currentWeatherImg = clear;
      break;
    case id === 801:
      currentWeatherImg = partlycloudy;
      break;
    case id < 806:
      currentWeatherImg = mostlycloudy;
      break;
    default:
      break;
  }

  return (
    <div className="weather-container">
      <div className="current-weather-container">
        <img
          src={currentWeatherImg}
          alt={currentWeather.weather[0].main}
          className="current-weather-img"
        />
        <h2>{currentWeather.weather[0].description}</h2>
        <div className="blue">
          <p className="bigger">
            <strong>Temperature</strong>{" "}
            {Math.round(currentWeather.main.temp_min)}°C to&nbsp;
            {Math.round(currentWeather.main.temp_max)}°C
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
            imageId={item.weather[0].id}
            temperature={Math.round(item.main.temp)}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentWeather;
