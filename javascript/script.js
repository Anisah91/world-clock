// Doha Time

function updateTime() {
  //Doha
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

// Gaza Time

let gazaElement = document.querySelector("#gaza");
if (gazaElement) {
  let gazaDateElement = document.querySelector("#gaza .date");
  let gazaTime = moment().tz("Asia/Gaza");
  let gazaTimeElement = document.querySelector("#gaza .time");
  gazaTimeElement.innerHTML = gazaTime.format("h:mm:ss[<small>] A [</small>]");
  gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
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
      </div> <a href "/"> Back to Homepage 🌍 </a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
