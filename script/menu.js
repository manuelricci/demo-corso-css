const menuToggle = document.querySelectorAll('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

if (menuToggle.length > 0 && mainMenu) {
	menuToggle.forEach((item) => {
		item.addEventListener('click', handleMenuToggle);
	})
}

function handleMenuToggle() {
	mainMenu.classList.toggle('open');
}
