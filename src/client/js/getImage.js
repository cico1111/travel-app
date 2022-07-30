import {getKey} from './getKey'
import { getAPI } from './getAPI'


const getImage= async(location, country)=> {    
   
    const picture = document.getElementById("img")
    const figcaption =document.getElementById("img-fig")

    getKey("/image").then(res =>{
       
        const key = res.key      
        console.log("oooooooooooooooo:key",key)
        let image_URL = `https://pixabay.com/api/?key=${key}&q=${location}&image_type=photo&category=travel`
        getAPI(image_URL).then(res =>{   
            const image_data = res
            
            const min = 0
            const max = image_data.hits.length
            const num = getRndInteger(min, max) 
            
            let photoUrl = image_data.hits[num].webformatURL
            let fig_text = location+","+ country 

            if(image_data.hits.length == 0){
                image_URL =`https://pixabay.com/api/?key=${key}&q=${country}&image_type=photo&category=travel`
                getAPI(image_URL).then(res => {
                photoUrl = res.hits[num].webformatURL})
                fig_text = country 
            }

            picture.src = photoUrl
            figcaption.innerHTML = fig_text
        })
       
    })  
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}
export { getImage }