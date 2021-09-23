//I have used a different url for the rest countries since eu version was down.

/*
Question 1 - How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
*/

var obj1 = { name: 'Person 1', age: 5 }
var obj2 = { age: 5, name: 'Person 1' }

const compareObj = (obj1, obj2) => {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
	for (key in obj1) {
		if (obj1[key] !== obj2[key]) {
			return false
		}
	}
	return true
}
console.log(
	compareObj(obj1, obj2) ? 'The objects are equal' : 'The objects are not equal'
)

/*
 Question 2 & 3
 Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
Use the same rest countries and print all countries name, region, sub region and population
 */

const getCountries = () => {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://restcountries.com/v2/all')
	xhr.responseType = 'json'
	xhr.onload = () => {
		data = xhr.response

		//Displaying Flags
		console.log('Flags of all the countries')
		data.map((a) => {
			console.log(a.flags[1])
		})

		//Displaying details
		console.log('Details of all the countries')
		data.map((a) => {
			console.log('Name: ' + a.name)
      //Continent key has the region value
			console.log('Region : ' + a.continent)
      //Region key has value of sub region 
			console.log('Sub region : ' + a.region)
			console.log('Population: ' + a.population)
		})
	}
	xhr.send()
}
getCountries()
