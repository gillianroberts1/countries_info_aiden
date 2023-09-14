import OptionItem from "./OptionItem"


const CountrySelector = ({countries, onCountrySelected}) => {

    const countryOptions = countries.map((country, index) => {
        // return <OptionItem key={index} counry={country} index={index}/>
        return <option value={index}>{country.name.common}</option>
        
        

    })

    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value]
        onCountrySelected(chosenCountry)
    }

    return(
        <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Select your country </option>
        {countryOptions}
        </select>
    )

}

export default CountrySelector