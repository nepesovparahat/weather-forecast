import React, { useState } from "react";
import getWeatherByCity from "../api/server";
import WeatherBox from "./WeatherBox";
import { useStyles } from 'react-styles-hook';

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
      setError("Error")
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
  const style = useStyles({
    inputStyle: {
        top: cityName ? '-120px': '100px',
        width:'600px',
        display: 'inline-block',
        padding: '10px 0px 10px 30px',
        lineHeight: '20px',
        position: 'relative',
        borderRadius: '20px',
        outline: 'none',
        fontSize: '20px',
        transition: 'all 0.5s ease-out',
        boxShadow: !error ? 'inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,-3px 3px 30px #10abff': 'inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #ea1b9b,-3px 3px 30px #f70101'
    }
    
  })
  

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
            style={style.inputStyle}
            name="city"
            className="city-name"
            id="inputCity"
            placeholder = "Enter Country or City name..."
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
