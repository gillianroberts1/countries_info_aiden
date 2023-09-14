const CountryDetail = ({country})  => {

    let currencyStrings = []
    let currencyElements = []


        
        for(let currency in country.currencies){
            let currencyName = country.currencies[currency].name
            currencyStrings.push(currencyName)
        }
    
        currencyElements = currencyStrings.map((name) => {
            return <p>{name}</p>
        })

        console.log(currencyElements);






    return(
        <div className="country-detail">
            <li>The capital of {country.name.common} is {country.capital}</li>

            <li>The population of {country.name.common} is {country.population}</li>
            <li>Currencies</li>

            {currencyElements}



        </div>
    )
}

export default CountryDetail