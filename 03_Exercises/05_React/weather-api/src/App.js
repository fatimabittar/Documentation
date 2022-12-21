import "./App.css";
import Search from "./Components/search";
import CurrentWeather from "./Components/currentWeather";
import { useState } from "react";

function App() {
  const apiKey='d2355f51d98a6e2a3db61c220bd173eb';
  const [city, setCity] = useState('');
  const [list, setList] = useState([]);
  
  const findWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(res => {
      setList(res.list);
    });
  };

  return (
    <div className="container">
      <Search setCity={setCity} findWeather={findWeather} />
      <CurrentWeather list={list} />
    </div>
  );
}
export default App;
