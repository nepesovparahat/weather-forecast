## Weather Forecast App

### Find the current weather forecast for any city or location in the world for 5 days with this simple little web app.

> ### Project : [Live Demo](https://friendly-poitras-bd33ab.netlify.app/)

---

## Screenshots Weather App

![Screenshot from 2021-04-16 18-57-53](https://user-images.githubusercontent.com/67821216/115051899-faf52000-9ee5-11eb-9fde-3fbb07a92f38.png)

##

---

## Technologies

**Builded with :**

- [ReactJS](https://reactjs.org/docs/create-a-new-react-app.html) (hooks) version : 17.0.1
- [Axios](https://www.npmjs.com/package/axios) version : 0.21.1
- [React Styles Hook](https://www.npmjs.com/package/react-styles-hook) version : 1.1.2
- [OpenWeatherMap](https://openweathermap.org/api) version : 2.0

---

## Project Procedure

In my process of learning ReactJS, I always make a new application to add information to my knowledge and to consolidate that knowledge practically. Based on these, I made a small weather forecast application. This app has helped me gain important information about ReactJS and learn where and how to use it. For example, it led me to learn more about the props used in react.
In this project, used the most used `axios` for HTTP queries, and the API address of OpenWeatherMap, which displays a 5-day forecast to display weather forecast information. When it comes to the design of the application, pure css was used. Furthermore, `react-styles-hook` i used for animation and css operator in the input area.

##

---

## Environment Variables

#### How to run the application locally:

- Go to OpenWeatherMap and sign up to get a free API key.
- Next, you will need to set your environment variables and secret keys like `API KEYS`, which will be ignored by git. To do this, go to the project root directory and create an .env file.
- Add `REACT_APP_API_KEY = YOUR_API_KEY ` line to the file. This will allow you to access API_KEY as a global variable from anywhere on the client. .env the file is already set to .gitignor and will be ignored by git.

##

---

## Setup Project :

```sh
$ cd weather-forecast
$ npm install
$ npm start
```
