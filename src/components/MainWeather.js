import React, { useState } from "react";
import getWeatherByCity from "../api/server";
import WeatherBox from "./WeatherBox";
const MainWeather = () => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState({});
  const [days, setdays] = useState({});
  const [daysName, setDaysname] = useState([]);
  const [error, setError] = useState("");
  const daysWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
    "sunday",
  ];
  //added 5 days corresponding to 15:00 of the day in the list in the weather forecast object
  const getDayIndices = () => {
    let dayIndices = [];
    dayIndices.push(0);
    for (let i = 1; i < 40; i++) {
      if (i % 8 === 0) dayIndices.push(i);
    }
    return dayIndices;
  };
  const getWeather = async () => {
    const response = await getWeatherByCity(city);
    if (response === "Error") {
      setError("Error looking up weather.Please try again");
    } else {
      setError("");

      // set day names

      const WeekDaysNext = [];
      for (let i = -1; i < 4; i++) {
        WeekDaysNext.push(
          daysWeek[new Date(Date.now() + i * 24 * 60 * 60 * 1000).getDay()]
        );
      }
      setDaysname(WeekDaysNext);

      //added the weather forecast information days into the object

      const cityName = response.city.name;
      const days = [];
      const dayIndices = getDayIndices();
      for (let i = 0; i < 5; i++) {
        days.push({
          date: response.list[dayIndices[i]].dt_txt,
          weather_desc: response.list[dayIndices[i]].weather[0].description,
          icon: response.list[dayIndices[i]].weather[0].icon,
          temp: response.list[dayIndices[i]].main.temp,
        });
      }
      setCityName({
        cityName: cityName,
      });
      setdays({
        days: days,
      });
    }
  };
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a City name..."
          />
          <div className="today"></div>
        </div>
        <div>{error ? <p className="error">{error}</p> : null}</div>
      </div>
    </>
  );
};
export default MainWeather;
