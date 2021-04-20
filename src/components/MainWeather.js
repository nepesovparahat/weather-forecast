import React, { useState } from "react";
import getWeatherByCity from "../api/server";
import WeatherBox from "./WeatherBox";
import { useStyles } from "react-styles-hook";

const MainWeather = () => {
  const [days, setDays] = useState([]);
  const [error, setError] = useState("");
  const [Countr, setCountr] = useState("");
  const [cityName, setCityName] = useState("");

  const getWeather = async (e) => {
    e.persist();
    const eventkey = e.which ? e.which : e.keyCode;
    const city = e.target.value;
    const response = await getWeatherByCity(city);

    if (response === "Error" && eventkey === 13) {
      e.target.classList.add("loading");
      e.target.placeholder = "City was not found, try again...";
      e.target.value = "";
      setError("Error");
    } else {
      if (eventkey === 13) {
        e.target.classList.add("loading");
        // added by selecting 5 days from the weather forecast object
        const dayArr = [];
        for (let i = 0; i < Object.keys(response.list).length; i++) {
          if (i % 8 === 0)
            dayArr.push({
              weather_desc: response.list[i].weather[0].description,
              date: response.list[i].dt_txt,
              icon: response.list[i].weather[0].icon,
              temp: response.list[i].main.temp,
            });
        }
        e.target.placeholder = "Enter Country or City name...";
        setError("");
        setCountr(response.city.country);
        setCityName(response.city.name);
        setDays(dayArr);
        e.target.value = "";
      }

      setTimeout(() => {
        e.target.classList.remove("loading");
      }, 2000);
    }
  };

  const style = useStyles({
    inputStyle: {
      top: cityName ? "-218px" : "20px",
      width: "600px",
      display: "inline-block",
      padding: "10px 0px 10px 30px",
      lineHeight: "20px",
      position: "relative",
      borderRadius: "20px",
      outline: "none",
      fontSize: "20px",
      transition: "all 0.5s ease-out",
      boxShadow: error
        ? "inset 0 0 0 2px #fff, 0 0 0 3px #fff, 2px -2px 20px red,-2px 2px 20px red"
        : null,
    },
  });
  // With the map function, I showed 5-day weather forecast object and added it to divs.
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
            style={style.inputStyle}
            placeholder="Enter Country or City name..."
            onKeyPress={getWeather}
          />
        </div>
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
