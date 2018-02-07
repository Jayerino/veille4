const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static('public'));
/////////////////////////////////// Route /html/01_form.htm
app.get('/formulaire', function (req, res) {
 console.log(__dirname);
 res.sendFile( __dirname + "/public/html/" + "01_form.htm" );
})

app.get('/', (req, res) => {
 console.log('accueil')
 res.end('<h1>Accueil</h1>')
})

app.get('/traiter_get', (req, res) => {
 // Preparer l'output en format JSON

//console.log('la route /traiter_get')

// on utilise l'objet req.query pour récupérer les données GET
 let reponse = {
 prenom:req.query.prenom,
 nom:req.query.nom,
 telephone:req.query.telephone,
 email:req.query.email
 };

 fs.readFile(__dirname + '/public/data/membres.txt', 'utf-8', (err, data) => {
 	if (err) throw err;
 	let liste = JSON.parse(data);

 	liste.push(reponse);
 	fs.writeFile(__dirname + '/public/data/membres.txt', 'utf-8', JSON.stringify(liste), (err) => {
 		if (err) throw err;

 		res.end(JSON.stringify(liste));
 	})
 })



console.log(reponse);
 res.end(JSON.stringify(rliste));
})
///////////////////////////////////////////// route : membres

app.get("/membres", (req,res) => 
 {
 	
 })

const server = app.listen(8081, function () {
 let host = server.address().address
 let port = server.address().port
 
 console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})