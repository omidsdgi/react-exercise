import {ChangeEvent, FormEvent, useState} from "react";

interface Props {
    city: string;
    getWeatherData: ( city: string )=>void
}

  function SearchForm({city,getWeatherData}:Props) {
const [nameState, setNameState] = useState<string>('');


const cityNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value)
}
const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getWeatherData(nameState)
}
    return (
        <form className={"m-auto flex justify-center border-b-2 pb-6 mb-6"} onSubmit={submitHandler}>
            <input type="text" name={"cityName"} className={"border rounded p-3"} onChange={cityNameChangeHandler} value={nameState} placeholder="Search City" />
            <input type="submit" className={"bg-primary px-6 py-3 ml-3 text-white font-bold rounded"}  value={"search"} />
        </form>
    );
}
export default SearchForm;
