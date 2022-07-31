import {getGeo} from './geoNames'

function handleSubmit(event) {
    console.log("qqqqqqqqqq") 
    event.preventDefault()

    //get city from index.html
    const input_city = document.getElementById('city').value
    const city = encodeURIComponent(input_city)

    //get countryCode from index.html
    const countryCode = document.getElementById('country').value

  //get country name from index.html
    const _country =document.querySelector("#country")
    const index = _country.selectedIndex
    const country = _country.options[index].text
    
  //get depart date from index.html
    const date = document.getElementById("date").value
    //get depart element
    const departing = document.getElementById("departing")
    departing.innerHTML = `My trip to: ${input_city}, ${country}</br> Departing:${date}` 

    const days_away = document.getElementById("days_away")
    days_away.innerHTML = ` My trip  ${input_city}, ${country}`
    //get lat & lng
    getGeo(city, countryCode,country)
  }
  
  export { handleSubmit }
  