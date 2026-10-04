import { useState } from 'react';
import InfoBox from './InfoBox.jsx'
import SearchBox from './SearchBox.jsx'
export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
            city: "Delhi",
            feelsLike: 35.98,
            temp: 36.52,
            tempMin: 36.52,
            tempMax: 36.52,
            humidity: 26,
            weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}