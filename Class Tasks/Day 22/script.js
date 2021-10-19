const getUsers = async () => {
	const data = await fetch('https://6166c4e213aa1d00170a670e.mockapi.io/users/')
	const users = await data.json()
	let add = `
		<div class="add">
			<input type="text" id="name" placeholder="User Name" autocomplete="off"/>
			<input type="text" id="url" placeholder="Avatar URL" autocomplete="off"/>
			<button onclick="addUser()">Add user</button>			
		</div>
	`

	let divData = ''
	users.map((user) => {
		let cls = 'user' + user.id
		divData += `
		<div class="${cls} userBlock">	
		<img src="${user.avatar}" alt="${user.id}" />
		<div class="details">
		<p class="username">${user.name}</p>
		<button onclick="editUser(${user.id})" class="editUser"><i class="fas fa-edit"></i></button>
		<button onclick="deleteUser(${user.id})" class="deleteUser"><i class="fas fa-trash-alt"></i></button>
		</div>	
		<div class="editBox editUser_${user.id}">
			<input type="text" placeholder="User Name" class="name${user.id}" value="${user.name}" autocomplete="off"/>
			<input type="text" placeholder="Avatar URL" class="url${user.id}" value="${user.avatar}"" autocomplete="off"/>
			<button class="save_${user.id}" onclick="updateUser(${user.id})">Save</button>
		</div>
		</div>
		`
	})
	document.body.innerHTML = `
	${add}
	<div class="users">
	${divData}
	</div>
	`
}
getUsers()

const addUser = async () => {
	let name = document.querySelector('#name').value
	let url = document.querySelector('#url').value
	await fetch('https://6166c4e213aa1d00170a670e.mockapi.io/users/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, avatar: url }),
	})
	console.log(name, url)
	document.querySelector('#name').value = ''
	document.querySelector('#url').value = ''
	getUsers()
}
const editUser = (id) => {
	const div = document.querySelector(`.editUser_${id}`)
	if (div.style.display === 'flex') div.style.display = 'none'
	else div.style.display = 'flex'
}
const updateUser = async (id) => {
	const name = document.querySelector(`.name${id}`).value
	const url = document.querySelector(`.url${id}`).value
	await fetch('https://6166c4e213aa1d00170a670e.mockapi.io/users/' + id, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, avatar: url }),
	})
	getUsers()
}
const deleteUser = async (id) => {
	await fetch('https://6166c4e213aa1d00170a670e.mockapi.io/users/' + id, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	})
	getUsers()
}
