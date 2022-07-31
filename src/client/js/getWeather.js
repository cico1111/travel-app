import {getKey} from './getKey'
import { getAPI } from './getAPI'

const getWeather = async(lat, lng, forcast_flag) => {
    const weather = document.getElementById("current_temp")
    const forecast = document.getElementById("forecast_temp")     

    getKey("/weather").then(res =>{

        const key = res.key 
        
        const forecast_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${key}`  
        const weather_URL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${key}` 
      

        // get current weather data
        getAPI(weather_URL).then(res =>{ 
            const weatherData = res
            console.log(weatherData)
            weather.innerHTML = `Current Temperature : <br>${weatherData.data[0].temp}  °C `
                     
        })
        // get forecast weather data
        if(forcast_flag == true){
            
            getAPI(forecast_URL).then(res =>{ 
                const weatherData = res
                forecast.innerHTML = `Forecast Temperature : <br>`
                for(let i = 0;i<7;i++){
                    forecast.innerHTML +=`${weatherData.data[i].temp}  °C <br>`
                } 
            }) 
        }
        
   
    
})
}
export { getWeather }