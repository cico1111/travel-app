
const getWeather = async(lat, lng)=> {
  
    const key = "3474c920da88485f96c05f4d8d5fb71a"
    
    const weather_URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${key}`
    
    const response = await fetch(weather_URL);
    try {
        const weatherData = await response.json()
   
            console.log("city_name-weather",weatherData.city_name)
            console.log("data-weather",weatherData.data)
            console.log("data[0]-weather",weatherData.data[0])
            console.log("data[0]-temprature-weather",weatherData.data[0].temp, "°C")
      
  
        
    } catch (error) {
        console.log("ERROR GEO_NAMES : ", error)
    }
    
}
export { getWeather }