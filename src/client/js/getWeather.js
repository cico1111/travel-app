
const getWeather = async(lat, lng)=> {
  
    const key = "3474c920da88485f96c05f4d8d5fb71a"
    
    const forecast_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${key}`
    const weather_URL =`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${key}`
    const weather = document.getElementById("temp")
    const forecast = document.getElementById("forecast_temp")
    const response1 = await fetch(weather_URL);
    try {
        const weatherData = await response1.json()
   
            console.log("city_name-weather",weatherData.city_name)
            console.log("data-weather",weatherData.data)
            console.log("data[0]-weather",weatherData.data[0])
            console.log("data[0]-temprature-weather",weatherData.data[0].temp, "°C")
            weather.innerHTML ="Current Temperature :"+ weatherData.data[0].temp + "°C"
        
    } catch (error) {
        console.log("ERROR GEO_NAMES : ", error)
    }
    const response2 = await fetch(forecast_URL);
    try {
        const weatherData = await response2.json()
   
            console.log("city_name-weather",weatherData.city_name)
            console.log("data-weather",weatherData.data)
            console.log("data[0]-weather",weatherData.data[0])
            console.log("data[0]-temprature-weather",weatherData.data[0].temp, "°C")
            forecast.innerHTML ="Forecast Temperature :"+ weatherData.data[0].temp + "°C"
  
        
    } catch (error) {
        console.log("ERROR GEO_NAMES : ", error)
    }
    
}
export { getWeather }