const countDown = document.querySelector('.head')
let x = 11
let CB = (val) => {
	let c = 11 - val
	setTimeout(() => {
		val >= 1
			? (countDown.innerText = val)
			: (countDown.innerText = 'Happy Independence Day..!!')
	}, 1000 * c)
	return --val
}
let mP = new Promise((resolve, reject) => {
	resolve(x)
})
mP.then((val) => {
	return CB(val)
})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
	.then((val) => {
		return CB(val)
	})
