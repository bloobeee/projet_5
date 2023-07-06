const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let dotSelected = 0;
const slidesLength = slides.length - 1;
const dots = document.querySelector(".dots");

function generatedots() {
	for (let i = 0; i <= slidesLength; i++) {
		const dotElement = document.createElement("div");
		if (i == dotSelected) {
			dotElement.setAttribute("class", "dot dot_selected")
		}
		else {
			dotElement.setAttribute("class", "dot")
		}
		dots.appendChild(dotElement);
	}
}
function changeSlides() {
	const dotElements = document.querySelectorAll(".dot");
	dotElements.forEach((dot, index) => {
		if (index === dotSelected) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
	const bannerImg = document.querySelector(".banner-img")
	const bannertagline = document.querySelector("#banner p");
	bannerImg.src = "./assets/images/slideshow/" + slides[dotSelected].image;
	bannertagline.innerHTML = slides[dotSelected].tagLine;
}
generatedots();
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
	dotSelected--;
	if (dotSelected < 0) { dotSelected = slidesLength; }
	changeSlides();
	return console.log("click arrow left" + dotSelected + " " + slidesLength);
})
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	dotSelected++;
	if (dotSelected > slidesLength) { dotSelected = 0; }
	changeSlides();
	return console.log("click arrow right" + dotSelected + " " + slidesLength); 
})