import {getKey} from './getKey'
import { getAPI } from './getAPI'

const getWeather = async(lat, lng)=> {
    const weather = document.getElementById("temp")
    const forecast = document.getElementById("forecast_temp")      

    getKey("/weather").then(res =>{
       
        const key = res.key 
        const forecast_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${key}`       
        const weather_URL =`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${key}`

        // get current weather data
        getAPI(weather_URL).then(res =>{ 
            const weatherData = res
            console.log("city_name-weather",weatherData.city_name)
            console.log("data-weather",weatherData.data)
            console.log("data[0]-weather",weatherData.data[0])
            console.log("data[0]-temprature-weather",weatherData.data[0].temp, "°C")
            weather.innerHTML ="Current Temperature :"+ weatherData.data[0].temp + "°C"   
           
        })
        // get forecast weather data
        getAPI(forecast_URL).then(res =>{ 
            const weatherData = res
            console.log("city_name-weather",weatherData.city_name)
            console.log("data-weather",weatherData.data)
            console.log("data[0]-weather",weatherData.data[0])
            console.log("data[0]-temprature-weather",weatherData.data[0].temp, "°C")
            forecast.innerHTML ="Forecast Temperature :"+ weatherData.data[0].temp + "°C"

       
        })  
   
    
})
}
export { getWeather }