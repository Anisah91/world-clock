// Doha Time

function updateDohaTime() {
  let dohaElement = document.querySelector("#doha");
  if (dohaElement) {
    let dohaDateElement = document.querySelector("#doha .date");
    let dohaTime = moment().tz("Asia/Qatar");
    let dohaTimeElement = document.querySelector("#doha .time");
    dohaTimeElement.innerHTML = dohaTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
    dohaDateElement.innerHTML = dohaTime.format("MMMM Do YYYY");
  }
}

updateDohaTime();
setInterval(updateDohaTime, 1000);

// Gaza Time
function updateGazaTime() {
  let gazaElement = document.querySelector("#gaza");
  if (gazaElement) {
    let gazaDateElement = document.querySelector("#gaza .date");
    let gazaTime = moment().tz("Asia/Gaza");
    let gazaTimeElement = document.querySelector("#gaza .time");
    gazaTimeElement.innerHTML = gazaTime.format(
      "h:mm:ss[<small>] A [</small>]"
    );
    gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
  }
}
updateGazaTime();
setInterval(updateGazaTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("/", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" >
        <div>
          <h2>${cityTimeZone}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    " A "
  )}</small>
        </div>
      </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
