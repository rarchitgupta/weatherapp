const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
let errorP = document.querySelector("#error");
let locationP = document.querySelector("#location");
let weatherP = document.querySelector("#weather-forecast");
let weatherIcon = document.querySelector("#weather-icon")


weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = search.value;

    locationP.textContent = "Loading...";
    errorP.textContent = '';
    weatherP.textContent = '';

    fetch(`/weather?location=${location}`).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            errorP.textContent = data.error;
            locationP.textContent = '';
        } else {
            errorP.textContent = '';
            weatherIcon.src = data.forecast.iconSrc;
            locationP.textContent = data.location;
            weatherP.textContent = data.forecast.description + ", " + data.forecast.temperature + ", Humidity: " + data.forecast.humidity;
        }
        })
    });
})