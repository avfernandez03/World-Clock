

function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = document.querySelector(".date");
      let losAngelesTimeElement = document.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
      
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");  
    }

    let parisElement = document.querySelector("#paris");
    if (parisElement) {
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");
  
      parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
      parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
  
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    <a href="/">Back to main page</a>
    `;
  }
  

updateTime();
setInterval(updateTime, 1000);


let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
