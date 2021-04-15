import axios from "axios";


const getWeatherByCity = async (city) => {
  // TODO : include conutry in search
  const API_KEY = (process.env.REACT_APP_API_KEY).replace(";",'');
  const KEY =(API_KEY.slice(1,-1));

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${KEY}`
    );
    if (res.data.cod === "200") {
      return res.data;
    } 
    else {
      return "Error";
    }
  }
  catch (error) {
    //TODO : distinguish these error messages
    return "Error";
  }
};

export default getWeatherByCity;
