import {getWeather} from './getWeather'
import {getImage} from './getImage'
import {getKey} from './getKey'
import { getAPI } from './getAPI'
const getGeo = async()=> {
    const input_city = document.getElementById('city').value
    const countryCode = document.getElementById('country').value
   
    const _country =document.querySelector("#country")
    const index = _country.selectedIndex
    const country = _country.options[index].text
    const city = encodeURIComponent(input_city)

  //function of getting api key
    getKey("/user").then(res =>{
       
        const userName = res.key        
        const geo_URL =  `http://api.geonames.org/searchJSON?username=${userName}&name=${city}&country=${countryCode}&maxRows=5&style=SHORT`
    
        getAPI(geo_URL).then(res =>{ 
        const geoData = res
        console.log( "lng-geoNames",geoData.geonames[0])
        console.log( "lng-geoNames",geoData.geonames[0].lng)
        console.log( "lat-geoNames",geoData.geonames[0].lat)
        getWeather(geoData.geonames[0].lat, geoData.geonames[0].lng)  
        getImage(city, country)}
           
        )
       
    })  
    
}


export { getGeo }
