let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	if (navbar.classList.contains('active')) {
		menuIcon.classList.remove('bx-x');
		navbar.classList.remove('active');
	}
};
