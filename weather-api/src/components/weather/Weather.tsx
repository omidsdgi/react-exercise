import {useState} from "react";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import SearchForm from "@/components/weather/SearchForm";
import {CallWeatherApi} from "@/api/api";

interface Props {
    city: string;
}

 function Weather({city}:Props) {

     const [weatherState,setWeatherState]=useState<Weather>({
         city:"",
         wind:0,
         humidity:0,
         description:'',
         icon:"",
         daily:[]
     })

     const getWeatherData =async (city:string) => {
         const response = await CallWeatherApi({city})
         const weather:Weather={
             city:response.name,
             wind:response?.wind.speed,
             humidity:response.main.humidity,
             description:response.weather[0].description,
             icon:response.weather[0].icon,
             daily:[]
         }
       setWeatherState(weather)
         console.log(weather)

     }
     if (weatherState.city.length ===0){
         getWeatherData(city)
     }
     console.log(weatherState)
    return (
        <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16"}>
            <SearchForm city={city} getWeatherData={getWeatherData} />
            <WeatherInfo />
            <ForecastList />
        </div>
    );
}

export default Weather;