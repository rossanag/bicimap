var routeControl = null;
var showControl = false;

var line = null;

function borrar()
{
    if (marker1 !== null)
    {        
        mapa.removeLayer(marker1);
        marker1 = null;
    }   
    
    if (marker2 !== null)
    {        
        mapa.removeLayer(marker2);
        marker2 = null;
    }    

    waypoints.length = 0;
    coords.length = 0;

    if (line !== null)
        mapa.removeLayer(line);

}

function borrarRuta()
{
    routeControl.getPlan().setWaypoints([]);
}

function esconder()
{
    //alert(routeControl.showControl);
    if (showControl)
    {        
        routeControl.hide();   
        showControl = false;     
        console.log("escondio");  
        //alert("escondio");         
     }   
    else
    {
        routeControl.show();        
        //alert("mostro"); 
        console.log("mostro");        
        showControl = true;
    }    
}


function displayRoutingControl()
{
    console.log(routeControl);
    if (routeControl == null)
    {
        
        crearControlRouting();
        showControl = true;   
    }
    else
    {
        mapa.removeControl(routeControl);
        routeControl = null;
        // if (showControl)  // control despleagdo
        // {
        //     routeControl.hide();   
        //     showControl = false;
        // }
        // else
        // {
        //     routeControl.show();   
        //     showControl = true;
        // }
    }
}

function removeRouting()
{
    if (routeControl != null)
    {    
        mapa.removeControl(routeControl);  //remueve el camino tb
        routeControl = null;
    }    
}

function crearControlRouting() {

      var bikerouter = L.Routing.osrm ({
             serviceUrl: 'http://osrm.mapzen.com/bicycle/viaroute'
          });
   
    routeControl = L.Routing.control({

        //router: bikerouter,
          
        plan: L.Routing.plan([], {                      
                geocoder: L.Control.Geocoder.nominatim({
                    geocodingQueryParams: { countrycodes: 'uy'}                
                }),
                city: 'Montevideo',            
            }),
        lineOptions: {    
            styles: 
                [
                    {color: 'black', opacity: 0.15, weight: 9}, //sombra
                    {color: 'white', opacity: 0.8, weight: 6}, // Contorno
                    {color: 'red', opacity: 1, weight: 4}] // Centro
       }, 
           
        summaryTemplate:  '<h2>Trayectoria: {name}</h2><h3>Distancia: {distance}</h3>',   
        //geocoder: L.Control.Geocoder.nominatim({
        //     geocodingQueryParams: { countrycodes: 'uy'}
        // }),
        language: 'sp',
        //city: 'Montevideo',   //si no va plan, debe agregarse si se desea afinar búsquedas.    
        routeWhileDragging: true,
        waypointMode:  'snap'
    }).addTo(mapa);
        
}




function calcRoute()  // esto para cuando no se usa el control
{
    waypoints.length = 0;
    coords.length = 0;
    waysp.length = 0;
    if ((marker1 !== null)  && (marker2 !== null))
    {     
        waypoints.push({latLng: marker1.getLatLng()});   
        waypoints.push({latLng: marker2.getLatLng()});   
        router.route(waypoints, function(err, routes) {
         if (line) {
             map.removeLayer(line);
         }

         if (err) {
             alert(err);
         } else {        
             coords = routes[0].coordinates;
             waysp = routes[0].waypoints;    
             alert(routes[0].summary.totalTime);
             alert(routes[0].summary.totalDistance); 
             line = L.Routing.line(routes[0],{styles:[{color: 'black', opacity: 0.15, weight: 7}, {color: 'white', opacity: 0.8, weight: 4}, {color: 'red', opacity: 1, weight: 4}]}).addTo(map);
                
         }
     });

    } 
    else
        alert("Se necesita el par Origen-Destino para calcular la ruta");     
}

function rutaAB(latA, latB)  // esto para cuando no se usa el control
{
    var waypoints = [];
    var coords = [];
    var waysp = [];

    waypoints.length = 0;
    coords.length = 0;
    waysp.length = 0;
    if ((latA != null) && (latB != null))     
    //if ((marker1 !== null)  && (marker2 !== null))
    {     
            
        //var router = L.Routing.osrm();

        var latlngA = L.Routing.waypoint(latA);
        var latlngB = L.Routing.waypoint(latB);
        // waypoints.push({latLng: latA});   
        // waypoints.push({latLng: latB});   
        waypoints.push(latlngA);   
        waypoints.push(latlngB);   
        
        var routes = null;
        
        routes = L.Routing.osrm({addWaypoints: false});
                
         routes.route(waypoints, function(err, routes) {
         if (line) {
             mapa.removeLayer(line);
         }
         

         if (err) {
             console.log(err);
         } else {        

             coords = routes[0].coordinates;
             waysp = routes[0].waypoints;    
             //alert(routes[0].summary.totalTime);
             //alert(routes[0].summary.totalDistance); 
             line = L.Routing.line(routes[0],{styles:[{color: 'black', opacity: 0.15, weight: 7}, {color: 'white', opacity: 0.8, weight: 4}, {color: '#1652F4', opacity: 1, weight: 3}]}).addTo(mapa);
                
         }
     });

    } 
    else
        alert("Se necesita el par Origen-Destino para calcular la ruta");     
}
