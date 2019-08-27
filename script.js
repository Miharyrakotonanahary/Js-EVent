//Fonctionalité1 et 1bis
console.log("Fonctionalité 1 et 1bis");
let footer= document.querySelector("footer");
let i=1
footer.addEventListener("click", function(){ 
 
	console.log("Clique" + i++);
});

//Fonctionalité 2
console.log("Fonctionalité 2");
let buttonToggler = document.getElementsByClassName("navbar-toggler")[0];
let navBar = document.getElementById("navbarHeader");
buttonToggler.addEventListener("click", function(){
navBar.classList.toggle("collapse");	
});
           
//fonctionnement 3
console.log("Fonctionalité 3");
let card = document.getElementsByClassName("card-text")[0]
let red = document.getElementsByClassName("btn-sm btn-outline-secondary")[0]
red.addEventListener("click", function(){
card.style.color = "red";
});

//fonctionnement 4
console.log("Fonctionalité 4");
let card1 = document.getElementsByClassName("card-text")[1]
let green = document.getElementsByClassName("btn-outline-secondary")[1]
green.addEventListener("click", function(){
if(card1.style.color === "green") {
	card1.style.color = "";
} 
else {
	card1.style.color = "green"
}
});

//fonctionnement 5

console.log("Fonctionalité 5");
let bootstrap = document.querySelector("header");
let lien =document.querySelector("link");
let link = true;
bootstrap.addEventListener("dblclick",function(){
	if(link){
		document.querySelector("link").disabled = true;
		link = false;
	} 
	else{
		document.querySelector("link").disabled = false;
		link = true;
	} 
});

//fonctionnement 6
console.log("fonctionnement 6");
let btnView = document.querySelectorAll('.btn.btn-sm.btn-success');
for (let i = 0; i < btnView.length; i++) {
	let card_image = btnView[i].parentNode.parentNode.parentNode.previousElementSibling;
	let cart_textView = btnView[i].parentNode.parentNode.previousElementSibling;
	let toggle = true;

	btnView[i].addEventListener("mouseover", function () {
		if (toggle == true) {
			cart_textView.style.display = 'none';// paragraphe disparu
			card_image.style.width = '20%';// l'image se reduit a  20%
			toggle = false;
		}
		else if (toggle == false) {
			cart_textView.style.display = 'block';//paragraph revient en normal
			card_image.style.width = '100%';// l'image revient normal
			toggle = true;
		}
	});
}

//fonctionnement 7
console.log("fonctionnement 7");
let next = document.querySelectorAll('a.btn:nth-child(2)')[0]; 
next.addEventListener('click',turnRight);//Clic le bout
function turnRight(event){
	let cards = document.querySelectorAll('.album  .row')[0]; 
    let card = document.getElementsByClassName('card')[5].parentElement; 
	cards.insertAdjacentHTML('afterbegin',card.outerHTML); 
	cards.removeChild(card); 
    event.preventDefault(); 
}
//fonctionnement 8
console.log("fonctionnement 8");
let preview = document.getElementsByClassName('btn btn-primary my-2')[0];
preview.addEventListener("click", function (event) {
	event.preventDefault();
	let card = document.getElementsByClassName("card");
	pCard = card[0].parentNode;
	dCard = card[5].parentNode;

	parent = dCard.parentNode;

	parent.insertBefore(pCard, dCard.nextSibling);
});

//fonctionnement 9
let jsEvent = document.getElementsByTagName('strong')[0];
let bodyText = document.querySelector('body');

let mouse = jsEvent.addEventListener("mouseenter", function () {
	document.addEventListener("keydown", function (event) {
		keyEnter = event.keyCode;
		console.log(keyEnter);
		switch (keyEnter) {
			case 65:
			bodyText.removeAttribute('class');
				bodyText.classList.add('col-4');
				break;
			case 89:
			bodyText.removeAttribute('class');
				bodyText.classList.add('col-4');
				bodyText.classList.add('offset-md-4');
				console.log('test');
				break;

			case 80:
			bodyText.removeAttribute('class');
				bodyText.classList.add('col-4');
				bodyText.classList.add('offset-md-8');
				console.log('test');
				break;

				case 66:
			bodyText.removeAttribute('class');
				console.log('test');
				break;
		}

	})
	console.log('mouse');
});


