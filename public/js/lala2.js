var paradas_ant = []; // almacena las paradas anteriores
var markersArray = [];  //guarda los markers
var NV = -10;  //valor no válido utilizado para inicialización


var latlngEstaciones = [];  //latlng estaciones de Plan Movete
var latlngInfladores = [];  // latlng infladores o estaciones de servicio
var latlngSeccionales = [];
var latlngRacks = []; // latlng de locales con estacionamiento para bicis
var lmarkersFacs = null; // latlng de locales con estacionamiento para bicis
var lmarkesE =  null;
var lmarkesS =  null;
var markerSugeridos = null;

var geoBS = null;
var geoCV = null;
var geoBicis = null;
var geoBiciAmigos = null;

var markersInf = null;
var layerParking = null;

var polylineP = null;

markersLayerP = [];

var geoPend = null;
var geoSug = null;

var BS1 = [L.latLng(-34.90554,-56.21065),L.latLng(-34.90269,-56.20193),L.latLng(-34.90837,-56.20122),L.latLng(-34.91109,-56.21122)];
var BS2 = [L.latLng(-34.90304,-56.17679),L.latLng(-34.90608,-56.17522)];
var BS3 = [L.latLng(-34.91078,-56.1664),L.latLng(-34.91029,-56.1646),L.latLng(-34.91894,-56.16614)];
var BS4 = [L.latLng(-34.91933,-56.17183),L.latLng(-34.9288,-56.16172)];
var BS5 = [L.latLng(-34.92165,-56.14988),L.latLng(-34.92904,-56.16078)];


var estaciones = [

['01 - Teatro Solís - Liniers y Reconquista','-34.907822','-56.200436',3,NV,
'Oficina de Atención Movete',NV,20,NV],
['02 - Templo Inglés - Reconquista y Treinta Tres','-34.909481','-56.204361',4,NV,
'Oficina de Atención Movete',NV,20,NV],
['03 - Reconquista y Pérez Castellanos','-34.910782','-56.209106',5,NV,
'Oficina de Atención Movete',NV,20,NV],
['04 - Hospital Maciel - Guaraní y Washington','-34.908863','-56.212181',6,NV,
'Oficina de Atención Movete',NV,16,NV],
['05 - Mercado del Puerto - Piedras y Pérez Castellanos','-34.906021','-56.211327',7,NV,
'Oficina de Atención Movete',NV,20,NV],
['08 - Plaza Matriz - Juan Carlos Gómez y Rincón','-34.906101','-56.203266',8,NV,
'Oficina de Atención Movete',NV,20,NV],
['07 - Terminal Ciudadela Norte - Piedras y Juncal','-34.902901','-56.202896',9,NV,
'Oficina de Atención Movete',NV,20,NV],
['06 - Banco de la República - Zabala y Piedras','-34.905022','-56.208302',NV,1,
'Oficina de Atención Movete',NV,16,NV],
['Oficina de Atención Movete','-34.9090553','-56.2076392',0,-1,'Montevideo',0,0,'1']
    ];

var biciIcon = L.icon({
    iconUrl: 'imagenes/bike-32.png',    
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32] // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});      

var parkIcon = L.icon({
    iconUrl: 'imagenes/park3.png',
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});  

var policeIcon = L.icon({
    iconUrl: 'imagenes/Police-Man.png',
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
}); 

var gasIcon = L.icon({
    iconUrl: 'imagenes/gas3.png',
    shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [40,40], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    shadowAnchor: [4,30]  // the same for the shadow    
});  

var emptyIcon = L.icon({
    iconUrl: 'imagenes/bikeiconempty.png',
    shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    shadowAnchor: [4,30]  // the same for the shadow    
});

var fullIcon = L.icon({
    iconUrl: 'imagenes/bikeiconfull.png',
    shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    shadowAnchor: [4,30]  // the same for the shadow    
});

var normalIcon = L.icon({
    iconUrl: 'imagenes/bikeiconsemi.png',
    shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    shadowAnchor: [4,30]  // the same for the shadow    
});

var brokenIcon = L.icon({
    iconUrl: 'imagenes/bikeiconbreak.png',
    shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    shadowAnchor: [4,30]  // the same for the shadow    
});

var officeIcon = L.icon({
    iconUrl: 'imagenes/iconoffice.png',
    shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    shadowSize:   [40,32], // size of the shadow
    shadowAnchor: [4,30]  // the same for the shadow    
});

var uniIcon = L.icon({
    iconUrl: 'imagenes/uni2.png',
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    //shadowSize:   [40,32] // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});

var cafeIcon = L.icon({
    iconUrl: 'imagenes/cafe2.png',    
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    //shadowSize:   [40,32] // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});      
var semaforoIcon = L.icon({
    iconUrl: 'imagenes/semaforo.jpg',    
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    //shadowSize:   [40,32] // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});      

var alertaIcon = L.icon({
    iconUrl: 'imagenes/alert.jpg',    
    //shadowUrl: 'imagenes/bikeiconshadow.png',

    iconSize:     [32,32], // size of the icon    
    iconAnchor:   [20,32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,-18], // point from which the popup should open relative to the iconAnchor    
    
    //shadowSize:   [40,32] // size of the shadow
    //shadowAnchor: [4,30]  // the same for the shadow    
});      

function cargarEstaciones()
{	
	//var lmarkers = L.layerGroup(); //layer estaciones Plan Movetelmarkers 
	lmarkersE = L.layerGroup(); //layer estaciones Plan Movetelmarkers 
	
	markerObj = null;
	var desc = '';

	var lat = 0;
	var lng = 0;

	for (var i = 0; i < estaciones.length; i++) {
		estacion = estaciones[i];

		lat = parseFloat(estacion[1]);
		lng = parseFloat(estacion[2]);

		if (i == (estaciones.length - 1))
		{			
			desc = "<b><centre>" + estacion[0] + "</centre></b>" + "<br>" +
					"Calle Alzáibar 1321" + "<br>" +
					"Lunes a Viernes: 9:00 a 18:00 hs.  Sábados: 10:00 a 14:00 hs";	
			marker = L.marker([lat,lng], {icon: officeIcon, title: "Oficina Plan Movete" }).bindPopup(desc);			
		}
		else
		{
			desc = "<b><centre>" + estacion[0] + "</centre></b>";
			marker = L.marker([lat,lng], {icon: normalIcon, title: "Estación Plan Movete" }).bindPopup(desc);			
				
				//Agrego a objetos				
		}

		latlngEstaciones.push(marker.getLatLng());

		marker.on('mouseover', function (e) {
			this.openPopup();  
		});
		marker.on('mouseout', function (e) {
			this.closePopup();
		});		
    
		markerObj = {_marker: marker,
					content: desc};				
		markersArray.push(markerObj);													
		lmarkersE.addLayer(marker);	
	};
	lmarkersE.addTo(mapa);	
	paradas_ant = estaciones.slice();
};


function actualizarMapa()
{	
	//alert("actualizando markeeeers");	COMENTADO PARA ENVIAR DEMO
	// $.getScript( "http://localhost/paradas.js" ).done(function( script, textStatus ) {		
		
	// 	actualizoMarkers();
	// }).fail(function( jqxhr, settings, exception ) {
	// 	//alert("Servidor fuera de servicio. Reintente luego");
	// 	$( "#aviso" ).html( "<p>Servidor fuera de servicio. Reintente luego</p>" );
	// 	});
	actualizoMarkers();
}

function obtenerDatos(timems)
{	
	 // cada minuto y medio leo archivo y actualizo markers del mapa
	 // setInterval(function(){ COMENTADO MOMENTÁNEAMENTE para DEMO
  //     actualizarMapa();
  //   },timems);
	actualizarMapa();
}

function actualizoMarkers()
{				
	var markerObj = null;
	var desc = '';

  if (paradas == null)
  {  	
	  $( "#aviso" ).html( "<p>Los datos de las estaciones no están actualizados</p>" );
  }
  else
  {  
	$( "#aviso" ).html( "" );  
	for (var i = 0; i < paradas.length; i++)
	{	
			parada = paradas[i];
			paradant = paradas_ant[i];
		
			markerObj = markersArray[i];
			
			if ((parada[4] == -1) && (paradant[4] != -1))	
			{
				desc = "<b><center>" +parada[0] + "</center></b>" + "<br>" +
				"Calle Alzáibar 1321 - Lunes a Viernes: 9:00 a 18:00 h." + "<br>" + 
				"Sábados: De 10:00 a 14:00 h";	
				markerObj._marker.setIcon(officeIcon);													
	
				markerObj._marker.getPopup().setContent(desc);
			}
			else
			{											
				if ((parada[4] == 4) || (parada[4] == 5) && (parada[4] != paradant[4]))
			    {
						markerObj._marker.setIcon(brokenIcon);						
						desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" +
						"FUERA DE SERVICIO";											
				    	markerObj._marker.getPopup().setContent(desc);
				}	
				if (((parada[8] == 0)) && (parada[8] != paradant[8]))
				{
					markerObj._marker.setIcon(brokenIcon);						
					desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" +
						"FUERA DE SERVICIO";											
				    markerObj._marker.getPopup().setContent(desc);
				}	
				else					    
					if (((parada[6] == parada[7]) && (parada[7]!= 0)) && (parada[6] != paradant[6]))
					{
						markerObj._marker.setIcon(fullIcon);								
						desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" + "Estación llena";											
				    	markerObj._marker.getPopup().setContent(desc);
					}	
					else	
						if ((parada[6] == 0) && (parada[6] != paradant[6]))
						{
							markerObj._marker.setIcon(emptyIcon);								
							desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>"
								"Estación vacía";										
							markerObj._marker.getPopup().setContent(desc);	
						}	
						else
						{
							if (parada[6] != paradant[6])
							{
								markerObj._marker.setIcon(normalIcon);								
								var disponibles = (parada[6]).toString();
								_cantHuecos = (parada[7]-parada[6]);
								cantHuecos = _cantHuecos.toString();
								desc = "<b><centre>" + parada[0] + "</centre></b>" + "<br>" +
								"Disponibles: " + disponibles + "    Huecos libres: " + cantHuecos;
								
								markerObj._marker.getPopup().setContent(desc);	
							}	
						}
			}
			
		}	 
	  paradas_ant = paradas.slice();
	}  	
};		

function loadBiciAmigos()
{
	
	geoBiciAmigos = L.geoJson(biciamigos, {
		pointToLayer: function(feature, latlng) {	
			
 			var desc = feature.properties.Nombre + "<br>" + feature.properties.Direc + " " +
 				"<br>" + feature.properties.Desc + "  " + feature.properties.Telef;
        	var marker = L.marker(latlng, { icon: parkIcon}).bindPopup(desc).addTo(mapa);
			marker.on('click', function() {
					this.openPopup();			
    		});	    		
    		return marker;
    	}	
		
	});	
}


function loadEstacionesDeServicio()
{	
	//var infladores = new L.KML("Mapas/infladores.kml", {async: true});
	//infladores.on("loaded", function(e) { mapa.fitBounds(e.target.getBounds()); });
	//mapa.addLayer(track);

	//ANTES var markers en lugar de markersInf
	markersInf = L.markerClusterGroup({showCoverageOnHover:false} );
	var inflamarkers = L.geoJson(infladores, {
		// pointToLayer: function(feature, latlng) {	
			
 	// 		var desc = feature.properties.name + "<br>" + feature.properties.description;
  //       	var marker = L.marker(latlng, { icon: gasIcon}).bindPopup(desc).addTo(mapa);
		// 	marker.on('click', function() {
		// 			this.openPopup();			
  //   		});
  //   		marker.addTo(markersInf); 
  //   		latlngInfladores.push(latlng);       					    		
  //   		return marker;
  //   	}
    	onEachFeature: function (feature, layer) //functionality on click on feature
        {
        	var desc = feature.properties.name + "<br>" + feature.properties.description;
        	layer.bindPopup(desc); //just to show something in the popup. could be part of the geojson as well!			
			layer.addTo(markersInf);        	
			
			latlngInfladores.push(layer.getLatLng());
			layer.setIcon(gasIcon);
        }   
	});
	markersInf.addLayer(inflamarkers); // que pasa si borro
	mapa.addLayer(markersInf); 

    
	

	//var infladores = omnivore.kml('Mapas/infladores.kml').on('ready', function() {		
    	//mapa.fitBounds(infladores.getBounds());   
    	//this.eachLayer(function(_marker) {
            
          //  	markers.addLayer(_marker);
                //_marker.setIcon(L.mapbox.marker.icon({  no va
                  //  'marker-color': '#ff8888',
                   // 'marker-size': 'large'
    //}).addTo(mapa);    
    //var runLayer = omnivore.kml('Mapas/infladores.kml').on('ready', function() {
       // mapa.fitBounds(runLayer.getBounds());
    //})
    //.addTo(mapa);
    //mapa.fitBounds(infladores.getBounds());   
            
    //}).addTo(mapa); 
	//mapa.addLayer(markers);	
	
};

function getColor(d) { //en función de una propiedad
			return d > 1000 ? '#800026' :
			       d > 500  ? '#BD0026' :
			       d > 200  ? '#E31A1C' :
			       d > 100  ? '#FC4E2A' :
			       d > 50   ? '#FD8D3C' :
			       d > 20   ? '#FEB24C' :
			       d > 10   ? '#FED976' :
			                  '#FFEDA0';
		}		

function loadCicloVias()
{
		
		var geojson = null;

		function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: '#FF9500',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'blue'
				//getColor(feature.properties.density)
			}
		}
		

	function highlightFeature(e) {
		var layer = e.target;
		layer.setStyle({
		weight: 4,
		color: '#FF9C00',
		dashArray: '',
		fillOpacity: 0.7
	})
	if (!L.Browser.ie) {
		layer.bringToFront();
	}
	
   };	
		
function zoomToFeature(e) {
	mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
    	click: zoomToFeature
    })
}	

function resetHighlight(e) {
	//geojson.resetStyle(e.target);
	geoCV.resetStyle(e.target);
			
}
		//geojson
		geoCV = L.geoJson(ciclovias, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(mapa);
};




function loadBiciSendas()
{
		
		//var geojson = null;
		

		function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: '#1DA90B',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'blue'
				//getColor(feature.properties.density)
			}
		}
		

	function highlightFeature(e) {
		var layer = e.target;
		layer.setStyle({
		weight: 4,
		color: '#1DA90B',
		dashArray: '',
		fillOpacity: 0.7
	})
	if (!L.Browser.ie) {
		layer.bringToFront();
	}
	
}	
		
function zoomToFeature(e) {
	mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {	
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
    	click: zoomToFeature
    })    
}	



function resetHighlight(e) {
	//geojson.resetStyle(e.target);
	geoBS.resetStyle(e.target);
			
}
		//geojson antes
		geoBS = L.geoJson(bicisendas, {
			style: style,
			onEachFeature: onEachFeature

            						
		}).addTo(mapa);		
		//L.geoJson.coordsToLatLngs(latlngBiciSendas,1,true);			
	
		//this.coordsToLatLng: function (feature.properties.coordinates) {
		//markerLayerBC.addTo(mapa);
		//geoBS = geojson;
		//geoBS = $.extend( {}, geojson );		
};


function loadPendientes2()
{
	    geoPend = null;

		function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: 'red',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'blue'
				//getColor(feature.properties.density)
			};
		}
		

	function highlightFeature(e) {
		var layer = e.target;
		layer.setStyle({
		weight: 4,
		color: 'red',
		dashArray: '',
		fillOpacity: 0.7
	})
	if (!L.Browser.ie) {
		layer.bringToFront();
	}
	
   }	
		
function zoomToFeature(e) {
	mapa.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
    	click: zoomToFeature
    })
    var desc = "Pendiente " + feature.properties.tipo + "<br>" + "Orientación: " + feature.properties.orientacion;
    layer.bindPopup(desc);
}	

function resetHighlight(e) {
	//geojson.resetStyle(e.target);
	geoPend.resetStyle(e.target);
			
}
		//geojson
		geoPend = L.geoJson(pendientes, {
			style: style,			
			onEachFeature: onEachFeature
		}).addTo(mapa);
}

function loadPendientes()
{
	var iconMarker = '';

	markersLayerP = L.layerGroup();
	  
	for (var i = 0; i < pendientes.length ; i++) 
	{
       var lat_1 = pendientes[i][1];
       var lng_1 = pendientes[i][2]; 
       var lat_2 = pendientes[i][3];
       var lng_2 = pendientes[i][4]; 
		var pointA = L.latLng(lat_1,lng_1);
		var pointB = L.latLng(lat_2,lng_2);
		var pointList = [pointA, pointB];

		//antes var polyline
		polylineP = L.polyline(pointList, {
			color: 'red',
			weight: 4,
			opacity: 0.6,
			smoothFactor: 1
		}).addTo(mapa);
		
		
		//polyline.bindPopup("Pendiente " + pendientes[i][0]);  //tipo pendiente    

		if (pendientes[i][7] == "N")		 
			iconMarker = 'arrow-up';		
			else 
				if (pendientes[i][7] == "S")
						iconMarker = 'arrow-down';
					else
						if (pendientes[i][7] == "E")
						{ 
								iconMarker = 'arrow-right';
							}
							else
								if (pendientes[i][7] == "O")
									iconMarker = 'arrow-left';


		 var marker = L.marker([pendientes[i][5],pendientes[i][6]], {icon: L.AwesomeMarkers.icon
		 	({icon: iconMarker, prefix: 'fa', markerColor: 'darkblue'}) })
		 .bindPopup("Pendiente " + pendientes[i][0])
		 .addTo(mapa);  
		 markersLayerP.addLayer(marker);
		 markersLayerP.addLayer(polylineP);
	};
	markersLayerP.addTo(mapa);

};

function loadParkings()
{ 
	layerParking = L.layerGroup();
	var marker = null;
	for (var i = 0; i < biciracks.length ; i++) {
		//marker = L.marker([biciracks[i][1],biciracks[i][2]], {icon: L.AwesomeMarkers.icon({icon: 'flag', prefix: 'fa', markerColor: 'orange'}) })
		marker = L.marker([biciracks[i][1],biciracks[i][2]], {icon:parkIcon }) 
		.bindPopup(biciracks[i][0])
		.addTo(mapa);

		latlngRacks.push(marker.getLatLng()); // para realizar busquedas
        layerParking.addLayer(marker);
	};
	layerParking.addTo(mapa);
}


function loadSugeridos2()
{
	    geoSug = null;

		function style(feature) {
			return {
				weight: 4,
				opacity: 1,
				color: 'blue',
				dashArray: '5',
				fillOpacity: 0.7,
				fillColor: 'blue'
				//getColor(feature.properties.density)
			};
		};
		

	function highlightFeature(e) {
		var layer = e.target;
		layer.setStyle({
		weight: 4,
		color: 'blue',
		dashArray: '',
		fillOpacity: 0.7
	});
	if (!L.Browser.ie) {
		layer.bringToFront();
	}
	
   };	
		
function zoomToFeature(e) {
	mapa.fitBounds(e.target.getBounds());
};

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
    	click: zoomToFeature
    });
    var desc = "Tipo " + feature.properties.tipo + "<br>" + feature.properties.Desc;
    layer.bindPopup(desc);
};	

function resetHighlight(e) {
	//geojson.resetStyle(e.target);
	geoSug.resetStyle(e.target);
			
};
		//geojson
		markerSugeridos = L.layerGroup();
		geoSug = L.geoJson(sugeridos, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(mapa);
		
		var marker = L.marker([-34.90869,-56.18983], {icon: L.AwesomeMarkers.icon({icon: 'warning', markerColor: 'orange', prefix: 'fa', iconColor: 'black'}) })
		.bindPopup("Cruce peligroso");
		markerSugeridos.addLayer(marker);
		marker = L.marker([-34.91008,-56.19764], {icon: L.AwesomeMarkers.icon({icon: 'cog',  prefix: 'fa', markerColor: 'red', iconColor: '#6b1d5c' }) })
		.bindPopup("Semáforo");
		markerSugeridos.addLayer(marker);
		marker = L.marker([-34.91008,-56.19764], {icon: L.AwesomeMarkers.icon({icon: 'coffe', markerColor: 'dark-blue', prefix: 'fa', iconColor: 'black'}) })
		.bindPopup("Café La Diaria - espacio cultural, jazz, cine");
		markerSugeridos.addLayer(marker);
		markerSugeridos.addTo(mapa);
		
		



}


/*function loadSugeridos()
{    
  var tope = -1;
  var pointsLine = [];
    
  for (var i = 0; i < caminosSugeridos.length; i++)
  {       
    
    var linea = caminosSugeridos[i];
    
    for (var k = 0; k < linea.length; k = k + 2)  // recorro la fila    
    { 
      
          
      pointsLine.push([linea[k],linea[k+1]]);     
    };    
    linea = null;  
    var desc = infoSugeridos[i][0] + "<br>" + infoSugeridos[i][1];
    // ANTES var polyline
    polylineS = L.polyline(pointsLine, {
      color: 'blue',
      weight: 4,
      opacity: 0.5,
      smoothFactor: 1
    }).bindPopup(desc).addTo(mapa);
    pointsLine = [];    

    polySugeridos.push(polylineS);
    mapa.addLayer(polylineS);
  
  }
};*/

function loadBicicleterias()
{
	 
	geoBicis = null;
	geoBicis = L.geoJson ( bicicleterias, {		
		pointToLayer: function(feature, latlng) {			
 		var desc = feature.properties.Nombre + "<br>" + feature.properties.Direc + "<br>" + 
 		"Telef:" + feature.properties.Telef; 		
		var marker = L.marker(latlng, { icon: biciIcon}).bindPopup(desc).addTo(mapa);
		marker.on('click', function() {
			this.openPopup();
		});		
		return marker;
    }
 });
}; 

 
/////////////////////

/// Funciones de Busqueda

function nearest_estacionPM()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
				//var ll = L.latLng([latlngmap.lat,latlngmap.lng]);
				//var nlatlng = L.GeometryUtil.closest(mapa,latlngEstaciones , ll); 	
				var nlatlng = L.GeometryUtil.closest(mapa,latlngEstaciones , latlngmap);

				mapa.setView(nlatlng,13); 						
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	//cate()
}

function nearestInfladores()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
				var nlatlng = L.GeometryUtil.closest(mapa,latlngInfladores ,latlngmap); 	

				mapa.setView(nlatlng,13); 						
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	//cate()
}

function nearestSeccional()
{		    
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
				//var ll = L.latLng([latlngmap.lat,latlngmap.lng]);
				//var nlatlng = L.GeometryUtil.closest(mapa,latlngEstaciones , ll); 	
				var nlatlng = L.GeometryUtil.closest(mapa,latlngSeccionales , latlngmap);

				mapa.setView(nlatlng,13); 						
			}
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
	//cate()
}



//  function lnglatReverse(vecLatLng)
//  {

//  	var largo = vecLatLng.length;
//  	for (var i = 0; i < largo; i++)
//  	{
//  		vec = vecLatLng[i];

//  		for (var k = 0; k < vec.length; i++)
//  		{
//  			latitude = vec[1];			
//  			longitude = vec[0];
//  			var latlng = L.latLng(latitude, longitude);
//  			vecGeoJson.push(latlng);
//  		}

//     }
// }    


function nearestBiciSenda()
{		  
		
		// if (typeof latlngmap != "undefined")
		// {
		// 	if ((latlngmap.lat != null) && (latlngmap.lng != null))
		// 	{		
						
		// 		//var nlatlng = L.GeometryUtil.closest(mapa,latlngBiciSendas ,latlngmap); 	
				
		// 		var nearest = leafletKnn(geoBS).nearestLayer(latlngmap, 5,Infinity);			
		// 		//nlatlng = puntos[0];
				
		// 		//mapa.panTo(nearest);
		// 		mapa.setView(nearest[0],13); 						
		// 	}
		// 	else
		// 		alert("Debe clickear sobre la región antes");			
		
  //       }        
  //       else
  //       	alert("Debe clickear sobre la región antes");
	//cate()


	if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
			
				//lnglatReverse(latlngBiciSendas);				

				//var nlatlng = L.GeometryUtil.closest(mapa,vecGeoJson,latlngmap); 	
				//var nlatlng = L.GeometryUtil.closest(mapa,[geoBS],latlngmap); 	
				
				/*var nearest = leafletKnn(geoBS).nearest(latlngmap, 25,50000);				
				var nlatlng = L.latLng(nearest[nearest.length-1].lat,-56.164);*/
				//mapa.setView(nearest[nearest.length-1],13);				
				//mapa.setView(nlatlng,13);				

				////
				var latlng1 = L.GeometryUtil.closest(mapa, BS1,latlngmap); 
				var d1 = latlng1.distanceTo(latlngmap);

				var latlng2 = L.GeometryUtil.closest(mapa, BS2,latlngmap); 
				var d2 = latlng2.distanceTo(latlngmap);

				var latlng3 = L.GeometryUtil.closest(mapa, BS3,latlngmap); 
				var d3 = latlng3.distanceTo(latlngmap);

				var latlng4 = L.GeometryUtil.closest(mapa, BS4,latlngmap); 
				var d4 = latlng4.distanceTo(latlngmap);

				var latlng5 = L.GeometryUtil.closest(mapa, BS5,latlngmap); 
				var d5 = latlng5.distanceTo(latlngmap);

				var d, lat_lng;
				if (d1 < d2)
				{
					d = d1;
					lat_lng = latlng1;
				}	
				else
				{
					d = d2;
					lat_lng = latlng2;

					if (d3 < d)
					{
						d = d3;
						lat_lng = latlng3;						
					}	
					if (d4 < d)
					{
						d = d4;
						lat_lng = latlng4;							
					}
					if (d5 < d)
					{
						d = d5;
						lat_lng = latlng4;							
					}
				}

				mapa.setView(lat_lng,13);				
			}   
			else
				alert("Debe clickear sobre la región antes");			
		
        }        
        else
        	alert("Debe clickear sobre la región antes");
}

function nearestCicloVia()
{		  
		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
							
				//var nlatlng = L.GeometryUtil.closest(mapa,latlngBiciSendas ,latlngmap); 	
				
				var nearest = leafletKnn(geoCV).nearest(latlngmap, 5,Infinity);							
				//nlatlng = puntos[0];				
				mapa.setView(nearest[nearest.length-1],13); 						
			}
			else
				alert("Click sobre el lugar");			
		
        }        
        else
        	alert("Click sobre el lugar");
	//cate()
}

function nearestBicicleteria()
{		  
		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
							
				//var nlatlng = L.GeometryUtil.closest(mapa,latlngBiciSendas ,latlngmap); 	
				
				var nearest = leafletKnn(geoBicis).nearest(latlngmap, 5,Infinity);							
				//nlatlng = puntos[0];				
				//mapa.setView(nearest[nearest.length-1],13); 						
				mapa.setView(nearest[0],13); 						
			}
			else
				alert("Click sobre el lugar");			
		
        }        
        else
        	alert("Click sobre el lugar");
	//cate()
}

function nearestBiciAmigo()
{		  
		
		if (typeof latlngmap != "undefined")
		{
			if ((latlngmap.lat != null) && (latlngmap.lng != null))
			{		
							
				//var nlatlng = L.GeometryUtil.closest(mapa,latlngBiciSendas ,latlngmap); 	
				
				var nearest = leafletKnn(geoBiciAmigos).nearest(latlngmap, 5,Infinity);							
				//nlatlng = puntos[0];				
				//mapa.setView(nearest[nearest.length-1],13); 						
				mapa.setView(nearest[0],13); 						
			}
			else
				alert("Click sobre el lugar");			
		
        }        
        else
        	alert("Click sobre el lugar");
	//cate()
}

function loadSeccionales()
{
	//var lmarkers = L.layerGroup();
	lmarkersS = L.layerGroup();

	for (var i = 0; i < seccionales.length; i++) 
	{
		seccional = seccionales[i];

		for (var k = 0; k < seccional.length; k++)
		{
			var desc = "<b>" + seccional[0] + "</b><br>" + seccional[1] + " Tel.: " + seccional[4];
			var marker = L.marker([seccional[2],seccional[3]],{icon: policeIcon, title: "Seccional policial" }).bindPopup(desc);
			marker.on('click', function() {
				this.openPopup();
			});					
			lmarkersS.addLayer(marker);
			latlngSeccionales.push(marker.getLatLng());
		}
	};
	lmarkersS.addTo(mapa);
	
}



function loadFacultades()
{
	lmarkersFacs = L.layerGroup();
	marker = L.marker([-34.90612,-56.18307], {icon: uniIcon, title: "Fac. Ciencias Sociales" })
	 .bindPopup("<b>Fac. Ciencias Sociales</b>" + "<br>" + "Con bici punto para estudiantes/funcionarios - nivel medio");
	
	//marker.addTo(mapa);	
	lmarkersFacs.addLayer(marker);
	
	marker = L.marker([-34.90246,-56.17668], {icon: uniIcon, title: "Fac. de Derecho" }).bindPopup("<b>Fac. de Derecho</b>");
	//marker.addTo(mapa);	
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.91236,-56.17432], {icon: uniIcon, title: "Fac. Ccias Económicas" }).bindPopup("<b>Fac. de Ciencias Económicas</b>");
	//marker.addTo(mapa);	
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.91815,-56.16685], {icon: uniIcon, title: "Fac. de Ingeniería" })
	 .bindPopup("<b>Fac. de Ingeniería</b>" + "<br>" + "Con bici punto para estudiantes/funcionarios - nivel medio"
	 	+ "<br>" + "Duchas y vestuario");
	//marker.addTo(mapa);	 
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.90969,-56.16417], {icon: uniIcon, title: "Fac. de Arquitectura" }).bindPopup("<b>Fac. de Arquitectura</b>");
	//marker.addTo(mapa);	
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.9025914,-56.1799721], {icon: uniIcon, title: "Fac. de Humanidades" })
	 .bindPopup("<b>Fac. de Humanidades</b>" + "<br>" + "Con bici punto para estudiantes/funcionarios - nivel medio");
	//marker.addTo(mapa);	 
	lmarkersFacs.addLayer(marker);

	marker = L.marker([-34.899897,-56.178825], {icon: uniIcon, title: "Fac. de Psicología" })
	 .bindPopup("<b>Fac. de Psicología</b>" + "<br>" + "Con bici punto para estudiantes/funcionarios - nivel medio");
	//marker.addTo(mapa);	 
	lmarkersFacs.addLayer(marker);
	lmarkersFacs.addTo(mapa);
}

