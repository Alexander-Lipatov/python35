
function createNowTime() {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

function renderWeather(weatherData) {
  const weatherBlock = document.querySelector("#weatherInfo");
  weatherBlock.hidden = false;
  weatherBlock.style.display = "flex";
  weatherBlock.innerHTML = `
    <div class="location-n-date">
        <h2>${weatherData.name}</h2>
        <h2>${new Date(weatherData.dt * 1000).toLocaleDateString()}</h2>
    </div>
    <div class="detailWeather">
        <div class="imageInfo">
            <span>${weatherData.weather[0].main}</span>
            <div class="weather-icon">
            <img
                src="${getImageWeather(weatherData.weather[0].icon)}"
                alt=""
            />
            </div>
        </div>
        <div class="tempInfo">${weatherData.main.temp.toFixed()}&deg;С</div>
        <div class="otherInfo">
            <div><span>Min temperature</span><span>${weatherData.main.temp_min.toFixed()}&deg;С</span></div>
            <div><span>Max temperature</span><span>${weatherData.main.temp_max.toFixed()}&deg;С</span></div>
            <div><span>Wind speed(km/h)</span><span>${
              weatherData.wind.speed
            }</span></div>
            </ul>
        </div>
    </div>
    `;
}

function renderHourlyWeather(hourlyWeather = []) {
  const weatherDayliBlock = document.getElementById("weatherInfoDetail");
  weatherDayliBlock.style.display = "flex";

  let html = `
  <h2 style="margin:30px 0">Weather</h2>
  <div style="display:flex; gap:20px">
  <div class="weatherItem">
  <p>Время:</p>
  <div style="height:100px"></div>
  <p>Forecast:</p>
  <p>Temp:</p>
  <p>Wind:</p>
  </div>
  `;

  hourlyWeather.forEach((hourlyWeatherItem) => {
    html += `
      <div class="weatherItem">
      <p>${new Date(hourlyWeatherItem.dt_txt).getHours()}:00</p>
      <img src="${getImageWeather(
        hourlyWeatherItem.weather[0].icon
      )}" alt="Погодная иконка">
          <p>${hourlyWeatherItem.weather[0].main}</p>
          <p>${hourlyWeatherItem.main.temp.toFixed()}°C</p>
          <p>${hourlyWeatherItem.wind.speed} m/s</p>
          </div>
          `;
  });
  html += `</div>`;
  weatherDayliBlock.innerHTML = html;
  weatherDayliBlock.hidden = false;
}

function renderError(error) {
  alert(error)
}
