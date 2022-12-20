import React from "react";
import partlycloudy from "../images/weather-icons/partlycloudy.svg";
import clear from "../images/weather-icons/clear.svg";
import "../styles/hourWeather.css";

function HourWeather(props) {
  const { hour, imageName, temperature } = props;
  let srcImage;

  switch (imageName) {
    case "partlycloudy":
      srcImage = partlycloudy;
      break;
    case "clear":
      srcImage = clear;
      break;
    default:
      break;
  }

  return (
    <div className="hour-weather">
      <time className="hour">{hour}</time>
      <img className="icon" src={srcImage} alt={imageName} />
      <span className="temp">{temperature}</span>
    </div>
  );
}

export default HourWeather;
