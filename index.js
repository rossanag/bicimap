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

var d = new Date();
var h = d.getHours();

// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// server.listen(server_port, server_ip_address, function(){
//   console.log("Listening on " + server_ip_address + ", server_port " + server_port)
// });

// Hora de de funcionamiento de las estaciones Plan Movete 7-21hs
if ((h <= 21) && (h >= 7))
{
	request('http://movete.montevideo.gub.uy/index.php?option=com_content&view=article&id=1&Itemid=2', function (error, response, html) {
		if (!error && response.statusCode == 200) {
			html = html.replace(/(\n|\r)/g,''); 
			
			var re = /(var\s*paradas\s*=\s*\[([^;]+)\]);/i;  //Funciona!!
			var re = /(var\s*paradas\s*=\s*\[(.*?)\]);/;  //Funciona!!

			var res = re.exec(html);	

			console.log(res[1].toString);        

			console.log("\n");
			console.log(res[0]);
			fs.writeFile('Mapas/paradas.js', res[0].toString(),function (err) {
 				 if (err) //throw err;
  					console.log('It\'s saved!',err);
				}
			)

		}
		else
			fs.writeFile('Mapas/paradas.js', 'var paradas = null;', function (err) {
 				 if (err) //throw err;
  					console.log('It\'s saved! ', err);
				}
			);
	});


	fs.writeFile('message.txt', 'Hello Node', function (err) {
  		if (err) //throw err;
  			console.log('It\'s saved!', err);
		});
		
	setInterval(function() {	
		request('http://movete.montevideo.gub.uy/index.php?option=com_content&view=article&id=1&Itemid=2', function (error, response, html) {
			if (!error && response.statusCode == 200) {
				html = html.replace(/(\n|\r)/g,''); 
			
				var re = /(var\s*paradas\s*=\s*\[([^;]+)\]);/i;  //Funciona!!
				var re = /(var\s*paradas\s*=\s*\[(.*?)\]);/;  //Funciona!!!
				var res = re.exec(html);	        

				console.log("\n");
				console.log(res[0]);
				fs.writeFile('Mapas/paradas.js', res[0].toString(), function (err) {
 				 	if (err) //throw err;
  						console.log('It\'s saved! ', err);
					}
				)       
			}
		else
			fs.writeFile('Mapas/paradas.js', 'var paradas = null;',function (err) {
 				 if (err) //throw err;
  					console.log('It\'s saved! ', err);
				}
			);
		})
	}, 60000); // 3 minutos
}	

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

// conecta con el servidor
connect().use(serveStatic(__dirname + '/public')).listen(process.env.PORT || 5000);
//connect().use(serveStatic(__dirname + '/public')).listen(8080);

