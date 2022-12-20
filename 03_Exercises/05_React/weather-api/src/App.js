import mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import partlycloudy from "./images/weather-icons/partlycloudy.svg";
import clear from "./images/weather-icons/clear.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="first">
        <input type="text" name="city" id="city" defaultValue="london" />
        <input type="submit" name="search" id="search" value="FIND WEATHER" />
      </header>
      <div className="second">
        <img src={mostlycloudy} alt="mostlycloudy" className="mostlycloudy" />
        <div className="half">
          <h2>overcast clouds</h2>
          <div className="blue">
            <p className="bigger">
              <span className="bolded">Temperature</span> 10°C to 11°C{" "}
            </p>
            <p className>
              <span className="bolded">Humidity</span> 78%{" "}
              <span className="bolded">Pressure</span> 1008.48
            </p>
          </div>
        </div>
        <div className="col">
          <div className="hours">
            <time>03:00</time>
            <time>06:00</time>
            <time>09:00</time>
            <time>12:00</time>
            <time>15:00</time>
            <time>18:00</time>
            <time>21:00</time>
          </div>
          <div className="images">
            <img
              src={partlycloudy}
              alt="partlycloudy"
              className="partlycloudy"
            />
            <img
              src={partlycloudy}
              alt="partlycloudy"
              className="partlycloudy"
            />
            <img src={clear} alt="clear" className="clear" />
            <img src={clear} alt="clear" className="clear" />
            <img src={clear} alt="clear" className="clear" />
            <img src={clear} alt="clear" className="clear" />
            <img
              src={partlycloudy}
              alt="partlycloudy"
              className="partlycloudy"
            />
          </div>
          <div className="Temp">
            <span>8°C</span>
            <span>9°C</span>
            <span>14°C</span>
            <span>17°C</span>
            <span>18°C</span>
            <span>16°C</span>
            <span>13°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
