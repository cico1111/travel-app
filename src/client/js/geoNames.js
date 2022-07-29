import {getWeather} from './getWeather'
import {getImage} from './getImage'
    const getGeo = async()=> {
    const input_city = document.getElementById('city').value
    const input_country = document.getElementById('country').value
    const city = encodeURIComponent(input_city)
    const country = encodeURIComponent(input_country)
    const userName = "cicozhang111"
    const geo_URL = `http://api.geonames.org/searchJSON?username=${userName}&name=${city}&country=${country}&maxRows=5&style=SHORT`
    
    const response = await fetch(geo_URL);
    try {
        const geoData = await response.json()
   
            console.log( "lng-geoNames",geoData.geonames[0].lng)
            console.log( "lat-geoNames",geoData.geonames[0].lat)
            getWeather(geoData.geonames[0].lat, geoData.geonames[0].lng)
            getImage(geoData.geonames[0].name, geoData.geonames[0].countrycode)
      
  
        
    } catch (error) {
        console.log("ERROR GEO_NAMES : ", error)
    }
    
}

function getLocation(obj){
    

    return
}
export { getGeo , getLocation}
