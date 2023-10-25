const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: false,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 20,
	autoHeight: true,
	speed: 800,
	// autoplay: true,
	// Navigation arrows
	navigation: {
		nextEl: ".s-button-next",
		prevEl: ".s-button-prev",
	},
	breakpoints: {
		1100: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		640: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
	},
});
