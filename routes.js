require('babel-register')
//preparation des modules
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
let connection=require('./models/codehomeconnect')
//moteur de templates
app.set('view engine','ejs');
/*MIDDLEWARES
---------------*/
//on gère le css et compagnon
app.use(express.static('public'));
	//on parse l'url et le json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
/*GESTION DES ROUTES
---------------*/
	// index en get
app.get('/',function(req,res){
	res.render('index')
})
// monprojet/voir en get
app.get('/pages/monprojet/voir',function(req,res){
	let prendre=require('./models/prendre')
	prendre.infos(function(info){
		res.render('pages/monprojet/voir',{valeur: info[0][0],contacts: info[1],etapes: info[2]})
	})
})
	// liensutiles en get
app.get('/pages/liensutiles',function(req,res){
	connection.query('SELECT titre,adresse FROM liensutiles',function(err,result){
		if(err) throw err
		res.render('pages/liensutiles',{liens:result})	
	})
})
	// monprojet en get
app.get('/pages/monprojet',function(req,res){
	res.render('pages/monprojet')
})
	
	// monprojet/editer en get
app.get('/pages/monprojet/editer',function(req,res){
	res.render('pages/monprojet/editer')
})
	// liensutiles/detail en get
app.get('/pages/liensutiles/affiche/:detail',function(req,res){
	res.render('pages/liensutiles/affiche',{page:req.params.detail})
})
	// traitement de l'édition
app.post('/traitementedition',function(req,res){
	//entrer du nom si existant
	if(req.body.nom){
		connection.query('UPDATE voir set nom=?',[req.body.nom],function(err,content){
			if(err)throw err;
		})
	}
	//entrer du type si existant
	if(req.body.type){
		connection.query('UPDATE voir set type=?',[req.body.type],function(err,content){
			if(err)throw err;
		})
	}
	//entrer du budget si existant
	if(req.body.budget){
		connection.query('UPDATE voir set budget=?',[req.body.budget],function(err,content){
			if(err)throw err;
		})
	}
	//entrer des contacts si existant
	let i=1;
	while(req.body['nom'+i]){
		connection.query('INSERT INTO contacts(nom,contact) VALUES(?,?)',[req.body['nom'+i],req.body['contact'+i]],function(err,content){
			if(err)throw err;
		})
		i++;
	}//entrer des etapes si existant
	let j=1;
	while(req.body['etape'+j]){
		connection.query('INSERT INTO etapes(etape,debut) VALUES(?,?)',[req.body['etape'+j],req.body['debut'+j]],function(err,content){
			if(err)throw err;
		})
		j++;
	}
	res.redirect('/pages/monprojet')
})
// traitement de la fin d'une etape
app.get('/traitementetape/:id',function(req,res){
	connection.query('UPDATE etapes SET fin=NOW() WHERE id=?',[req.params.id],function(err,content){
		if (err) throw err;
		res.redirect('/pages/monprojet/voir')
	})
})
// traitement du retrait d'un contact
app.get('/traitementretraitcontact/:id',function(req,res){
	connection.query('DELETE FROM contacts WHERE id=?',[req.params.id],function(err,content){
		if (err) throw err;
		res.redirect('/pages/monprojet/voir')
	})
})
// REINITIALISATION DU PROJET
app.get('/supprimerprojet',function(req,res){
	connection.query('DELETE FROM contacts;DELETE FROM voir;DELETE FROM etapes;INSERT INTO voir(nom,type,budget) VALUES("AUCUN","AUCUN","0")',function(err,content){
		if (err) throw err;
		res.redirect('/pages/monprojet')
	})
})
	//le cas d'url invalide
app.use(function(req,res){
	res.send("Page introuvable!!!")
})
app.listen(8080)