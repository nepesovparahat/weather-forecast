import axios from 'axios';
const cities = require('cities.json');
const getWeatherByCity = async(name, country) => {
    // TODO : include conutry in search
    const found = cities.filter(city => 
        city.name.toLowerCase()===name.toLowerCase());
    const API_KEY = '60d076e532e1d9f79ec8469899293948';
    if (found[0]){
        const lat = found[0].lat;
        const lon = found[0].lng;

        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&APPID=${API_KEY}`);
            return res.data;
        }
        catch (error) {
            //TODO : distinguish these error messages
            return "Error";
        }

    }
    else{
         //TODO : distinguish these error messages
         return "Error";
    }
}
export default getWeatherByCity;