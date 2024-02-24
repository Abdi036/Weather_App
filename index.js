// const inputValue = document.querySelector(".inputPlace");
// const searchBtn = document.querySelector(".btn");
// const weatherImg = document.querySelector(".weather_image");
// // const cityName = document.querySelector(".city_name");
const cityName = "addis ababa";

const API_key = "daeea96cab56a856c044a0803a6c59fa";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;

// creating async await function

async function weatherCheck() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
}
weatherCheck();
