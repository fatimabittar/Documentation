import "./App.css";
import Search from "./Components/search";
import CurrentWeather from "./Components/currentWeather";
import FakeWeather from "./data/FakeWeather.json";

function App() {
  return (
    <div className="container">
      <Search />
      <CurrentWeather list={FakeWeather.list} />
    </div>
  );
}
export default App;
