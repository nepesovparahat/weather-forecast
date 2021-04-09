import React from "react";

const WeatherBox = (props) => {
  const getImage = (imgName) => {
    return `https://openweathermap.org/img/wn/${imgName}@2x.png`;
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
  for (let i = 0; i < 7; i++) {
    WeekDaysNext.push(
      daysWeek[new Date(Date.now() + (i+1) * 24 * 60 * 60 * 1000).getDay()]
    );
  } 
  const d = new Date(props.date).getDay();
  const getDays = () => {
    for(let i = 0; i< WeekDaysNext.length; i++){
      if(i===d ) return WeekDaysNext[i];
    }
  }
  return (
    <div className="weather-box">
      <span>{getDays(props.date)}</span>
      <img src={getImage(props.icon)} alt="day image" />
      <div className="div-temp">
        <span className="temp">{Math.round(props.temp-273.15)} C° </span>
      </div>
    </div>
  );
};
export default WeatherBox;
