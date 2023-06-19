function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if(hours < 10) {
    hours = `0{hours}`;
  }
let minutes = date.getMinutes();
if (minutes <10) {
  minutes = `0{minutes}`
}
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let day = days[date.getDay];
  return `${days} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
 let date = new Date(timestamp * 1000);
 let day = date.getDay();
 let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 return days[day];
}

function displayForestcasy(response) {
  let forecast = response.data.daily;

let forecastElement = document.querySelector("#forecast");

let forecastHTML = `<div class=row>`;
forecast.forEach(function(forecastDay, index) {
  if (index < 6) {
    forecastHTML =
    forecastHTML +

<div class="col-2">
<div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
<img 
src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.pnp"
alt=""
width=""
/>
<div class="weather-forecast-temperatures">
  <span class
</div>
</div>
  }
}

}

function searchCity(city) {
  let sheKey = "9oa4e130b348d430501cf5a6aeaaa6ft";
  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${sheKey}&units=metric`;
  axios.get(sheUrl).then(test);
}

function getSubmit(event) {
  event.preventDefault();
  let input = document.querySelector(".form-control");
  searchCity(input.value);
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let myKey = "9oa4e130b348d430501cf5a6aeaaa6ft";
  let geoUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${myKey}&units=metric`;

  axios.get(geoUrl).then(test);

  let form = document.querySelector("#search");
  form.addEventListener("submit", getSubmit);
}

navigator.geolocation.getCurrentPosition(handlePosition);