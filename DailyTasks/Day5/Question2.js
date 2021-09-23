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

//Return all the prime numbers in an array
const primeNumbers = (arr) => {
	let result = arr.filter((a) => {
		let flag = false
		if (a > 2) {
			for (let i = 2; i <= a / 2; i++) {
				if (a % i === 0) {
					flag = true
					break
				}
			}
		} else {
			flag = true
		}
		return flag ? '' : a
	})
	console.log('Prime numbers are')
	console.log(...result)
	return result
}
primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])

//Return all the palindromes in an array
const palindromes = (arr) => {
	var result = arr.filter((a) => {
		b = a.split('').reverse().join('')
		return a === b
	})
	console.log('The palindromes in the array are')
	console.log(result)
	return result
}
palindromes(['racecar', 'malayalam', 'tamil'])
