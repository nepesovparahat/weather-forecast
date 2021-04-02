import React, { useState } from "react";
import getWeatherByCity from "../api/server";
const MainWeather = () => {
  let [city, setCity] = useState("");

  async function getWeather() {
    const response = await getWeatherByCity(city);
  }
  return (
    <div className="main">
      <div className="inner-main">
        <input
          type="text"
          className="city-input"
          name="city"
          id="inputCity"
          onKeyPress={getWeather}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a City name..."
        />
        <div className="today"></div>
      </div>
    </div>
  );
};
export default MainWeather;
