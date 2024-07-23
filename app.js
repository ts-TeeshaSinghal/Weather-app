const apiKey = "b5e544d19efcca6d3c380329ac8ea7b1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let box = document.querySelector(".search-box");
let btn = document.querySelector(".search-btn");

btn.addEventListener("click", async () => {
  let city = document.querySelector(".search-box").value;
  let data = await checkWeather(city);
  updateWeather(data);
});
function updateWeather(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  let weatherCondition = data.weather[0].main.toLowerCase();
  if (weatherCondition == "clouds") {
    let img = document.querySelector(".weather-icon");
    img.src = "./images/clouds.png";
  } else if (weatherCondition == "clear") {
    let img = document.querySelector(".weather-icon");
    img.src = "./images/clear.png";
  } else if (weatherCondition == "drizzle") {
    let img = document.querySelector(".weather-icon");
    img.src = "./images/drizzle.png";
  } else if (weatherCondition == "mist") {
    let img = document.querySelector(".weather-icon");
    img.src = "./images/mist.png";
  } else if (weatherCondition == "snow") {
    let img = document.querySelector(".weather-icon");
    img.src = "./images/snow.png";
  } else if (weatherCondition == "rain") {
    let img = document.querySelector(".weather-icon");
    img.src = "./images/rain.png";
  }
  document.querySelector(".weather").style.display = "block";
}

async function checkWeather(city) {
  try {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
  //   console.log(data);
}
