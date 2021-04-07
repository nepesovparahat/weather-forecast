import React from "react";
import "./App.css";
import MainWeather from './components/MainWeather';
import WeatherBox from "./components/WeatherBox";

const App = ( props) => {
  return (
    <div className="App">
    <header className="header-weather">
        <MainWeather/> 
    </header>
</div>
  )
};

export default App;
