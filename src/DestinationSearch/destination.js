import React, { useState } from "react";
import Cities from "./cities.json";
import "./destination.css";

const Destination = () => {
  const [city, setCity] = useState("");
  const searchCitiesList = (event) => {
    setCity(event.target.value);
  };
  const filteredList = Cities.filter((eachCityName) =>
    eachCityName.name.toLowerCase().includes(city.toLowerCase())
  );
  return (
    <div className="app-container">
      <h1 className="heading">Destination Search</h1>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search For a Place"
          className="input-element"
          value={city}
          onChange={searchCitiesList}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          className="search-image"
          alt="search-icon"
        />
      </div>
      <hr className="horizontal-line" />
      <hr className="horizontal-line" />
      <div className="cities-bg-container">
        <ul className="cities-container">
          {filteredList.map((eachCity) => {
            return (
              <li className="city" key={eachCity.index}>
                <img
                  src={eachCity.imageUrl}
                  className="city-image"
                  alt="city-image"
                />
                <h3>{eachCity.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Destination;
