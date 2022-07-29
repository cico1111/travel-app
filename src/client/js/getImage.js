


const getImage= async(location_name)=> {

    const keyword = encodeURIComponent(location_name)
    const key = "28897788-9f44ea3e97cc943bac5e1b82a"
    
    const image_URL = `https://pixabay.com/api/?key=${key}&q=${keyword}&image_type=photo`
    const picture = document.getElementById("img")
    const figcaption =document.getElementById("img-fig")
    const response = await fetch(image_URL);
    try {
        const image_data = await response.json()
   
            console.log("image:",image_data)
            console.log("totalHits-image",image_data.totalHits)
            console.log("Hits[0]-image",image_data.hits[0])
            console.log("Hits[0]-id-url:",image_data.hits[0].webformatURL)
            picture.src = image_data.hits[0].webformatURL
            figcaption.innerHTML = keyword 
  
        
    } catch (error) {
        console.log("ERROR GEO_NAMES : ", error)
    }
    
}
export { getImage }