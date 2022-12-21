import React from "react";
import partlycloudy from "../images/weather-icons/partlycloudy.svg";
import clear from "../images/weather-icons/clear.svg";
import rain from "../images/weather-icons/rain.svg";
import clouds from "../images/weather-icons/cloudy.svg";
import "../styles/hourWeather.css";

function HourWeather(props) {
  const { hour, imageName, temperature } = props;
  let srcImage;

  switch (imageName) {
    case "partlycloudy":
      srcImage = partlycloudy;
      break;
    case "Clear":
      srcImage = clear;
      break;
    case "Rain":
      srcImage = rain;
      break;
    case "Clouds":
      srcImage = clouds;
      break;
    default:
      break;
  }

  return (
    <div className="hour-weather">
      <time className="hour">{hour}</time>
      <img className="icon" src={srcImage} alt={imageName} />
      <span className="temp">{temperature}°C</span>
    </div>
  );
}

export default HourWeather;
