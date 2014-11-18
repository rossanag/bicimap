//var express = require('express')
//var app = express();

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

//app.get('/', function(request, response) {
  //response.send('Hello World!')
//})

//app.listen(app.get('port'), function() {
//  console.log("Node app is running at localhost:" + app.get('port'))
//})

var connect = require('connect');
var serveStatic = require('serve-static');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var html = '';
var res = [];

setInterval(function() {
	console.log("\n");
	console.log("Ejecutando");
	request('http://movete.montevideo.gub.uy/index.php?option=com_content&view=article&id=1&Itemid=2', function (error, response, html) {
	if (!error && response.statusCode == 200) {
		html = html.replace(/(\n|\r)/g,''); 
			
		var re = /(var\s*paradas\s*=\s*\[([^;]+)\]);/i;  //Funciona!!
		var re = /(var\s*paradas\s*=\s*\[(.*?)\]);/;  //Funciona!!!
		var res = re.exec(html);	        

		console.log("\n");
		console.log(res[0]);
		fs.writeFile('public/paradas.js', res[0].toString());        
	}
	else
		fs.writeFile('public/paradas.js', 'var paradas = null;');
	})
	  }, 180000); // 3 minutos

//Ahorra irá dentro de set interval
//request('http://movete.montevideo.gub.uy/index.php?option=com_content&view=article&id=1&Itemid=2', function (error, response, html) {
 //if (!error && response.statusCode == 200) {
	//html = html.replace(/(\n|\r)/g,''); 
			
	//var re = /(var\s*paradas\s*=\s*\[([^;]+)\]);/i;  //Funciona!!
	//var re = /(var\s*paradas\s*=\s*\[(.*?)\]);/;  //Funciona!!!
	//var res = re.exec(html);	        

	//console.log("\n");
	//console.log(res[0]);
    //fs.writeFile('public/paradas.js', res[0].toString());        
  //}
  //else
	//fs.writeFile('public/paradas.js', 'var paradas = null;');
//});

connect().use(serveStatic(__dirname + '/public')).listen(process.env.PORT || 5000);
