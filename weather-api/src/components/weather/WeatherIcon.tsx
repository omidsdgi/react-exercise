import React from 'react';
// @ts-ignore
import REACTAnimatedWeather  from 'react-animated-weather';

interface Props {
    icon: string;
    size: number;
}
function WeatherIcon({icon,size}:Props) {

    let codeMapping: {
        [key: string]: string
    }={
        "01n":"ClEAR_NIGHT",
        "01d":"Clear_DAY",
        "02d":"PARTLY_CLOUDY_DAY",
        "02n":"PARTLY_CLOUDY_NIGHT",
        "03d":"PARTLY_CLOUDY_DAY",
        "03n":"PARTLY_CLOUDY_NIGHT",
        "04d":"CLOUDY",
        "04n":"CLOUDY",
        "09d":"RAIN",
        "09n":"RAIN",
        "10d":"RAIN",
        "10n":"RAIN",
        "11d":"RAIN",
        "11n":"RAIN",
        "13d":"SNOW",
        "13n":"SNOW",
        "50d":"FOG",
        "50n":"FOG",

    }
    return (
        < REACTAnimatedWeather
            icon={codeMapping[icon] }
            color={'#1e1e1e'}
            size={size}
            animate={true}
        />
    );
}

export default WeatherIcon;