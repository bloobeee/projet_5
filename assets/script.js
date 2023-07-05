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
const dotElements = document.querySelectorAll(".dot");/*on defini la constante dotElements qui contient la balise html qui contient la classe dot */
dotElements.forEach((dot, index) => {/*permet de selectionner chaque element du tableau dotelement avec la classe dot ou index */
	if (index === dotSelected) { /*si index et egal a dotSelected*/
		dot.classList.add("dot_selected");/*on ajoute la classe dot_selected */
	} else {/*si index et pas egal a dotSelected */
		dot.classList.remove("dot_selected");/*on supprime la classe dot_selected */
	}
});
	const bannerImg = document.querySelector(".banner-img")/*bannerImg contien la balise html ayant la classe banner-img*/
	const bannertagline = document.querySelector("#banner p");/*baliseTexte contien la balise html P de l'element ayant l'ID banner*/
	bannerImg.src = "./assets/images/slideshow/" + slides[dotSelected].image; /*on change la proprieter src de la balise img L46 dans le chemin assets on va cherche la valeur de la proprieter image a l'index dotSelected*/
	bannertagline.innerHTML = slides[dotSelected].tagLine; /*on change l'interieur de la balise P L47 on va cherche la valeur de la proprieter Tagline a l'index dotSelected*/
}






generatedots();/*genere le premiere affichage des dots*/

const arrowLeft = document.querySelector(".arrow_left"); /*arrowLeft contien la balise html ayant la classe arrow_left*/
arrowLeft.addEventListener("click", function () { /*on ajoute un eventlistener au click de arrowleft*/
	dotSelected--; /*on retire 1 a dotselected */
	if ( dotSelected < 0) {dotSelected = slidesLength ;}  /* si dot selected et infirieur a zero alors dotSelected et egal a slidesLength sinon dotSelected ne change pas*/
	changeSlides(); /*permet de changer les slide a chaque click*/
	return console.log("click arrow left" + dotSelected + " " + slidesLength); /*permet de faire un retour dans la console*/
})


const arrowRight = document.querySelector(".arrow_right"); /*on ajoute un eventlistener au click de arrowright*/
arrowRight.addEventListener("click", function () { /*on rajoute une fonction a arrowright avec addEventListener qui permet de cliquer sur la droite*/
	dotSelected++; /*on ajoute 1 a dotselected*/
	if (dotSelected > slidesLength){ dotSelected = 0;} /*si dot selected et supperieur a slideLength alors dotSelected et egal a 0 sinon dot selected ne change pas*/
	changeSlides(); /*permet de changer les slide a chaque click*/
	return console.log("click arrow right" + dotSelected + " " + slidesLength); /*permet de faire un retour dans la console*/
})
