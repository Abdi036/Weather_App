// const inputValue = document.querySelector(".inputPlace");
// const searchBtn = document.querySelector(".btn");
const Temprature = document.querySelector(".temprature");
const feelsLike = document.querySelector(".feelsLike");
const windSpeed = document.querySelector(".speed");
const Humidity = document.querySelector(".humidity");
const cityName = document.querySelector(".city_name");
const citName = "new york";

const API_key = "daeea96cab56a856c044a0803a6c59fa";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${citName}&appid=${API_key}&units=metric`;

// creating async await function

async function weatherCheck() {
  const res = await fetch(URL);
  const data = await res.json();
  cityName.textContent = data.name;
  Temprature.textContent = data.main.temp + " °C";
  windSpeed.textContent = data.wind.speed + " km/hr";
  feelsLike.textContent = data.main.feels_like;
  Humidity.textContent = data.main.humidity + "%";
}
weatherCheck();
