import React, { useState } from "react";
import getWeatherByCity from "../api/server";
import WeatherBox from "./WeatherBox";
const MainWeather = () => {
  const [days, setDays] = useState([]);
  const [error, setError] = useState("");
  const getWeather = async (e) => {
    e.persist();
    const evenkey = e.which ? e.which : e.keyCode;
    const city = e.target.value;
    const response = await getWeatherByCity(city);
    if (evenkey === 13) {
      const city = response.city.name;
      console.log(city);
      // added by selecting 5 days from the weather forecast object
      const dayArr = [];
      for (let i = 0; i < Object.keys(response.list).length; i++) {
        if (i % 8 === 0)
          dayArr.push({
            date: response.list[i + 1].dt_txt,
            icon: response.list[i + 1].weather[0].icon,
            temp: response.list[i + 1].main.temp,
            max: response.list[i + 1].main.temp_max,
          });
      }
      setError("");

      setDays(dayArr);
    } else {
      setError("Error looking up weather. Please try again.");
    }
  };
  // With the map function, I deleted the first object of the 5-day weather forecast object and added it to divs.
  const WeatherBoxes = () => {
    const weatherBoxes = days.slice(1).map((day, index) => (
      <li key={index}>
        <WeatherBox {...day} />
      </li>
    ));
    return <ul className="weather-box-list">{weatherBoxes}</ul>;
  };
  console.log(days, "dddd  ");
  return (
    <>
      <div className="main">
        <div className="inner-main">
          <input
            type="text"
            className="city-input"
            name="city"
            id="inputCity"
            onKeyPress={getWeather}
            placeholder="Enter a City name..."
          />
          <div className="today"></div>
        </div>
        <div>{error ? <p className="error">{error}</p> : null}</div>
      </div>
      <div>
        <WeatherBoxes />
      </div>
    </>
  );
};
export default MainWeather;
