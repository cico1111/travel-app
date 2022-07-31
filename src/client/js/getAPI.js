async function getAPI(url){
    
    const response = await fetch(url)
    try {
        // Transform into JSON
        const data = await response.json()        
        return data
    } catch (error) {
        console.log("get_api_error:", error)
    }  
}
export{getAPI}