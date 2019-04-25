let connection=require('./codehomeconnect')
class prendre{

	static infos(cb){
		connection.query('SELECT nom,type,budget FROM voir; SELECT * FROM contacts;SELECT * FROM etapes',function(err,result){
			if(err) throw err;
			cb(result)
		})
	}
}
module.exports=prendre