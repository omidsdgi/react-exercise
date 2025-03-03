import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import SearchForm from "@/components/weather/SearchForm";

export default  function Weather() {
    return (
        <div>
            <SearchForm/>
            <WeatherInfo />
            <ForecastList />
        </div>
    );
}

