var osmUrl = '';
var osmAttrib = '';
var mapa = null;
var latlngmap = -1;


function onMapClick(e) {
		 var popup = L.popup();  //ANTES iba

		 	popup
		 		.setLatLng(e.latlng)
		 		.setContent("Cliqueaste en " + e.latlng.toString())
		 		.openOn(mapa);
			latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);
			
		}

function loadMapa()
{		
	osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';	
	osmAttrib = osmAttrib='Map data &copy <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
		
	mapa = L.map('map').setView([-34.9053694,-56.2072348], 13); // mapa var global	
	//mapa = L.map('map'); // mapa var global	
	//mapa.locate({setView: true, maxZoom: 16});
																			
	L.tileLayer(osmUrl, {
				attribution: osmAttrib,
				minZoom: 8, 
				maxZoom: 18,					
		}).addTo(mapa);	
					
	mapa.on('click', onMapClick);
	
	L.control.scale().addTo(mapa);

};



///////////////////////////////////////////////








