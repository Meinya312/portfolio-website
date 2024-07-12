const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#2B2B2B';
	} else {
		header.style.backgroundColor = '#423F3E';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function copyToClipboard() {
	const textToCopy = "09999337230"; // Replace with the text you want to copy
	navigator.clipboard.writeText(textToCopy)
	  .then(() => {
		alert('text copy');
		// Optionally, you can provide user feedback here (e.g., show a tooltip)
	  })
	  .catch(err => {
		console.error('Error copying text: ', err);
	  });
  }
