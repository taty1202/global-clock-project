function updateInterval() {

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date")
    let losAngelesTime = losAngelesElement.querySelector(".time")
    let losAngelesTimeZone = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = `${losAngelesTimeZone.format("h:mm:ss [<small>]A[</small]>")} `;
  }

  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDate = madridElement.querySelector(".date")
    let madridTime = madridElement.querySelector(".time")
    let madridTimeZone = moment().tz("Europe/Madrid");

    madridDate.innerHTML = madridTimeZone.format("MMMM Do YYYY");
    madridTime.innerHTML = `${madridTimeZone.format("h:mm:ss [<small>]A[</small]>")} `;

  }

  let buenosAiresElement = document.querySelector("#buenos-aires");
  if (buenosAiresElement) {
    let buenosAiresDate = buenosAiresElement.querySelector(".date")
    let buenosAiresTime = buenosAiresElement.querySelector(".time")
    let buenosAiresTimeZone = moment().tz("America/Buenos_Aires");

    buenosAiresDate.innerHTML = buenosAiresTimeZone.format("MMMM Do YYYY");
    buenosAiresTime.innerHTML = `${buenosAiresTimeZone.format("h:mm:ss [<small>]A[</small]>")} `;

  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date")
    let sydneyTime = sydneyElement.querySelector(".time")
    let sydneyTimeZone = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = sydneyTimeZone.format("MMMM Do YYYY");
    sydneyTime.innerHTML = `${sydneyTimeZone.format("h:mm:ss [<small>]A[</small]>")} `;

  }
  
}


function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-time") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let time = moment().tz(cityTimeZone);
  let citiesSelect = document.querySelector("#cities");
  citiesSelect.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${time.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${time.format("h:mm:ss")} <small>${time.format("A")}</small></div>
</div> <a href="/"> Back to Main Page</a>`;
}

updateInterval();
setInterval(updateInterval, 1000);


let citiesElement = document.querySelector("#city");

citiesElement.addEventListener("change", updateCity);