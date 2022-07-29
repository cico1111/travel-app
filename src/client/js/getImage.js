


const getImage= async(location_name)=> {

    const keyword = encodeURIComponent(location_name)
    const key = "28897788-9f44ea3e97cc943bac5e1b82a"
    
    const image_URL = `https://pixabay.com/api/?key=${key}&q=${keyword}&image_type=photo`
    
    const response = await fetch(image_URL);
    try {
        const image_data = await response.json()
   
            console.log("image:",image_data)
            console.log("totalHits-image",image_data.totalHits)
            console.log("Hits[0]-image",image_data.hits[0])
            console.log("Hits[0]-id-image",image_data.hits[0].id)
      
  
        
    } catch (error) {
        console.log("ERROR GEO_NAMES : ", error)
    }
    
}
export { getImage }