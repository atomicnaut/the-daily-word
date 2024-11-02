// Nav
const homeArrow = document.querySelector("#home-arrow");
const height = 2000;

// Onscroll Function
window.onscroll = function () {
	// Nav
	if (window.scrollY > height) {
		homeArrow.style.display = "block";
	}

	// Features
	// if (window.scrollY > read_height) {
	// 	read.style.opacity = "1";
	// } else {
	// 	read.style.opacity = "0.2";
	// }
	// if (window.scrollY > listen_height) {
	// 	listen.style.opacity = "1";
	// } else {
	// 	listen.style.opacity = "0.2";
	// }
	// if (window.scrollY > watch_height) {
	// 	watch.style.opacity = "1";
	// } else {
	// 	watch.style.opacity = "0.2";
	// }
};
