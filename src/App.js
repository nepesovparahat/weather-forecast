import React from "react";
import "./App.css";
import MainWeather from "./components/MainWeather";

const App = () => {
  
  return (
    <div className="App">
      <header className="header-weather">
        <MainWeather />
      </header>
    </div>
  );
};

export default App;
