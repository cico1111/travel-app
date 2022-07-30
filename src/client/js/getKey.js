async function getKey(url){
    console.log(url)
    const response = await fetch(url)
    try {
        // Transform into JSON
        const data = await response.json()
        console.log(" --00-000",data)
        return data
    } catch (error) {
        console.log("get_key_error:", error)
    }  
}
export{getKey}