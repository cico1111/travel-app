
function dateCalcuGetForecastFlag(){  

    //==========date calculate==========
    // get input date
    const _date = document.getElementById("date").value
    const date = new Date(_date)
    // get date now
    const now = new Date()
    // calculate how many days from now 
    let difftime = (date-now)/(1000*60*60*24);
    difftime = Math.round(difftime)

    //==========forcast_flag==========
    // if depart date is in a week, get 7days forecast weather
    // forcast_flag is false in default    
    let forcast_flag = false

    //========== innerHTML process ==========
    // get element that include date    
    const days_away = document.getElementById("days_away")

    if(difftime < 0){
        days_away.innerHTML += ` is ${Math.abs(difftime) } days past`
    }else{
        days_away.innerHTML += ` is ${difftime} days away` 
        //need to forecast
        if(difftime <= 7) forcast_flag = true         
    }
    return forcast_flag
   
}
export{dateCalcuGetForecastFlag}