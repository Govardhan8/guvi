const getCountries = () => {
	const xhr = new XMLHttpRequest()
  
	xhr.open('GET', 'https://restcountries.com/v2/all')
  
	xhr.responseType = 'json'
  
	xhr.onload = () => {
    
		data = xhr.response

		//Getting all the countries from Asia continent /region using Filter function
		let AsianCountries = data.filter((a) => {
			if (a.continent === 'Asia') {
				return true
			}
		})
		console.log(AsianCountries)

		//Getting all the countries with a population of less than 2 lakhs using Filter function
		let LowPopulationCountries = data.filter((a) => {
			if (a.population < 200000) {
				return true
			}
		})
		console.log(LowPopulationCountries)

		//Print the following details name, capital, flag using forEach function
		data.map((a) => {
			console.log(a.name)
			console.log(a.capital)
			console.log(a.flags[0])
			console.log(a.currencies)
		})
        
		//Print the total population of countries using reduce function
		let totalPopulation = data.reduce((a, b) => a + b.population, 0)
		console.log(totalPopulation)

		//Print the country which uses US Dollars as currency.
		let USCurrencyCountries = data.filter((a) => {
			let flag = false
			if (a.currencies) {
				let currencies = a.currencies
				currencies.forEach((c) => {
					if (c.code === 'USD') {
						flag = true
					}
				})
			}
			return flag
		})
		console.log(USCurrencyCountries)
	}
	xhr.send()
}
getCountries()
