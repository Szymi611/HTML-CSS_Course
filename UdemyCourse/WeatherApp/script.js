//EventListener
document.getElementById("location-input").addEventListener('change', async() =>{
    const location = document.getElementById("location-input").value;

//Fetch the weather data
const weatherData = await getWeatherData(location);

//Display the weather data
displayWeatherData(weatherData);

});

const getWeatherData =async(location) => {
    if(!location)
    {
        return{};
    }

    const apiKey1 = "f5b73558eb3b80879441e710efb0859c";
    const apiKey = "012ff81a9b9cd4c9c5f2ed1250abcc18"
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`)
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loaction}%appid=${apiKey}`);
    const data = await response.json();
    return data;

}

function getBackgroundColor(temperature){
    if(temperature < 0){
        return `lightblue`;
    }else if(temperature < 10){
        return `lightgreen`;
    }else if(temperature < 20){
        return `lightyellow`;
    }else if(temperature <30){
        return `lightsalmon`; 
    }else{
        return `lightcoral`
    }
}

const displayWeatherData = (data) =>{
    const weatherElement = document.getElementById("weather-data");

    if(Object.keys(data).length === 0){
        weatherElement.innerHTML = "Please enter a location to see the weather";
    }else{
        const backgroundColor = getBackgroundColor(Math.floor(data.main.temperature - 273.15));
        weatherElement.style.backgroundColor = backgroundColor;

        weatherElement.innerHTML = `
            <h3>${data.name}</h3>;
            <p>Temperature: ${Math.floor(data.main.temperature)}</p>
            <p>Wind speed: ${data.wind.speed} m/s</p>
        `;
    }
}

window.onload = async() => {
    const weatherData = await getWeatherData;
    displayWeatherData(weatherData);
}