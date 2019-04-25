/*GESTION DES BOUTONS UP ET DOWN |
--------------------------*/
down=document.getElementById('down');
up=document.getElementById('up');
	//gestion du down
down.addEventListener('click',function(e){
	e.target.style.display='none';
	up.style.display='inline';
	document.getElementById('contact').style.display='block';
	document.getElementsByTagName('section')[0].style.display='block';
	document.getElementById('etapes').style.display='block';
	document.getElementsByTagName('section')[1].style.display='block';
})
	//gestion du up
up.addEventListener('click',function(e){
	e.target.style.display='none';
	down.style.display='inline';
	document.getElementById('contact').style.display='none';
	document.getElementsByTagName('section')[0].style.display='none';
	document.getElementById('etapes').style.display='none';
	document.getElementsByTagName('section')[1].style.display='none';
})