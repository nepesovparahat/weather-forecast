import axios from "axios";

const getWeatherByCity = async (city) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  // TODO : include conutry in search
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`
    );
    if (res.data.cod === "200") {
      return res.data;
    } else {
      return "Error";
    }
  } catch (error) {
    //TODO : distinguish these error messages
    return "Error";
  }
};

export default getWeatherByCity;
