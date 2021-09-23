//Question 1 - Fix the code to get the largest of three.
aa = (f, s, t) => {
	if (f > s && f > t) {
		console.log(f)
	} else if (s > f && s > t) {
		console.log(s)
	} else {
		console.log(t)
	}
}
aa(1, 2, 3)

//Question 2 - Fix the code to Sum of the digits present in the number
let n = 123
function add(n) {
	let sum = 0
	while (n > 0) {
		sum += n % 10
		n = parseInt(n / 10)
	}
	return sum
}
console.log(add(n))

//Question 3 - Fix the code to Sum of all numbers using IIFE function
;(function () {
	var sum = 0
	const arr = [9, 8, 5, 6, 4, 3, 2, 1]
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	console.log(sum)
	return sum
})()

//Question 4 -Fix the code to gen Title caps.
var arr = ['guvi', 'geek', 'zen', 'fullstack']
var ano = function (arro) {
	for (var i = 0; i < arro.length; i++) {
		console.log(arro[i][0].toUpperCase() + arro[i].substr(1))
	}
}
ano(arr)

//Question 5 -Fix the code to return the Prime numbers
const newArray = [1, 3, 2, 5, 10]
const myPrime = newArray.filter((num) => {
	if (num == 1) return false
	for (let i = 2; i < num / 2; i++) {
		if (num % i === 0) {
			return false
		}
	}
	return true
})
console.log(myPrime)

//Question 6 - Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const sum = num.reduce((a, b) => a + b)
console.log(sum)

//Question 7 - Fix the code to rotate an array by k times and return rotated array using IIFE function
;(function () {
	var arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13]
	var k = 3
	k = k % arr.length
	out = arr.slice(k, arr.length)
	var count = out.length
	for (var i = 0; i < k; i++) {
		out[count] = arr[i]
		count += 1
	}
	console.log(out)
})()

//Question 8 - Fix the code to gen Title caps.
var arr = ['guvi', 'geek', 'zen', 'fullstack']
;(function () {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].charAt(0).toUpperCase() + arr[i].substring(1))
	}
})()

//Question 9 - print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4]
;(function () {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			console.log(arr[i])
		}
	}
})()

//Question 10 - Fix the code to reverse.
;(function (str) {
	str1 = str.split('').reverse().join('')
	console.log(str1)
})('abcd')

//Question 11 - Fix the code to remove duplicates.
var res = function (arr) {
	let newArr = []
	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) < 0) {
			newArr.push(arr[i])
		}
	}
	console.log(newArr)
}
res(['guvi', 'geek', 'guvi', 'duplicate', 'geeK'])

/*
Question 12 -Fix the code to give the below output:
Expected Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]
*/

var array = [
	[
		['firstname', 'vasanth'],
		['lastname', 'Raje'],
		['age', 24],
		['role', 'JSWizard'],
	],
	[
		['firstname', 'Sri'],
		['lastname', 'Devi'],
		['age', 28],
		['role', 'Coder'],
	],
]
var final = []
while (array.length != 0) {
	var outer_remove = array.shift()
	let new_object = {}
	while (outer_remove.length != 0) {
		var inner_remove = outer_remove.shift()
		var key = inner_remove[0]
		var value = inner_remove[1]
		new_object[key] = value
	}
	final.push(new_object)
}
console.log(final)

//Question 13 - Sum of odd numbers in an array
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1]
var s = as.reduce(function (a, c) {
	if (c % 2 !== 0) {
		return a + c
	}
	return a
}, 0)
console.log(s)

//Question 14 - Swap the odd and even digits
aa = (data) => {
	var a = data.split('')
	var l = ''
	for (i = 0; i < a.length - 1; i++) {
		var s = a[i + 1]
		var b = a[i]
		l += s
		l += b
		i = i + 1
	}
	if (a.length % 2 != 0) {
		l += a[a.length - 1]
	}
	console.log(l)
}
aa('1234')
