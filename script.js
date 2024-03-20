const API = "https://api.openweathermap.org/data/2.5";
const apiKey = "1de964fa331ef918881bb6060fa6bee7";
const weatherForm = document.forms.weather;

weatherForm.onsubmit = (e) => {
  e.preventDefault();
  getWeather(e.srcElement.city.value);
};

async function getWeather(city) {
  const getWeather = await getCurrentWeather(city);
  const getHourly = await getHourlyWeather(city);
  if (getWeather) renderWeather(getWeather);
  if (getHourly) renderHourlyWeather(getHourly.list.slice(1, 7));
  if (!getWeather && !getHourly) renderError('Check city')
}

async function getCurrentWeather(city) {
  const getWeather = await fetch(
    `${API}/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  if (getWeather.ok) {
    return await getWeather.json();
  }
}

async function getHourlyWeather(city) {
  const hourlyWeather = await fetch(
    `${API}/forecast?q=${city}&units=metric&appid=${apiKey}`
  );
  if (hourlyWeather.ok) {
    return await hourlyWeather.json();
  }
}

function getImageWeather(weatherIconCode) {
  return `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
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
