var osmUrl = '';
var osmAttrib = '';
var mapa = null;
var latlngmap = -1;
var baselayer = null;

var SO = [-34.93661, -56.31711];
var NE = [-34.56312, -55.8078];

function onMapClick(e) {

		if (circulo != null)
			mapa.removeLayer(circulo);
		if (line != null)
			mapa.removeLayer(line);

		 var popup = L.popup();  //ANTES iba

		 	popup
		 		.setLatLng(e.latlng)
		 		.setContent("Cliqueaste en " + e.latlng.toString())
		 		.openOn(mapa);
			latlngmap = L.latLng(e.latlng.lat, e.latlng.lng);

			// esto es nuevo usado para geolocalización
			 if (markerGeoLoc != null)
			 {
			 	mapa.removeLayer(markerGeoLoc);			 
			 }
			 markerGeoLoc = L.marker(e.latlng).addTo(mapa);
   //      		//.bindPopup("Estás dentro de " + radius + " mts desde este punto").openPopup();  	   
				   

			
		}

function loadMapa()
{		
	osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';	
	osmAttrib = osmAttrib='Map data &copy <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

	bounds = new L.LatLngBounds(SO, NE);

	baselayer = L.tileLayer(osmUrl, {  //antes no había baselayer
				attribution: osmAttrib,
				minZoom: 2, 
				maxZoom: 50					
		});	

	mapa = L.map('map',{maxBounds:bounds, minZoom: 2, inertia:true, layers: [baselayer]}).setView([-34.9053694,-56.2072348], 13);

	//mapa = L.map('map'); // mapa var global	
	//mapa.locate({setView: true, maxZoom: 16});
																				
					
	mapa.on('click', onMapClick);	

	
	
		
	// mapa = L.map('map',{maxBounds:bounds, minZoom: 2, inertia:true}).setView([-34.9053694,-56.2072348], 13);

	// //mapa = L.map('map'); // mapa var global	
	// //mapa.locate({setView: true, maxZoom: 16});
																			
	// baselayer = L.tileLayer(osmUrl, {  //TAMPOCO TENÍA baselayer como variable, se agregó para el control
	// 			attribution: osmAttrib,
	// 			minZoom: 2, 
	// 			maxZoom: 50					
	// 	}).addTo(mapa);	
					
	// mapa.on('click', onMapClick);
	
	L.control.scale().addTo(mapa);



  
//Overlay layers are grouped
    // var groupedOverlays = {
    //   "Unibici": {
    //     "Facultades": lmarkersFacs        
    //   },
    //   "Puntos de interés": {
    //     "Bicipuntos": restaurants,
    //     "Estaciones de servicio": inflamarkers,
    //     "Seccionales": lmarkersS,
    //     "Ciclovías":geoCV,
    //     "Bicisendas":geoBS,
    //     "Plan Movete":lmarkersE
    //   },
    //   "Otros":{
    //     "Biciamigos":geoBiciAmigos,
    //     "Bicicleterías":geoBicis,

    //   },
    //   "Recorridos":{
    //     "Turísticos":geoSug

    //     }

    //   };
    
    // Make the "Landmarks" group exclusive (use radio inputs)
    //var options = { exclusiveGroups: [] };
    // Use the custom grouped layer control, not "L.control.layers"

   
};   





///////////////////////////////////////////////








