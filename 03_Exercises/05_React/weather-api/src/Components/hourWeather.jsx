import React from "react";
import partlycloudy from "../images/weather-icons/partlycloudy.svg";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import clear from "../images/weather-icons/clear.svg";
import rain from "../images/weather-icons/rain.svg";
import storm from "../images/weather-icons/storm.svg";
import drizzle from "../images/weather-icons/drizzle.svg";
import snow from "../images/weather-icons/snow.svg";
import fog from "../images/weather-icons/fog.svg";
import "../styles/hourWeather.css";

function HourWeather(props) {
  const { hour, imageName, imageId, temperature } = props;
  let srcImage;
  switch (true) {
    case imageId < 300:
      srcImage = storm;
      break;
    case imageId < 500:
      srcImage = drizzle;
      break;
    case imageId < 600:
      srcImage = rain;
      break;
    case imageId < 700:
      srcImage = snow;
      break;
    case imageId < 800:
      srcImage = fog;
      break;
    case imageId === 800:
      srcImage = clear;
      break;
    case imageId === 801:
      srcImage = partlycloudy;
      break;
    case imageId < 806:
      srcImage = mostlycloudy;
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
