import React, { useState } from "react";
import getWeatherByCity from "../api/server";
import WeatherBox from "./WeatherBox";
const MainWeather = () => {
  const [city, setCity] = useState("");
  const [days, setDays] = useState([]);
  const [dayNames, setDayNames] = useState([]);
  const [error, setError] = useState("");

  const getWeather = async () => {
    const response = await getWeatherByCity(city);
    if (response === "Error") {
      setError("Error looking up weather. Please try again.");
      setDays([]);
    } 
    else {
      setError("");
      const city = response.city.name;
      console.log(city)
      //added 5 days corresponding to 15:00 of the day in the list in the weather forecast object
      const dayArr = [];
      for (let i = 0; i < Object.keys(response.list).length; i++) {
        if (i % 8 === 0)
          dayArr.push({
            date: response.list[i].dt_txt,
            weather_desc: response.list[i].weather[0].description,
            icon: response.list[i].weather[0].icon,
            temp_max: response.list[i].main.temp_max,
            temp_min: response.list[i].main.temp_min,
          });
      }
      setDays(dayArr);
    }
    
    const daysWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const WeekDaysNext = [];
    for (let i = -1; i < 6; i++) {
      WeekDaysNext.push(
        daysWeek[new Date(Date.now() + i * 24 * 60 * 60 * 1000).getDay()]
      );
    }
    setDayNames(WeekDaysNext);
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
  console.log(days)
  return (
    <>
      <div className="main">
        <div className="inner-main">
          <input
            type="text"
            className="city-input"
            name="city"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a City name..."
          />
          <div>
            <button className="search" onClick={getWeather}>
              Search
            </button>
          </div>
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
