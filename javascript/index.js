function updateInterval() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDate = losAngelesElement.querySelector(".date")
let losAngelesTime = losAngelesElement.querySelector(".time")
let losAngelesTimeZone = moment().tz("America/Los_Angeles");

losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
losAngelesTime.innerHTML = `${losAngelesTimeZone.format("h:mm:ss [<small>]A[</small]>")} `;


let madridElement = document.querySelector("#madrid");
let madridDate = madridElement.querySelector(".date")
let madridTime = madridElement.querySelector(".time")
let madridTimeZone = moment().tz("Europe/Madrid");

madridDate.innerHTML = madridTimeZone.format("MMMM Do YYYY");
  madridTime.innerHTML = `${madridTimeZone.format("h:mm:ss [<small>]A[</small]>")} `;

}

updateInterval();
setInterval(updateInterval, 1000);