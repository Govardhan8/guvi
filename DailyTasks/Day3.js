var numArray = [1, 2, 3, 4, 5]

//Using for loop

for (var i = 0; i < numArray.length; i++) {
	console.log(`${numArray[i]} is at index ${i}`)
}

//Using for of loop

for (let value of numArray) {
	console.log(`${value}`)
}

//Using forEach loop

numArray.forEach(fun)
function fun(currentValue, index) {
	console.log('Index in array is: ' + index + ' ::  Value is: ' + currentValue)
}

//Using for in loop

var people = {
	1: 'Gova',
	2: 'Ash',
	3: 'Mahipal',
	4: 'Raghav',
}

for (let key in people) {
	console.log(`person ${key} is ${people[key]}`)
}
