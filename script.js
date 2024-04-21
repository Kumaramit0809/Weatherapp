

const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-button");
const weather_img = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const wind_speed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const location_not_found = document.querySelector(".location-not-found");
const weatherBox = document.querySelector(".weather-box");





async function checkWeather(city){
    const apiKey = "87566e136b5560c2f51ce8632929c650";
    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
     
    if(weather_data.cod ==='404'){
        location_not_found.style.visibility ="visible";
        weatherBox.style.visibility="hidden";
        // console.log("error");
        return;
        
    }
    location_not_found.style.visibility ="hidden";
    weatherBox.style.visibility="visible";
    
    temperature.innerHTML= `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    wind_speed.innerHTML= `${weather_data.wind.speed } km/hr`
    humidity.innerHTML= `${weather_data.main.humidity }%`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "./cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./clear.png";
            break;
        case 'Rain':
            weather_img.src = "./rain.png";
            break;
        case 'Mist':
            weather_img.src = "./mist.png";
            break;
        case 'Snow':
            weather_img.src = "./snow.png";
            break;    
        case 'Haze':
            weather_img.src = "./haze.png";
            break;  
              
    }
}
searchBtn.addEventListener('click' , () => {
    checkWeather(inputBox.value);
})
