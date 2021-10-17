//Fetching Data
const fetchData = async () => {
	const response = await fetch(
		'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'
	)
	const users = await response.json()
	pagination(users)
}
fetchData()
let changePage, prevPage, nextPage, firstPage, lastPage, activePage

//Inserting pagination block
const pagination = (users) => {
	let currPage = 1
	const nOfPages = users.length / 10
	const pagination = document.createElement('div')
	pagination.className = 'pagesPosition'
	document.body.append(pagination)
	let pagesList = ''

	for (var i = 1; i < nOfPages - 1; i++) {
		const customClass = `page_${i + 1}`
		pagesList += `<button class='${customClass}' value=${i} onclick="changePage(${i})">${
			i + 1
		}</button>`
	}

	pagination.innerHTML = `
    <div class="displayData"></div>
    <div class="pages">
    <button class="first" onclick="firstPage()">First</button>
    <button class="previous" onclick="prevPage()">Previous</button>
    ${pagesList}
    <button class="next" onclick="nextPage()">Next</button>
    <button class="last" onclick="lastPage()">Last</button>
    </div>
    `
	//Dividing the json data into 10 elements at max
	let arrays = []
	const contentGenerator = (users) => {
		let count = 1
		let arr = []
		for (i = 0; i < users.length; i++) {
			if (count > 10 || i === users.length) {
				count = 1
				arrays.push(arr)
				arr = []
			}
			arr.push(users[i])
			count++
		}
		displayedData(currPage, arrays)
	}
	contentGenerator(users)
	changePage = (i) => {
		currPage = i + 1
		activePage(currPage)
		displayedData(currPage, arrays)
	}
	prevPage = () => {
		if (currPage > 1) {
			currPage--
			activePage(currPage)
			displayedData(currPage, arrays)
		}
	}
	nextPage = () => {
		if (currPage < arrays.length) {
			currPage++
			activePage(currPage)
			displayedData(currPage, arrays)
		}
	}
	firstPage = () => {
		currPage = 1
		activePage(currPage)
		displayedData(currPage, arrays)
	}
	lastPage = () => {
		currPage = arrays.length
		activePage(currPage)
		displayedData(currPage, arrays)
	}
	activePage = (i) => {
		if (i === 1) {
			makePages()
			document.querySelector('.first').className = 'first active'
		} else if (i === arrays.length) {
			makePages()
			document.querySelector('.last').className = 'last active'
		} else {
			makePages()
			document.querySelector(`.page_${i}`).className = `page_${i} active`
		}
	}
	const makePages = () => {
		const buttons = document.querySelectorAll('button')
		buttons.forEach((button) => {
			if (button.classList.contains('active')) {
				button.className = button.classList[0]
			}
		})
	}
}
const displayedData = (currPage, arrays) => {
	const div = document.querySelector('.displayData')
	let Data = ''
	arrays[currPage - 1].forEach((data) => {
		Data += `
        <div class="userBlock">
        <p><b>UserName :- </b>${data.name}</p>
        <p><b>Emaill :- </b>${data.email}</p>
        </div>
    `
	})
	div.innerHTML = `${Data}`
}
