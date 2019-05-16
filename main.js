"use strict";


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


function incrementParkinsonsOnJim(){
	// on button press make the nigger shake fast
	let ourBoys = document.getElementsByClassName("jim");
	ourBoys.setAttribute("style", "animation:shake 1s");
}

function beanButton(){
	var x = document.getElementById("BEANS");
	x.play();
}

function buttonPress(){
	// incrementParkinsonsOnJim();
	console.log("Button Press");
	var x = document.getElementById("scream" + getRandomInt(8));
	x.play();
}

function NO(){
	console.log("fuckme");
	// incrementParkinsonsOnJim();
	let counter = 0;
	let howManyLoops = 0;
	let bigowie = document.getElementById("bigscream").play();
	while(counter <= 7){
		var x1 = document.getElementById("scream" + counter);
		x1.play();
		counter++;
		if(howManyLoops < 2){
			continue;
		}else{
			break;
		}
	}
	howManyLoops++;

}

