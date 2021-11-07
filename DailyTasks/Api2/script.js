const fetchData = async () => {
	// Fetching the data from api
	const data = await fetch('https://rickandmortyapi.com/api/character/')
	const jsonData = await data.json()
	//Calling the function to render Data in html
	render(jsonData.results)
}

//Rendering the fetched data in DOM
const render = (data) => {
	//Getting the container element from document object/DOM
	const container = document.querySelector('.container')
	let images = ''
	data.forEach(({ name, image, status, species, origin, location }) => {
		//Dynamically converting the api data into html content
		const className = status === 'Alive' ? 'green' : 'red'
		images += `
        <article class="imageContainer">
            <img src=${image} alt=${name} class="image"/>
            <div class="details">
                <h3 class="name">${name}</h3>
                <h4 class="status ${className}">${status} - ${species}</h4>
                <p class="location"><span>Last known Location:</span>${location.name}</p>
                <p class="location"><span>First seen in:</span>${origin.name}</p>
            </div>
        </article>
        `
	})

	//Adding the image Containers into the container
	container.innerHTML = `
    ${images}
    `
}

//Calling the function to fetch data from api
fetchData()
