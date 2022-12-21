import React from 'react';
import '../styles/search.css';

function Search(props) {
  // const [city, setCity] = useState('');

  return (
    <div className="search-container">
       <header >
        <input type="text" name="city" id="city" placeholder="Type in a city" onChange={(event) => props.setCity(event.target.value)} autoComplete='off'/>
        <input type="submit" name="search" id="search" value="FIND WEATHER" onClick={() => props.findWeather()}/>
      </header>
    </div>
  )
}
export default Search;
