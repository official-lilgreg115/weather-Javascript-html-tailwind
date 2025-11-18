const apikey ="65e8a35488814d2a8ca203911251611";
let days = 5;
let weatherForCity = document.getElementById("citySelect");
let btnOne = document.getElementById("submitCity");
let temp= document.querySelector("#temp");
let tempImage= document.querySelector("#tempImage");
let cityname= document.querySelector("#cityname");


async function getday(cityName) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}&days=${days}&aqi=no`);
        let data = await response.json();
        console.log(data)
        let tempDegree = data.current.temp_c
        temp.textContent= tempDegree + "°"
        switch(true){
            case tempDegree <= 0:
                tempImage.src="imgs/snowflake-svgrepo-com.svg"
                break;
            case tempDegree <=15 && tempDegree >=1:
                tempImage.src="imgs/rain-umbrella-svgrepo-com.svg"
                break;
            case tempDegree <=24 && tempDegree >=16:
                tempImage.src="imgs/sun-behind-cloud-svgrepo-com.svg"
                break;
            case tempDegree <=35 && tempDegree >=25:
                tempImage.src="imgs/weather-2-svgrepo-com.svg"
                break;
            case tempDegree <=40 && tempDegree >=36:
                tempImage.src="imgs/snowflake-svgrepo-com.svg"
                break;
        }
    } catch (error) {
        console.log(error)
    }
}
async function getforecast(cityName) {
    try {
        let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${cityName}&days=${days}&aqi=no`);
        let data = await response.json();
        console.log(data);
        

        // forecast for 6:00AM
        document.querySelector("#six-Am-Forecast").textContent = data.forecast.forecastday[0].hour[6].temp_c + "°";
        document.querySelector("#six-Am-Forecast-Icon").src= data.forecast.forecastday[0].hour[6].condition.icon;

        // forecast for 9:00AM
        document.querySelector("#nine-Am-Forecast").textContent = data.forecast.forecastday[0].hour[9].temp_c + "°";
        document.querySelector("#nine-Am-Forecast-Icon").src= data.forecast.forecastday[0].hour[9].condition.icon;

        // forecast for 12:00AM
        document.querySelector("#twelve-Am-Forecast").textContent = data.forecast.forecastday[0].hour[12].temp_c + "°";
        document.querySelector("#twelve-Am-Forecast-Icon").src= data.forecast.forecastday[0].hour[12].condition.icon;

        // forecast for 3:00PM
        document.querySelector("#three-Pm-Forecast").textContent = data.forecast.forecastday[0].hour[15].temp_c + "°";
        document.querySelector("#three-Pm-Forecast-Icon").src= data.forecast.forecastday[0].hour[15].condition.icon;

        // forecast for 6:00PM
        document.querySelector("#six-Pm-Forecast").textContent = data.forecast.forecastday[0].hour[18].temp_c + "°";
        document.querySelector("#six-Pm-Forecast-Icon").src= data.forecast.forecastday[0].hour[18].condition.icon;

    } catch (error) {
        console.log(error)
    }
}
btnOne.addEventListener("click",function(){
    selectedCity = weatherForCity.value;
    getday(selectedCity);
    getforecast(selectedCity);
    cityname.textContent=selectedCity;
    console.log(selectedCity);
}
)
