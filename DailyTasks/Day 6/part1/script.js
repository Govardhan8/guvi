//Question 2
alert('I’m invoked!') //quotation had issue

//Question 3
alert("I'm JavaScript!")
alert('Hello') // this line is not having semicolon -- JavaScript has Automatic Semicolon Insertion if required
alert(`Wor
 ld`) //it is due to template literals created when using back ticks
alert(3 + 1 + 2) // this is multiple line code and its working -- it works since it is addition of numbers

//question 4
let admin = 9,
	fname = 10.5
fname = 'Guvi'
lname = 'geek'
admin = fname + ' ' + lname //need to add a space between the words
alert(admin) // "Guvi geek"

//Question 5
let fname = 10.5
fname = 'Guvi'
lname = 'geek'
let name = `${fname} ${lname}` // need to put a space between the words
alert(`hello ${name}`) //it wasn't working as normal quotes dont allow substitution so we need to use backticks to get template literal

//Question 6
let a = Number(prompt('First number?'))
let b = Number(prompt('Second number?'))
alert(a + b) // it was getting concatinated as we were getting strings by default so parsing is required

//Question 7
//Same as question 6

//Question 8
var a = '02' > '12' // it is because 1 is alphabetically lesser than 2 so we can make 2 as 02 to get Diffused
//Don't touch below this
if (a) {
	console.log('Code is Blasted')
} else {
	console.log('Diffused')
}

//Question 9
let a = prompt('Enter a number?') // we can get success by not giving any value in the prompt
//Don't modify any code below this
if (a) {
	console.log('OMG it works for any number inc 0')
} else {
	console.log('Success')
}

//Question 10
let value = Number(prompt('How many runs you scored in this ball')) //Since prompt returns a string we cant use ===,we can use == since it does corecion or we can parse the input
if (value === 4) {
	console.log('You hit a Four')
} else if (value === 6) {
	console.log('You hit a Six')
} else {
	console.log("I couldn't figure out")
}

//Question 11
let login = 'Employee'
let message =
	login == 'Employee'
		? 'Welcome' //This line was missing for the true condition when login==='Employee'
		: login == 'Director'
		? 'Greetings'
		: login == ''
		? 'No login'
		: ''
console.log(message)

//Question 12
// You cant change the value of the msg
let message
if (null || 2 || undefined) {
	message = 'welcome boss' // We can remove the let key word since it is getting redeclared and let is block scoped or we can make it var
} else {
	message = 'Go away'
}
console.log(message)

//Question 13
let message
let lock = false //We can change the value of lock to a falsy value since it was 2 it was a truthsy value
//Dont change any code below this
if (null || lock || undefined) {
	message = 'Go away'
} else {
	message = 'welcome'
}
console.log(message)

//Question 14
let message
let lock = false //We can change the value of lock to a falsy value since it was 2 it was a truthsy value
//Dont change any code below this
if ((lock && ' ') || undefined) {
	message = 'Go away'
} else {
	message = 'welcome'
}
console.log(message)

//Question 15
//You can change only 2 characters
let i = 3
while (i) {
	console.log(i--) //By doing post decrement we can get 3 2 1
}

//Question 16
let num = 1
let x = 0
let result = ''
for (i = num; i <= 10; i++) {
	result += i + ' '
	x++
	if (x === 3 || i === 10) {
		x = 0
		console.log(result)
		result = ''
	}
}

//Question 17
for (let num = 2; num <= 20; num += 2) {
	// by changing num += 1 to num +=2
	console.log(num)
}

//Question 18
let gifts = ['teddy bear', 'drone', 'doll']
for (let i = 0; i < 3; i++) {
	console.log(`Wrapped ${gifts[i]} and added a bow!`) //We need to change the console statement to a template literals by using (`) backticks
}

//Question 19
let countdown = 100
while (countdown > 0) {
	if (countdown == 0) {
		console.log('bomb triggered')
	}
	countdown-- //we can decrement after the if block
}

//Question 20
var lemein = '0'
var lemeout = 0
var msg = ''
if (lemein) {
	msg += 'hi'
}
if (lemeout) {
	msg += 'Hello'
}
console.log(msg) //It only prints hi as the number 0 is considered as falsy and any string is considered as truthy
