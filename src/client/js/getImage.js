import {getKey} from './getKey'
import { getAPI } from './getAPI'


const getImage= async(location, country)=> {    
   //get photo element
    const picture = document.getElementById("img")
    const figcaption =document.getElementById("img-fig")
    // figcaption.innerHTML  = fig_text
    let fig_text = location+","+ country 

    getKey("/image").then(res =>{       
        const key = res.key         
        let image_URL = `https://pixabay.com/api/?key=${key}&q=${location}&image_type=photo&category=travel`
        // get the image data from api by image_URL
        getAPI(image_URL).then(res =>{ 
              
            const image_data = res  
            // get random number by getRndInteger(min, max) function         
            const min = 0
            const max = image_data.hits.length
            const num = getRndInteger(min, max) 
            // get random photo url by random number
            let photoUrl = image_data.hits[num].webformatURL
           
            // if there is no city's photo , get the country's photo 
            if(image_data.hits.length == 0){
                image_URL =`https://pixabay.com/api/?key=${key}&q=${country}&image_type=photo&category=travel`
                getAPI(image_URL).then(res => {
                photoUrl = res.hits[num].webformatURL})
                fig_text = country 
            }
            // show the photo and figcaption
            picture.src = photoUrl
            figcaption.innerHTML = fig_text
            
        })
       
    })  
    
   // get random number
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}
export { getImage }