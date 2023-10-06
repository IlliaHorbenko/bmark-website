const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 20,
	autoHeight: true,
	speed: 800,
	// autoplay: true,
	// Navigation arrows
	navigation: {
		nextEl: ".s-button-next",
		prevEl: ".s-button-prev",
	},
});
