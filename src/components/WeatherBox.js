import React from "react";

const WeatherBox = () => {
  const weatherTemp = (temp) => {
    const wtemp = Math.round((5 / 9) * (temp - 32)) + "°";
    return wtemp;
  };
  return (
    <div className="weather-box">
      <h1>day</h1>
      <div className="div-temp">
        <span className="temp">High: 23'</span>
        <span className="temp">Low: 20' </span>
      </div>
    </div>
  );
};
export default WeatherBox;
