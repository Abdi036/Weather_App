const searchInput = document.querySelector(".inputPlace");
const searchBtn = document.querySelector(".btn");
const infoWrapper = document.querySelector(".info_wrapper");
const Temprature = document.querySelector(".temprature");
const feelsLike = document.querySelector(".feelsLike");
const windSpeed = document.querySelector(".speed");
const Humidity = document.querySelector(".humidity");
const cityName = document.querySelector(".city_name");
const weatherImage = document.querySelector(".weather_image");

// creating async await function
const API_key = "daeea96cab56a856c044a0803a6c59fa";

async function weatherCheck(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const res = await fetch(URL);
  const data = await res.json();

  if (data.cod === "404") {
    alert("Enter a correct city name!");
    return;
  }

  cityName.textContent = data.name;
  Temprature.textContent = data.main.temp + " °C";
  windSpeed.textContent = data.wind.speed + " km/hr";
  feelsLike.textContent = data.main.feels_like + " °C";
  Humidity.textContent = data.main.humidity + "%";

  if (data.weather[0].main == "Clouds") {
    weatherImage.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImage.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImage.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherImage.src = "images/snow.png";
  }
  infoWrapper.style.display = "block";
}
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  weatherCheck(searchInput.value);
  searchInput.value = "";
});
