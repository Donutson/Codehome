/*GESTION DES CONTACTS   |
--------------------------*/
// bouton d'ajout de ligne
let add1=document.getElementById('add1');
// bouton de retrait de ligne
let withdraw1=document.getElementById('withdraw1');
//la table contact
let contact=document.getElementById('contact');
//indice de ligne
var i=1;
//table des lignes
var tlignes=[];
//ligne standard
var lignedeb ="<tr><td><div class='form-group'><input class='input-lg form-control' type='text' name='nom";
var lignemid="'required></div></td><td><div class='form-group'><input class='input-lg form-control' type='phone' name='contact";
var ligneend="'required></div></td></tr>"
//function pour recuperer les lignes
function takeline(tlignes){
	let lignes='';
	tlignes.forEach(ligne=>{lignes+=ligne;});
	return lignes;
}
//gestion de l'ajout de ligne
add1.addEventListener('click',function(){
	if(i<=10){
		let ligne=lignedeb+i+lignemid+i+ligneend;
		let lignes;
		tlignes.push(ligne);
		i++;
		lignes=takeline(tlignes);
		contact.innerHTML=lignes;
	}
})
//gestion du retrait de ligne
withdraw1.addEventListener('click',function(){
	let lignes;
	tlignes.pop();
	if(i>1){i--;}
	lignes=takeline(tlignes);
	contact.innerHTML=lignes;
})


/*GESTION DES ETAPES  |
--------------------------*/
// bouton d'ajout de ligne
let add2=document.getElementById('add2');
// bouton de retrait de ligne
let withdraw2=document.getElementById('withdraw2');
//la table contact
let etapes=document.getElementById('etapes');
//indice de ligne
var j=1;
//table des lignes
var tlignes1=[];
//ligne standard
var ligne1deb ="<tr><td><div class='form-group'><input class='input-lg form-control' type='text' name='etape";
var ligne1mid="'' required></div></td><td><div class='form-group'><input class='input-lg form-control' type='date' name='debut";
var ligne1end="' required></div></td></tr>"
//gestion de l'ajout de ligne
add2.addEventListener('click',function(){
	if(j<=10){
		let ligne=ligne1deb+j+ligne1mid+j+ligne1end;
		let lignes;
		tlignes1.push(ligne);
		j++;
		lignes=takeline(tlignes1);
		etapes.innerHTML=lignes;
	}
})
//gestion du retrait de ligne
withdraw2.addEventListener('click',function(){
	let lignes;
	tlignes1.pop();
	if(j>1){j--;}
	lignes=takeline(tlignes1);
	etapes.innerHTML=lignes;
})
/*GESTION DES BOUTONS UP ET DOWN |
--------------------------*/
down=document.getElementById('down');
up=document.getElementById('up');
	//gestion du down
down.addEventListener('click',function(e){
	e.target.style.display='none';
	up.style.display='inline';
	document.getElementById('masquer').style.display='block';
	document.getElementsByTagName('section')[0].style.display='block';
	document.getElementById('controls').style.display='block';
	document.getElementById('masquer1').style.display='block';
	document.getElementsByTagName('section')[1].style.display='block';
	document.getElementById('controls1').style.display='block';
})
	//gestion du up
up.addEventListener('click',function(e){
	e.target.style.display='none';
	down.style.display='inline';
	document.getElementById('masquer').style.display='none';
	document.getElementsByTagName('section')[0].style.display='none';
	document.getElementById('controls').style.display='none';
	document.getElementById('masquer1').style.display='none';
	document.getElementsByTagName('section')[1].style.display='none';
	document.getElementById('controls1').style.display='none';
})