function toggleFilter(filterType) {
	let buttons = document.querySelectorAll('.filter')

	buttons.forEach(function (button) {
		if (button.classList.contains(filterType)) {
			button.id = 'active'
		} else {
			button.removeAttribute('id')
		}
	})
}

document.querySelector('.menu').addEventListener('click', function () {
	document.querySelector('.menu').classList.toggle('menu-active')
	document
		.querySelector('.navigation__menu')
		.classList.toggle('navigation-active')
})
