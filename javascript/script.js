// Doha Time

function updateDohaTime() {
  let dohaElement = document.querySelector("#doha");
  let dohaDateElement = document.querySelector("#doha .date");
  let dohaTime = moment().tz("Asia/Qatar");
  let dohaTimeElement = document.querySelector("#doha .time");
  dohaTimeElement.innerHTML = dohaTime.format("h:mm:ss [<small>] A [</small>]");
  dohaDateElement.innerHTML = dohaTime.format("MMMM Do YYYY");
}
updateDohaTime();
setInterval(updateDohaTime, 1000);

// Gaza Time
function updateGazaTime() {
  let gazaElement = document.querySelector("#gaza");
  let gazaDateElement = document.querySelector("#gaza .date");
  let gazaTime = moment().tz("Asia/Gaza");
  let gazaTimeElement = document.querySelector("#gaza .time");
  gazaTimeElement.innerHTML = gazaTime.format("h:mm:ss[<small>] A [</small>]");
  gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
}
updateGazaTime();
setInterval(updateGazaTime, 1000);
