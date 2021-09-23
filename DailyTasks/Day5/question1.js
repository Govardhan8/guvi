//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array
;(function () {
	var arr = [1, 2, 3, 4, 5]
	var result = []
	arr.map((a) => {
		a % 2 !== 0 ? result.push(a) : ''
	})
	console.log('odd numbers are: ')
	console.log(...result)
	return result
})()

//Convert all the strings to title caps in a string array
;(function () {
	var arr = ['racecar', 'malayalam', 'tamil']
	var result = arr.map((a) => {
		return a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()
	})
	console.log('String array after converting into title caps')
	console.log(...result)
	return result
})()

//Sum of all numbers in an array
;(function () {
	var arr = [1, 2, 3, 4, 5]
	var sum = 0
	arr.map((a) => {
		sum += a
	})
	console.log(`Sum of the array is ${sum}`)
	return sum
})()

//Return all the prime numbers in an array
;(function () {
	var arr = [1, 2, 3, 5, 6, 7, 8, 9, 10]
	//var flag = true
	var result = []
	result = arr.filter((a) => {
		let flag = false
		if (a > 2) {
			for (let i = 2; i < a / 2; i++) {
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
})()

//Return all the palindromes in an array
;(function () {
	var arr = ['racecar', 'malayalam', 'tamil']
	var result = arr.filter((a) => {
		b = a.split('').reverse().join('')
		return a === b
	})
	console.log('The palindromes in the array are')
	console.log(result)
	return result
})()

//Return median of two sorted arrays of same size
;(function () {
	let arr1 = [1, 12, 15, 26, 38]
	let arr2 = [2, 13, 17, 30, 45]
	let result = [...arr1, ...arr2].sort((a, b) => {
		return a - b
	})
	let median =
		result.length % 2 === 0
			? (result[result.length / 2 - 1] + result[result.length / 2]) / 2
			: result[result.length / 2 - 1]
	console.log(`The median of the two sorted arrays of same size is ${median}`)
	return median
})()

//Remove duplicates from an array
;(function () {
	let arr = [1, 2, 2, 3, 4, 5, 5]
	let result = [...new Set(arr)]
	console.log('Array after removing duplicates:')
	console.log(result)
	return result
})()

//Rotate an array by k times
;(function (k = 1) {
	var arr = [1, 2, 3, 4, 5]
	var result = k % 2 === 0 ? arr : arr.reverse()
	console.log(`Array is rotated ${k} times`)
	console.log(result)
	return result
})()
