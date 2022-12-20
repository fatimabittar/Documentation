import React from 'react';
import '../styles/search.css';

function Search() {
  return (
    <div className="search-container">
       <header >
        <input type="text" name="city" id="city" placeholder="Type in a city" />
        <input type="submit" name="search" id="search" value="FIND WEATHER" />
      </header>
    </div>
  )
}
export default Search;