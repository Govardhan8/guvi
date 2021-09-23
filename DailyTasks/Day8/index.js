//Question 1
class Movie {
	constructor(title, studio, rating = 'PG') {
		this.title = title
		this.studio = studio
		this.rating = rating
	}
	getPG(arr) {
		return arr.filter((a) => {
			return a.rating === 'PG'
		})
	}
}
const JB = [
	new Movie('jb', 'hbo', 'PG'),
	new Movie('pb', 'abo', 'PG2'),
	new Movie('bb', 'cbo'),
]
const CR = new Movie('Casino Royale', 'Eon Productions', 'PG13')
console.log(CR.getPG(JB))

//Question 2
class Circle {
	constructor(radius = 1, color = 'red') {
		this.radius = radius
		this.color = color
	}
	setRadius(radius) {
		this.radius = radius
	}
	setColor(color) {
		this.color = color
	}
	getRadius() {
		return this.radius
	}
	getColor() {
		return this.color
	}
	toString() {
		return `Circle[radius=${this.radius},color=${this.color}]`
	}
	getArea() {
		return Math.PI * this.radius * this.radius
	}
	getCircumference() {
		return 2 * Math.PI * this.radius
	}
}
const smallCircle = new Circle()
console.log(smallCircle.getCircumference())

//Question 3
class person {
	constructor(firstname, lastname, age, gender, occupation, mobileNumber) {
		this.firstname = firstname
		this.lastname = lastname
		this.age = age
		this.gender = gender
		this.occupation = occupation
		this.mobileNumber = mobileNumber
	}
}
//Question 4
class uber {
	constructor(source, destination, distance) {
		this.source = source
		this.destination = destination
		this.distance = distance
		//Assuming its distance in km and bill is 15rs per km
		this.billAmount = distance * 15
	}
	getBill() {
		return this.billAmount
	}
}
const me = new uber('bangalore', 'chennai', 450)
console.log(`The bill amount is ₹${me.getBill()}`)
