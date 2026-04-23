
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"



export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
    city: "Wonderland",  
    feelsLike: 38.49,
    humidity: 12,
    temp: 41.05,
    tempMax: 41.05,
    tempMin: 41.05,
    weather: "Clear" 
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Freaking Beast </h2>
            <SearchBox updateInfo={updateInfo}  />
            <InfoBox info={weatherInfo}/>

            
             </div>
    )

}