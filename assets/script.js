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

/******variable***********/
let dotSelected = 0;
const slidesLength = slides.length - 1;
const dots = document.querySelector(".dots"); /**** dots contien la balise hmtl qui contien la classe dots ****/




/*********function************/
/*generes les point des slide qui sont rajouter par dessus les img*/

function generatedots() { /*fonction qui genere des dots*/
	for (let i = 0; i <= slidesLength; i++) {  /*i est egal a 0 et que tant que i et <= a la longeur des slides -1 on boucle en ajoutant 1 a i*/
		const dotElement = document.createElement("div"); /*on defini la constante dotElement qui crée un element HTMl div */
		if (i == dotSelected) { /*si i et egal a dotSelected ( egal a 0)*/
			dotElement.setAttribute("class", "dot dot_selected") /*on ajoute a dotelement les classe dot dot_selected*/
		}
		else { /*si i et pas egal a dotSelected*/
			dotElement.setAttribute("class", "dot") /*on ajoute a dotelement la classe dot*/
		}
		dots.appendChild(dotElement);/*dots et une balise html, on ajoute dotElement a dots */
	}
}


function changeSlides() { /*fonction qui change les image des slide*/
	const bannerImg = document.querySelector(".banner-img")/*bannerImg contien la balise html ayant la classe banner-img*/
	const bannertagline = document.querySelector("#banner p");/*baliseTexte contien la balise html P de l'element ayant l'ID banner*/
	bannerImg.src = "./assets/images/slideshow/" + slides[dotSelected].image; /*on change la proprieter src de la balise img L46 dans le chemin assets on va cherche la valeur de la proprieter image a l'index dotSelected*/
	bannertagline.innerHTML = slides[dotSelected].tagLine; /*on change l'interieur de la balise P L47 on va cherche la valeur de la proprieter Tagline a l'index dotSelected*/
}





generatedots();

const arrowLeft = document.querySelector(".arrow_left"); /**/
arrowLeft.addEventListener("click", function () { /**/
	dotSelected--; /**/
	dotSelected < 0 ? dotSelected = slidesLength : null;  /**/
	changeSlides(); /**/
	return console.log("click arrow left" + dotSelected + " " + slidesLength); /**/
})


const arrowRight = document.querySelector(".arrow_right"); /**/
arrowRight.addEventListener("click", function () { /**/
	dotSelected++; /**/
	dotSelected > slidesLength ? dotSelected = 0 : null; /**/
	changeSlides(); /**/
	return console.log("click arrow right" + dotSelected + " " + slidesLength); /**/
})
