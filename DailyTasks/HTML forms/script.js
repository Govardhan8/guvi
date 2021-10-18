document.querySelector('.submitButton').addEventListener('click', (e) => {
	e.preventDefault()
	formSubmit()
})
const dt = document
let fname, lname, address, pincode, gender, foods, state, country, table
const cover = dt.querySelector('.cover')
table = dt.createElement('table')
cover.append(table)
const thead = table.createTHead()
const tbody = table.createTBody()
const tableAtts = [
	'First Name',
	'Last Name',
	'Address',
	'Pincode',
	'Gender',
	'Food',
	'State',
	'Country',
]

let tr = thead.insertRow(0)
tableAtts.map((h) => {
	let th1 = tr.insertCell(tableAtts.indexOf(h))
	th1.innerHTML = `${h}`
})

table.setAttribute('class', 'tableController')
let x = 0

const formSubmit = () => {
	let tr
	let data = [],
		selected = []
	data[0] = dt.querySelector('#firstName')
	data[1] = dt.querySelector('#lastName')
	data[2] = dt.querySelector('#address')
	data[3] = dt.querySelector('#pincode')
	data[4] = dt.querySelector('input[name="gender"]:checked')
	data[5] = dt.querySelector('#food')
	data[6] = dt.querySelector('#state')
	data[7] = dt.querySelector('#country')
	tr = tbody.insertRow(x)

	for (let option of document.getElementById('food').options) {
		if (option.selected) {
			selected.push(option.value)
		}
	}
	foods = selected.join(', ')

	tr.innerHTML = `
		<td data-label="firstName">${data[0].value}</td>
		<td data-label="lastName">${data[1].value}</td>
		<td data-label="address"><p class="address">${data[2].value}</p></td>
		<td data-label="pincode">${data[3].value}</td>
		<td data-label="gender">${data[4].value}</td>
		<td data-label="foods">${foods}</td>
		<td data-label="state">${data[6].value}</td>
		<td data-label="country">${data[7].value}</td>
	`
	tbody.appendChild(tr)

	data.map((d) => {
		let i = data.indexOf(d)
		if (i === 4) {
			data[i].checked = false
		} else {
			data[i].value = ''
		}
	})
}
