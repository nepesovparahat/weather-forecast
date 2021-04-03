import React from "react";
import "./App.css";
import MainWeather from './components/MainWeather';
import WeatherBox from './components/WeatherBox';

const App = () => {
  return (
    <div className="App">
    <header className="header-weather">
        <MainWeather/> 
    </header>
    <div className="box-weather">  
    <WeatherBox/>
    <WeatherBox/>
    <WeatherBox/>
    <WeatherBox/>
    <WeatherBox/>
    <WeatherBox/>
    </div>
</div>
  )
};

export default App;
