async function getAPI(url){
    console.log(url)
    const response = await fetch(url)
    try {
        // Transform into JSON
        const data = await response.json()
        console.log(" --api---data",data)
        return data
    } catch (error) {
        console.log("get_api_error:", error)
    }  
}
export{getAPI}