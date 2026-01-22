'use strict';   // Mode strict du JavaScript

var heros = document.querySelector('#heros');
var speed = 10;
var speedMonster = [40, 15, 52, 23, 30];
var loopEvent = 0;
var loop = 0;

// position de départ
heros.style.left = 0;


function gestionClavier(event)
{
	var touche = event.keyCode;

	document.querySelector("#heros").className = '';

	switch(event.keyCode)
	{
		case 37:
			heros.classList.add("gauche-1");
			if(parseInt(heros.style.left) >= 2) {
				heros.style.left = parseInt(heros.style.left) - speed + "px";
			}
		
		break;

		case 39:
			heros.classList.add("droite-1");
			if(parseInt(heros.style.left) <= 1450) {
				heros.style.left = parseInt(heros.style.left) + speed + "px";
			}
		break;
	}
}

function deplacementMonstres()
{
	var start, newStart;
	for(var i = 1; i <= 6; i++)
	{
		start = 0;
		newStart = document.querySelector('#monstre'+i).offsetTop;
		if (newStart <= 800) {
			start = newStart;
		}

		if (start >= 630 && start <= 720) {
			detectCollision(i);
		}
		document.querySelector('#monstre'+i).style.top = start+speedMonster[i-1]+'px';
	}
}


function detectCollision(i)
{
	var posMonster = document.querySelector('#monstre'+i).offsetLeft;
	var posHeros = parseInt(heros.style.left);

	if (posHeros >= posMonster && posHeros <= posMonster+80) {
		alert('Vous etes mort');
	}
}





document.addEventListener('keydown', gestionClavier);
var moveMonster = window.setInterval(deplacementMonstres, 200);
