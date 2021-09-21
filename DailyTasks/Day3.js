//Question 1 - For the given JSON iterate over all for loops (for, for in, for of, forEach)

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

//Question 2 - Create your own resume data in JSON format
{
var resume = {
		basics: {
			name: 'Govardhan N',
			email: 'govardhangova88@gmail.com',
			phone: '9900990099',
			degree: 'Bachelor of engineering',
			location: {
				city: 'Bangalore',
				countryCode: 'India',
			},
			profiles: [
				{
					network:
						'A social media or other profile that you would like to include (e.g. LinkedIn, Twitter)',
					username: 'Your username on this network',
					url: 'A URL to your user profile page',
				},
			],
		},
		work: [
			{
				company: 'Capgemini',
				position: 'Senior software engineer',
				startDate: 'Sept-2019',
				endDate: 'Dec-2021',
			},
		],
		volunteer: [
			{
				organization: 'Lions club',
				position: 'Volunteer',
				startDate: '15-Jan-2018',
				endDate: '15-Jan-2018',
			},
		],
		education: [
			{
				institution: 'DBIT',
				area: 'ECE',
				startDate: '2015',
				endDate: '2019',
				gpa: '7',
			},
		],
		awards: [
			{
				title: 'Best employee of the month',
				month: 'June',
				awarder: 'Capgemini',
			},
		],
		skills: [
			{
				name: 'Programming Languages',
				keywords: ['Java', 'C++', 'c', 'python', 'js'],
			},
		],
		languages: ['English', 'Kannada', 'Telugu', 'Hindi', 'Tamil'],
		interests: [
			{
				name: 'Sports',
				keywords: ['Cricket', 'kabbadi', 'basketball'],
			},
		],
	}
}
