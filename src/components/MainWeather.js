import React, { useState } from "react";
import getWeatherByCity from "../api/server";
import WeatherBox from "./WeatherBox";

const MainWeather = () => {
  const [days, setDays] = useState([]);
  const [error, setError] = useState("");
  const [Countr, setCountr] = useState("");
  const [cityName, setCityName] = useState("");

  const getWeather = async (e) => {
    e.persist();
    const eventkey = e.which ? e.which : e.keyCode;
    const city = e.target.value;
    const response =  await getWeatherByCity(city);

    if ((response === "Error") && (eventkey === 13)) {
      e.target.placeholder = "City was not found, try again...";
      e.target.value='';
      
    } 
    else {
      if (eventkey === 13) {
        // added by selecting 5 days from the weather forecast object
        const dayArr = [];
        for (let i = 0; i < Object.keys(response.list).length; i++) {
          if (i % 8 === 0)
            dayArr.push({
              weather_desc: response.list[i + 1].weather[0].description,
              date: response.list[i + 1].dt_txt,
              icon: response.list[i + 1].weather[0].icon,
              temp: response.list[i + 1].main.temp,
            });
        }
        
        e.target.placeholder = "Enter Country or City name...";
        setError("");
        setCountr(response.city.country);
        setCityName(response.city.name);
        setDays(dayArr);
        e.target.value = "";
      }
    }
  };

  // With the map function, I deleted the first object of the 5-day weather forecast object and added it to divs.
  const WeatherBoxes = () => {
    const weatherBoxes = days.map((day, index) => (
      <li key={index}>
        <WeatherBox {...day} />
      </li>
    ));

    return <ul className="weather-box-list">{weatherBoxes}</ul>;
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
            placeholder = "Enter Country or City name..."
            onKeyPress={getWeather}
          />
        </div>
        <div>{error ? <p className="error">{error}</p> : null}</div>
        <h1>
          {cityName} {Countr}
        </h1>
      </div>
      <div>
        <WeatherBoxes />
      </div>
    </>
  );
};

export default MainWeather;
