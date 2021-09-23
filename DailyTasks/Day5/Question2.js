//Print odd numbers in an array
const oddNumbers = (arr) => {
	const result = arr.filter((a) => {
		return a % 2 !== 0
	})
	console.log('odd numbers are: ')
	console.log(...result)
	return result
}
oddNumbers([1, 2, 3, 4, 5])

//Convert all the strings to title caps in a string array
const titleCaps = (arr) => {
	var result = arr.map((a) => {
		return a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()
	})
	console.log('String array after converting into title caps')
	console.log(...result)
	return result
}
titleCaps(['racecar', 'malayalam', 'tamil'])

//Sum of all numbers in an array
const sum = (arr) => {
	let result = arr.reduce((curr, sum) => curr + sum, 0)
	console.log(`The sum of the elements is ${result}`)
}
sum([1, 2, 3, 4, 5])
