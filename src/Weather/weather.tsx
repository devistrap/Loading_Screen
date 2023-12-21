import { useState, useEffect } from 'react'
import './weather.css'







function Weather() {
    const [lat, setLat] = useState<number | null>(null);
    const [long, setLong] = useState<number | null>(null);
    const [data, setData] = useState<any>(null);
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uithoorn';
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '27d00990aemsh3272dcdeca942b9p1c2c9cjsn9a4405f309b1',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }, []);

    useEffect(() => {
    if (lat && long) {
        const fetchData = async () => {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result);
        };

        fetchData();
    }
}, [lat, long]);

    return (
        <div className='Weather'>
            <h2>Current Weather in Uithoorn</h2>
            <p className='weather-item'>Temperature: {JSON.stringify(data['temp'])} °C</p>
            <p className='weather-item'>feels like: {JSON.stringify(data['temp'])} °C</p>
            <p className='weather-item'>humidity: {JSON.stringify(data['humidity'])} %</p>
            <p className='weather-item'>Wind direction: {JSON.stringify(data['wind_degrees'])} *</p>
            
        </div>
    );

}


export default Weather