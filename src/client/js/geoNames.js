import {getWeather} from './getWeather'
import {getImage} from './getImage'
import {getKey} from './getKey'
import { getAPI } from './getAPI'
import { dateCalcuGetForecastFlag } from './dateCalculate'
const getGeo = async(city, countryCode, country)=> {   

  //function of getting api key
    getKey("/user").then(res =>{
       
        const userName = res.key        
        const geo_URL =  `http://api.geonames.org/searchJSON?username=${userName}&name=${city}&country=${countryCode}&maxRows=5&style=SHORT`
    
        getAPI(geo_URL).then(res =>{ 
        const geoData = res
          if(geoData.geonames.length == 0){
            alert("Can not find the location,please check the country or My trip to")
            return
          }
       
         // check if forecase by date & set forecase flag
         //  forecase flag is true, get the forecast weather 
        const forecase_flag = dateCalcuGetForecastFlag()
          // get weather by lat, lng 
        getWeather(geoData.geonames[0].lat, geoData.geonames[0].lng, forecase_flag)  

        //get the photo of trip location
        getImage(geoData.geonames[0].name, country)}
           
        )
       
    })  
    
}
export { getGeo }
