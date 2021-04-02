import React from 'react';
import MainWeather from './MainWeather';
import WeatherBox from './WeatherBox';

 const Home =() => {
 
  return (
      <div className="App">
          <header className="header-weather">
              <MainWeather>
                  <ul className="weather-box-list">
                      <li><WeatherBox/></li>
                      <li><WeatherBox/></li>
                      <li><WeatherBox/></li>
                      <li><WeatherBox/></li>
                      <li><WeatherBox/></li>
                      <li><WeatherBox/></li>
                      <li><WeatherBox/></li>
                  </ul>
              </MainWeather>
          </header>
      </div>
  );
}
export default Home;
