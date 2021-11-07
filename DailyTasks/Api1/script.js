const fetchData = async () => {
	const data = await fetch('https://picsum.photos/v2/list')
	const jsonData = await data.json()
	console.log(jsonData)
	render(jsonData)
}
fetchData()
const render = (data) => {
	const container = document.querySelector('.container')
	let images = ''
	data.forEach(({ author, download_url }) => {
		images += `
        <div class="imageContainer">
            <img src=${download_url} alt=${author} class="image"/>
            <p class="author">Author: <span>${author}</span> </p>
        </div>
        `
	})

	container.innerHTML = `
    ${images}
    `
}
