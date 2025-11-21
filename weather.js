
const apikey ="65e8a35488814d2a8ca203911251611";
let days = 8;
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

        // real feel
        document.querySelector("#real-feel").textContent = data.current.feelslike_c + "°";

        // Humidity
        document.querySelector("#Humidity").textContent = data.current.humidity;

        // Wind
        document.querySelector("#wind").textContent = data.current.wind_kph + " Km/h";

        // Wind
        document.querySelector("#uv-index").textContent = data.current.uv;
        
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

        // forecast for day current
        // document.querySelector("#current-day").textContent= new Date(data.location.localtime).toLocaleDateString("en-US",{
        //     weekday:"long"
        // });
        document.querySelector("#current-day-Img").src = data.forecast.forecastday[0].day.condition.icon;
        document.querySelector("#current-day-weather").textContent =data.forecast.forecastday[0].day.condition.text;
        document.querySelector("#current-day-temp").textContent =data.forecast.forecastday[0].day.mintemp_c + "°" ;

        // forecast for day one
        document.querySelector("#forecast-day-one").textContent= new Date(data.forecast.forecastday[1].date).toLocaleDateString("en-US",{
            weekday:"long"
        });
        document.querySelector("#forecast-day-one-Img").src = data.forecast.forecastday[1].day.condition.icon;
        document.querySelector("#forecast-day-one-weather").textContent =data.forecast.forecastday[1].day.condition.text;
        document.querySelector("#forecast-day-one-temp").textContent =data.forecast.forecastday[1].day.mintemp_c + "°" ;
        
         // forecast for day two
        document.querySelector("#forecast-day-two").textContent= new Date(data.forecast.forecastday[2].date).toLocaleDateString("en-US",{
            weekday:"long"
        });
        document.querySelector("#forecast-day-two-Img").src = data.forecast.forecastday[2].day.condition.icon;
        document.querySelector("#forecast-day-two-weather").textContent =data.forecast.forecastday[2].day.condition.text;
        document.querySelector("#forecast-day-two-temp").textContent =data.forecast.forecastday[2].day.mintemp_c + "°" ;

        // forecast for day three
        document.querySelector("#forecast-day-three").textContent= new Date(data.forecast.forecastday[3].date).toLocaleDateString("en-US",{
            weekday:"long"
        });
        document.querySelector("#forecast-day-three-Img").src = data.forecast.forecastday[3].day.condition.icon;
        document.querySelector("#forecast-day-three-weather").textContent =data.forecast.forecastday[3].day.condition.text;
        document.querySelector("#forecast-day-three-temp").textContent =data.forecast.forecastday[3].day.mintemp_c + "°" ;
        
    } catch (error) {
        console.log(error)
    }
}
//auto Accra when 
window.addEventListener("load",function(){
    getday("Accra");
    getforecast("Accra");
});

btnOne.addEventListener("click",function(){
    selectedCity = weatherForCity.value;
    getday(selectedCity);
    getforecast(selectedCity);
    cityname.textContent=selectedCity;
    console.log(selectedCity);
}
);


