const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 10,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
