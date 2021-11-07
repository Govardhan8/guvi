const fetchData = async () => {
	// Fetching the data from api
	const data = await fetch('https://picsum.photos/v2/list')
	const jsonData = await data.json()
	//Calling the function to render Data in html
	render(jsonData)
}

//Rendering the fetched data in DOM
const render = (data) => {
	//Getting the container element from document object/DOM
	const container = document.querySelector('.container')
	let images = ''
	data.forEach(({ author, download_url }) => {
		//Dynamically converting the api data into html content
		images += `
        <div class="imageContainer">
            <img src=${download_url} alt=${author} class="image"/>
            <p class="author">Author: <span>${author}</span> </p>
        </div>
        `
	})

	//Adding the image Containers into the container
	container.innerHTML = `
    ${images}
    `
}

//Calling the function to fetch data from api
fetchData()
