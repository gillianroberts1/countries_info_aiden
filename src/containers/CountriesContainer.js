import { useEffect, useState } from "react"
import CountrySelector from "../components/CountrySelector"
import CountryDetail from "../components/CountryDetail"

const CountryContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        getCountries()
    },[])

    


    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected= (country) => {
        setSelectedCountry(country)
    }



    return(
        <div className="main-container">
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry? <CountryDetail country={selectedCountry}/> : null}


        </div>
    )
}



export default CountryContainer