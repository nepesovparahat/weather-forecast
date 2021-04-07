import axios from "axios";
const getWeatherByCity = async (city) => {
  // TODO : include conutry in search
  const API_KEY = "60d076e532e1d9f79ec8469899293948";
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`
    );
    if(res.data.cod ==='200'){
      console.log(res.data)
      return res.data;
    }
    else{
      return "Error"
    }
   
  } catch (error) {
    //TODO : distinguish these error messages
    return "Error";
  }
};
export default getWeatherByCity;
