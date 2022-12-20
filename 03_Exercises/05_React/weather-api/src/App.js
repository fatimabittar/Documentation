import mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import partlycloudy from "./images/weather-icons/partlycloudy.svg";
import clear from "./images/weather-icons/clear.svg";
import './App.css';

function App() {
  return (
    <div className='container' >
      <header className='first'>
        <input type="text" name="city" id='city' defaultValue='london'/>
        <input type="submit" name="search" id="search" value="FIND WEATHER" />
      </header>
      <div className='second'>
        <img src={mostlycloudy} alt="mostlycloudy" className='mostlycloudy'/>
        <div className="half">
        <h2>overcast clouds</h2>
        <div className="blue">
        <p className="bigger"><span className="bolded">Temperature</span> 10°C to 11°C </p>
        <p className="smaller"><span className="bolded">Humidity</span> 78% <span className="bolded">Pressure</span> 1008.48</p>
        </div>
        </div>
        <div className="col">
        <div className="hours">
        <p><time>03:00</time></p>
        <p><time>06:00</time></p>
        <p><time>09:00</time></p>
        <p><time>12:00</time></p>
        <p><time>15:00</time></p>
        <p><time>18:00</time></p>
        <p><time>21:00</time></p>
        </div>
          <div className="images">
            <img src={partlycloudy} alt="partlycloudy" className='partlycloudy'/>
            <img src={partlycloudy} alt="partlycloudy" className='partlycloudy'/>
            <img src={clear} alt="clear" className='clear'/>
            <img src={clear} alt="clear" className='clear'/>
            <img src={clear} alt="clear" className='clear'/>
            <img src={clear} alt="clear" className='clear'/>
            <img src={partlycloudy} alt="partlycloudy" className='partlycloudy'/>
          </div>
          <div className="Temp">
        <p><span>8°C</span></p>
        <p><span>9°C</span></p>
        <p><span>14°C</span></p>
        <p><span>17°C</span></p>
        <p><span>18°C</span></p>
        <p><span>16°C</span></p>
        <p><span>13°C</span></p>   
        </div>
          </div>
      </div>
    </div>
  );
}
export default App;
