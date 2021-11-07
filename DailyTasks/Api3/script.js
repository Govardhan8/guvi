const fetchData = async () => {
	// Fetching the data from api
	const data = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/')
	const jsonData = await data.json()
	//Calling the function to render Data in html
	render(jsonData.data)
}

//Rendering the fetched data in DOM
const render = (data) => {
	//Getting the container element from document object/DOM
	const container = document.querySelector('.container')
	let images = ''
	data.forEach(({ anime_name, anime_img }) => {
		//Dynamically converting the api data into html content
		images += `
        <div class="imageContainer">
            <img src=${anime_img} alt=${anime_name} class="image"/>
            <p class="name">Name: <span>${anime_name}</span> </p>
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
