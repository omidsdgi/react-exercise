import {useState} from "react";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import SearchForm from "@/components/weather/SearchForm";

interface Props {
    city: string;
}

export default  function Weather({city}:Props) {

     const [weatherState,setWeatherState]=useState<Weather>({
         city:city,
         wind:'',
         humidity:'',
         description:'',
         icon:"",
         daily:[]
     })
    console.log("weather",weatherState)
     async function CallWeatherApi(){
         await fetch("")
     }
    return (
        <div>
            <SearchForm/>
            <WeatherInfo />
            <ForecastList />
        </div>
    );
}

