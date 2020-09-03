// --------------------------------------------------
// logo
// --------------------------------------------------


let text = document.querySelector(".logo");

let temp = 0;
let timer = setInterval(onTick, 100);

function onTick() {
	const span = text.querySelectorAll('span')[temp];
	span.classList.add('fade');
	temp++
	if (temp === 9) {
		clearInterval(timer);
		timer = null;
		return;
	}
}





// --------------------------------------------------
// menu
// --------------------------------------------------



var animacja = document.getElementById("animacja");
const content = document.querySelector('.content');

let resize_up = false;
let resize_down = false;


// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------


function resizeing(widther) {
	animacja.style.transition= "none";
	if ((widther <= 550) && resize_down == false) {
		if (animacja.style.left == '0%') { animacja.style.left = '0%'; animacja.style.top = '0%' }
		if (animacja.style.left == '20%') { animacja.style.left = '0%'; animacja.style.top = '20%' }
		if (animacja.style.left == '40%') { animacja.style.left = '0%'; animacja.style.top = '40%' }
		if (animacja.style.left == '60%') { animacja.style.left = '0%'; animacja.style.top = '60%' }
		if (animacja.style.left == '80%') { animacja.style.left = '0%'; animacja.style.top = '80%' }
		resize_down = true;
		resize_up = false;
	}
	if ((widther > 551) && resize_up == false) {
		if (animacja.style.top == '0%') { animacja.style.top = '0%'; animacja.style.left = '0%' }
		if (animacja.style.top == '20%') { animacja.style.top = '0%'; animacja.style.left = '20%' }
		if (animacja.style.top == '40%') { animacja.style.top = '0%'; animacja.style.left = '40%' }
		if (animacja.style.top == '60%') { animacja.style.top = '0%'; animacja.style.left = '60%' }
		if (animacja.style.top == '80%') { animacja.style.top = '0%'; animacja.style.left = '80%' }
		resize_up = true;
		resize_down = false;
	}
	setTimeout(function(){animacja.style.transition= "left .75s ease 0s, top .75s ease 0s";},10)
}

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------





document.getElementsByTagName("body")[0].onresize = function () {
	
	if (window.innerWidth > screen.width) { resizeing(screen.width) }
	else { resizeing(window.innerWidth) }

}




// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------


function buttonite(mnoż, active) {
	if (window.innerWidth > 550) {
		animacja.style.left = (mnoż * 20) + '%';
	}
	else {
		animacja.style.top = (mnoż * 20) + '%';
	}

	const event = content.querySelectorAll('.events');
	var activated = content.querySelectorAll('.' + active);

	
	for (let y = 0; y < event.length; y++) {

		let checking=0;
		for(let x=0; x<event[y].classList.length; x++)
		{
		    if(event[y].classList[x]==active){
		        checking=1;
		    }
		}
		if(checking==1){continue}

		event[y].style.opacity='0';
		
		setTimeout(function(){ event[y].style.display = 'none';}, 500)


	}
	for (let y = 0; y < activated.length; y++) {
		setTimeout(function(){ activated[y].style.display = 'inline-block';}, 500)
		setTimeout(function(){ activated [y].style.opacity='1'}, 700)
	}



}


// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------




function start_Wszystkie() {
	buttonite(0, 'events');
	// if(window.innerWidth < 960){
	//     content.style.height='';
	// }
}
function start_Ilustracje() {
	buttonite(1, 'Ilustracje');
}
function start_Plakaty() {
	buttonite(2, 'Plakaty');
}
function start_Topografia() {
	buttonite(3, 'Topografia');
}
function start_Opakowania() {
	buttonite(4, 'Opakowania');
}





// --------------------------------------------------
// content
// --------------------------------------------------



Card = new Array;

Card[0] = {
	Front: '<img src="./Zdjęcia/Photo-3.jpg" alt="xx" class="card_photo" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fuga!</p>',
	class: 'Ilustracje',
};

Card[1] = {
	Front: '<img src="./Zdjęcia/Photo-4.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Ilustracje',
};

Card[2] = {
	Front: '<img src="./Zdjęcia/Photo-5.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fuga!</p>',
	class: 'Ilustracje',
};

Card[3] = {
	Front: '<img src="./Zdjęcia/Photo-6.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Ilustracje',
};

Card[4] = {
	Front: '<img src="./Zdjęcia/Photo-7.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Plakaty',
};

Card[5] = {
	Front: '<img src="./Zdjęcia/Photo-8.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Plakaty',
};

Card[6] = {
	Front: '<img src="./Zdjęcia/Photo-9.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Topografia',
};

Card[7] = {
	Front: '<img src="./Zdjęcia/Photo-10.jpg" class="card_photo" alt="xx" />',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Topografia',
};

Card[8] = {
	Front: '<img src="./Zdjęcia/Photo-1.png" alt="xx" style="height: 85%;"/>',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Opakowania',
};
Card[9] = {
	Front: '<img src="./Zdjęcia/Photo-2.png" alt="xx" style="height: 85%;"/>',
	Back: '<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, hic.</p>',
	class: 'Opakowania',
};

const long = Card.length;


// information: const content = document.querySelector('.content'); 


var x = '';

for (let y = 0; y < long; y++) {
	x += '<div class="events ' + Card[y].class + '">';
		x += '<div class="card">';
			x += '<figure class="front">'
				x += Card[y].Front;
			x += '</figure>';
			x += '<figure class="back">'
				x += Card[y].Back;
			x += '</figure>';
	x += '</div> </div>'
};

content.innerHTML = x;



// --------------------------------------------------
// footer
// --------------------------------------------------



let Social_image = document.getElementsByClassName("Social_image");


function Social_one(photo1, position) {
	Social_image[position].setAttribute("src", "./Zdjęcia/Social Media/" + photo1);
}
function Social_one_over(photo2, position) {
	Social_image[position].setAttribute("src", "./Zdjęcia/Social Media/" + photo2);
}





