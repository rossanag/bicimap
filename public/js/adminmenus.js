var routing = false;

function irAaB() {  
  
  $("#sidebar .menu .lnsm").click(function() {      
      $(".container").toggleClass("open-sidebar");      
      //crearControlRouting();
      routing = true;
      displayRoutingControl();
     
      // $(".btnBorrar").css({
      //   'right':'35%',
      //   'top': '12%'
      //   });
  });

}  

function borrarRAD(){
 
 $("#sidebar .menu .menu1").click(function() { 
  if (circulo != null)
  {  
      mapa.removeLayer(circulo);
      circulo = null;     
  }       
  if (line != null)
  {  
      mapa.removeLayer(line);
      line = null;
  } 
      $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
      $('.rad_ba').text("Bici amigos"); brad_ba = false;
      $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
      $('.rad_bp').text("Bicipuntos");  brad_bp = false;
      $('.rad_pm').text("Plan Movete"); brad_pm = false;
      $('.rad_bi').text("Bicicleterías"); brad_bi = false;   
      $('.rad_bs').text("Bicisendas"); brad_bs = false;
      $('.rad_cv').text("Ciclovías"); brad_cv = false;
      $('.rad_z30').text("Zona 30"); brad_z30 = false;
});
} 

$("#sidebar .menu .menu3").click(function() { 
  if (circulo != null)
  {  
      mapa.removeLayer(circulo);
      circulo = null;
      
  }       
  if (line != null)
  {  
      mapa.removeLayer(line);
      line = null;
  }  

  $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
      $('.rad_ba').text("Bici amigos"); brad_ba = false;
      $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
      $('.rad_bp').text("Bicipuntos");  brad_bp = false;
      $('.rad_pm').text("Plan Movete"); brad_pm = false;
      $('.rad_bi').text("Bicicleterías"); brad_bi = false;   
      $('.rad_bs').text("Bicisendas"); brad_bs = false;
      $('.rad_cv').text("Ciclovías"); brad_cv = false;
      $('.rad_z30').text("Zona 30"); brad_z30 = false;
});
 

$("#sidebar .menu .menu4").click(function() { 
  if (circulo != null)
  {  
      mapa.removeLayer(circulo);
      circulo = null;
      
  }       
  if (line != null)
  {  
      mapa.removeLayer(line);
      line = null;
  }  

  $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
      $('.rad_ba').text("Bici amigos"); brad_ba = false;
      $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
      $('.rad_bp').text("Bicipuntos");  brad_bp = false;
      $('.rad_pm').text("Plan Movete"); brad_pm = false;
      $('.rad_bi').text("Bicicleterías"); brad_bi = false;   
      $('.rad_bs').text("Bicisendas"); brad_bs = false;
      $('.rad_cv').text("Ciclovías"); brad_cv = false;
      $('.rad_z30').text("Zona 30"); brad_z30 = false;
});

$("#sidebar .menu .menu5").click(function() { 
  if (circulo != null)
  {  
      mapa.removeLayer(circulo);
      circulo = null;
      
  }       
  if (line != null)
  {  
      mapa.removeLayer(line);
      line = null;
  }  
  
  //$('#sidebar .menu .menu5 .submenu').show();
  // $("faq").click(function() {
  //   $('.submenu').toggleClass("slide-menu");
  // }); 

  // $(".back2").click(function() {
  //   $('.faqs').show();
  // });  

  // $(".lsm2").click(function() {
  //   $('.faqs').show();
  // });  
  
  console.log("estoy en FAQ");
  
  $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
      $('.rad_ba').text("Bici amigos"); brad_ba = false;
      $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
      $('.rad_bp').text("Bicipuntos");  brad_bp = false;
      $('.rad_pm').text("Plan Movete"); brad_pm = false;
      $('.rad_bi').text("Bicicleterías"); brad_bi = false;   
      $('.rad_bs').text("Bicisendas"); brad_bs = false;
      $('.rad_cv').text("Ciclovías"); brad_cv = false;
      $('.rad_z30').text("Zona 30"); brad_z30 = false;


});


  // $(".back2").click(function() {
  //    //$('.faqs').show();
  //    console.log("estoy click item 1");
       
  //    //$('#sidebar .menu .menu5 .submenu').toggleClass("open-sidebar");
  //    //$('.faqs').show();
  //    //$('.menu').hide();

  //  });  

  // $(".back3").click(function() {
  //    $('.faqs').show();
  //    console.log("estoy click item 2");
     
  //    //$('.menu').hide();

  //  });   

  
  
  //  $(".lnsm1").click(function() {
  // //   $('.submenu2').show();
  //    console.log("faq1");
  //    //$('#sidebar li ul li .submenu2').css("right", "0");
  //    //$('submenu2').css('display', 'block');
  //    //$('.submenu2').toggleClass("slide-menu");
  //  });  

  //  $(".faq2").click(function() {
  // //   $('.submenu3').show();
  //    $('.submenu3').toggleClass("slide-menu");
  //    console.log("faq2");
  //  });  



$("#sidebar .menu .menu6").click(function() { 
  if (circulo != null)
  {  
      mapa.removeLayer(circulo);
      circulo = null;
      
  }       
  if (line != null)
  {  
      mapa.removeLayer(line);
      line = null;
  }  
  $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
      $('.rad_ba').text("Bici amigos"); brad_ba = false;
      $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
      $('.rad_bp').text("Bicipuntos");  brad_bp = false;
      $('.rad_pm').text("Plan Movete"); brad_pm = false;
      $('.rad_bi').text("Bicicleterías"); brad_bi = false;   
      $('.rad_bs').text("Bicisendas"); brad_bs = false;
      $('.rad_cv').text("Ciclovías"); brad_cv = false;
      $('.rad_z30').text("Zona 30"); brad_z30 = false;


});


function loadPuntosInteres() {
  

  routing = false;
  // Bicisendas
  $('.chk_bs').on("click", function() 
      {
        
        

         bchk_bs = !bchk_bs;	 
         if (!bchk_bs)	
         {
            mapa.removeLayer(geoBS);
         	  $('.chk_bs').text("Bicisendas");
         } 
         else
         {
        
        $().toastmessage('showToast', {
          stayTime:      3500,    
          text     : 'Bicisenda: carril sobre la vereda para tránsito de bicicletas',
          sticky   : false,
          position : 'top-left',
          type     : 'notice'
 
        });
            loadBiciSendas();
         	  $('.chk_bs').text("Bicisendas  ✔");          
         }        
    });

  // Ciclovías
  $('.chk_cv').on("click", function() 
      {     

        

         bchk_cv = !bchk_cv;   
         if (!bchk_cv)  
         {
            mapa.removeLayer(geoCV);
            $('.chk_cv').text("Ciclovías");
         } 
         else
         {
          
            $().toastmessage('showToast', {
              stayTime:      3500,    
              text     : 'Ciclovías: carril sobre la calle para tránsito de bicicletas',
              sticky   : false,
              position : 'top-left',
              type     : 'notice'
     
          });
   
          loadCicloVias(); 
          $('.chk_cv').text("Ciclovías  ✔");          
         }        
    });

  //Zona 30

    $('.chk_z30').on("click", function() 
      {      

         
         bchk_z30 = !bchk_z30;   
         if (!bchk_z30)  
         {
            mapa.removeLayer(geoz30);
            $('.chk_z30').text("Zona 30");
         } 
         else
         {
          $().toastmessage('showToast', {
            stayTime:      3500,    
            text     : 'Zona 30: Calle donde la máxima veloc. es de 30km/h para favorecer la convivencia entre automotores y ciclistas',
            sticky   : false,
            position : 'top-left',
            type     : 'notice'
   
        });
             loadZona30(); 
            $('.chk_z30').text("Zona 30  ✔");          
         }        
    });


  // Comisarías
  $('.chk_sp').on("click", function() 
      {      

         bchk_sp = !bchk_sp;   
         if (!bchk_sp)  
         {
            mapa.removeLayer(lmarkersS);
            $('.chk_sp').text("Seccionales de policía");
         } 
         else
         {
            loadSeccionales();  
            mapa.addLayer(lmarkersS);
            $('.chk_sp').text("Seccionales de policía  ✔");          
         }        
    });


  // Biciamigos
  $('.chk_ba').on("click", function() 
  {     

        

         bchk_ba = !bchk_ba;   
         if (!bchk_ba)  
         {
            mapa.removeLayer(geoBiciAmigos);
            $('.chk_ba').text("Bici amigos");
         } 
         else
         {
     
        $().toastmessage('showToast', {
            stayTime:      3500,    
            text     : 'Biciamigos: Lugares con estacionamiento y/o facilidades para ciclistas',
            sticky   : false,
            position : 'top-left',
            type     : 'notice'
   
        });
 
            loadBiciAmigos();
            mapa.addLayer(geoBiciAmigos);          
            $('.chk_ba').text("Bici amigos  ✔");          
         }        
    });


  // Estaciones de servicio
  $('.chk_es').on("click", function() 
  {
  
         bchk_es = !bchk_es;   
         if (!bchk_es)  
         {
            mapa.removeLayer(inflamarkers);
            $('.chk_es').text("Estaciones de Servicio");
         } 
         else
         {
            loadEstacionesDeServicio();
            mapa.addLayer(inflamarkers);
            $('.chk_es').text("Estaciones de Servicio  ✔");          
         }        
    });


  //Bicipuntos
  $('.chk_bp').on("click", function() 
  {

        
     
         bchk_bp = !bchk_bp;   
         if (!bchk_bp)  
         {
            mapa.removeLayer(geoBiciPuntos);
            $('.chk_bp').text("Bicipuntos");
         } 
         else
         {
           
            $().toastmessage('showToast', {
              stayTime:      3500,    
              text     : 'Bicipuntos: Lugares con estacionamiento y/o herramientas para reparaciones ligeras y gratuito. Son gestionados por Urubike. Presentar CI o identificación',
              sticky   : false,
              position : 'top-left',
              type     : 'notice'
   
        });            

            loadBiciPuntos();
            mapa.addLayer(geoBiciPuntos);
            $('.chk_bp').text("Bicipuntos  ✔");          
         }        
    });


  
  // Plan Movete
  // if (bchk_pm == true) {
  //     alert("es trueeee");
  //     cargarEstaciones();
  //     obtenerDatos(5000); 
  // }
  $('.chk_pm').on("click", function() 
  {
   
        
         bchk_pm = !bchk_pm;   

         if (!bchk_pm)  
         {
            
            mapa.removeLayer(lmarkersE);
            $('.chk_pm').text("Plan Movete");
            clearInterval(idPM);
         } 
         else
         {  
          
         
          $().toastmessage('showToast', {
              stayTime:  3500,    
              text     : 'Plan Movete: Estaciones para el alquiler de bicicletas de la IMM',
              sticky   : false,
              position : 'top-left',
              type     : 'notice'
   
          });    


            cargarEstaciones();            
            obtenerDatos(5000);
            mapa.addLayer(lmarkersE); 
                      
            $('.chk_pm').text("Plan Movete  ✔");          
         }        
    });

  // Bicicleterías

  $('.chk_bi').on("click", function() 
  {
      

         bchk_bi = !bchk_bi;   
         if (!bchk_bi)  
         {
            mapa.removeLayer(geoBicis);        
            $('.chk_bi').text("Bicicleterías");
         } 
         else
         {
            
            loadBicicleterias();
            mapa.addLayer(geoBicis);
            
            $('.chk_bi').text("Bicicleterías  ✔");          
         }        
  });


}

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    latlngmap = e.latlng;

    if (markerGeoLoc != null)
      mapa.removeLayer(markerGeoLoc);

    markerGeoLoc = L.marker(e.latlng).addTo(mapa)
        .bindPopup("Estás dentro de " + radius + " mts desde este punto").openPopup();  
    
}

function onLocationError(e) {
      alert(e.message);
    }
 

// Radio buttons

function encontrarPuntosCercanos()
{
  routing = false; 
  
  $("#sidebar .menu .menu2").click(function() {    
    if (markerGeoLoc == null)
     { 
     mapa.locate({setView: true, maxZoom: 16}); //Usa geolocalización
     mapa.on('locationfound', onLocationFound);     
   }
   }
  
  );
  

  // Bicisendas
  $('.rad_bs').on("click", function() 
  {

      
      console.log("estoy en bs");
        brad_bs = !brad_bs;
        
        if (brad_bs) 
        {  
            console.log("rad estoy en bs");
            $('.rad_bs').text("Bicisendas  ⦿ ");   
            if (!bchk_bs)     
            {   
              loadBiciSendas();
              $('.chk_bs').text("Bicisendas  ✔ ");
              bchk_bs = true;
            }                                                          
        }
        $('.rad_cv').text("Ciclovías"); brad_cv = false;
        $('.rad_z30').text("Zona 30"); brad_z30 = false;  
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
            $('.rad_bp').text("Bicipuntos");  brad_bp = false;
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false;    
        nearestBiciSenda(); 
        if (!bchk_pm)
          clearInterval(idPM);   

    });

  // Ciclovías
  $('.rad_cv').on("click", function() 
  {
      
         brad_cv = !brad_cv;
         if (brad_cv)            
         {        
            console.log("rad estoy en cv");
            $('.rad_cv').text("Ciclovías  ⦿ ");   
            if (!bchk_cv)   
            {    
              loadCicloVias();        
              $('.chk_cv').text("Ciclovías  ✔");     
              bchk_cv = true;
            }                                          
         }
         $('.rad_bs').text("Bicisendas "); brad_bs = false;   
         $('.rad_z30').text("Zona 30"); brad_z30 = false;         
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
            $('.rad_bp').text("Bicipuntos");  brad_bp = false;
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false; 
            nearestCicloVia();  
            if (!bchk_pm)
              clearInterval(idPM);   
            
  });

// Zona 30

  $('.rad_z30').on("click", function() 
  {
      
         brad_z30 = !brad_z30;
         if (brad_z30)            
         {        
            console.log("rad estoy en z30");
            $('.rad_z30').text("Zona 30  ⦿ ");   
            if (!bchk_z30)   
            {    
              console.log("cargo z30");
              loadZona30();
              $('.chk_z30').text("Zona 30 ✔");     
              bchk_z30 = true;
            }                                          
         }
         $('.rad_bs').text("Bicisendas "); brad_bs = false;  
         $('.rad_cv').text("Ciclovías"); brad_cv = false;          
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
            $('.rad_bp').text("Bicipuntos");  brad_bp = false;
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false; 
            nearestZona30();
            if (!bchk_pm)
              clearInterval(idPM);   
            
  });


  // Comisarías
  $('.rad_sp').on("click", function() 
  {
        
         brad_sp = !brad_sp;   
         if (brad_sp)  
         {
           $('.rad_sp').text("Seccionales de policía ⦿");          
           if (!bchk_sp)
           {
            bchk_sp = true;
            loadSeccionales();  
            mapa.addLayer(lmarkersS);            
            $('.chk_sp').text("Seccionales de policía ✔");          
           }                                           
         }  
         $('.rad_bs').text("Bicisendas "); brad_bs = false;
            $('.rad_cv').text("Ciclovías"); brad_cv = false;   
            $('.rad_z30').text("Zona 30"); brad_z30 = false;         
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
            $('.rad_bp').text("Bicipuntos");  brad_bp = false;
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false;  
            nearestSeccional(); 
            if (!bchk_pm)
              clearInterval(idPM);  
         
  });


  // Biciamigos
  $('.rad_ba').on("click", function() 
  {

      
         brad_ba = !brad_ba;   
         if (brad_ba)  
         {
           $('.rad_ba').text("Bici amigos  ⦿");          
           if (!bchk_ba)
           { 
              bchk_ba = true;
              loadBiciAmigos();
              mapa.addLayer(geoBiciAmigos);                        
              $('.chk_ba').text("Bici amigos  ✔");          
           } 
         } 

          $('.rad_bs').text("Bicisendas "); brad_bs = false;
            $('.rad_cv').text("Ciclovías"); brad_cv = false;
            $('.rad_z30').text("Zona 30"); brad_z30 = false;
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false;           
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false; 
            $('.rad_bp').text("Bicipuntos");  brad_bp = false;
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false; 

            nearestBiciAmigo();    
            if (!bchk_pm)
              clearInterval(idPM);  
        
    });


  // Estaciones de servicio
  $('.rad_es').on("click", function() 
  {
         brad_es = !brad_es;   
         if (brad_es)  
         {
            $('.rad_es').text("Estaciones de Servicio  ⦿");          
            if (!bchk_es)
            {  
              bchk_es = true;
              loadEstacionesDeServicio();
              mapa.addLayer(inflamarkers);              
              $('.chk_es').text("Estaciones de Servicio  ✔");          
          }
         }  
          $('.rad_bs').text("Bicisendas "); brad_bs = false;
            $('.rad_cv').text("Ciclovías"); brad_cv = false;
            $('.rad_z30').text("Zona 30"); brad_z30 = false;
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;            
            $('.rad_bp').text("Bicipuntos");  brad_bp = false;
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false; 
            nearestInfladores();
            if (!bchk_pm)
              clearInterval(idPM);  
            
    });


  //Bicipuntos
  $('.rad_bp').on("click", function() 
  {
       
         brad_bp = !brad_bp;   
         if (brad_bp)  
         {
           $('.rad_bp').text("Bicipuntos ⦿");          
           if (!bchk_bp) 
           { 
            bchk_bp = true;
            loadBiciPuntos();
            mapa.addLayer(geoBiciPuntos);            
            $('.chk_bp').text("Bicipuntos ✔");          
           } 
         }

          $('.rad_bs').text("Bicisendas "); brad_bs = false;
            $('.rad_cv').text("Ciclovías"); brad_cv = false;
            $('.rad_z30').text("Zona 30"); brad_z30 = false;
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false;             
            $('.rad_pm').text("Plan Movete"); brad_pm = false;
            $('.rad_bi').text("Bicicleterías"); brad_bi = false;   

            nearestBiciPunto(); 
            if (!bchk_pm)
              clearInterval(idPM);  
    });


  
  // Plan Movete
  // if (bchk_pm == true) {
  //     alert("es trueeee");
  //     cargarEstaciones();
  //     obtenerDatos(5000); 
  // }
  $('.rad_pm').on("click", function() 
  {
        
         brad_pm = !brad_pm;   
         if (brad_pm)  
         {
           $('.rad_pm').text("Plan Movete ⦿");          
           if (!bchk_pm) 
           { 
            bchk_pm = true;
            cargarEstaciones();            
            obtenerDatos(5000);
            mapa.addLayer(lmarkersE); 
                                  
            $('.chk_pm').text("Plan Movete ✔");          
           } 
         }

         $('.rad_bs').text("Bicisendas "); brad_bs = false;
         $('.rad_bp').text("Bicipuntos "); brad_bp = false;
            $('.rad_cv').text("Ciclovías"); brad_cv = false;
            $('.rad_z30').text("Zona 30"); brad_z30 = false;
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false;                         
            $('.rad_bi').text("Bicicleterías"); brad_bi = false;   

            nearest_estacionPM();                      
  });

  // Bicicleterías

  $('.rad_bi').on("click", function() 
  {        
         brad_bi = !brad_bi;   
         if (brad_bi)  
         {
          $('.rad_bi').text("Bicicleterías ⦿");           
          if (!bchk_bi)  
          {  
            bchk_bi = true;
            loadBicicleterias();
            mapa.addLayer(geoBicis);
                        
            $('.chk_bi').text("Bicicleterías ✔");
          }  
         }

         $('.rad_bs').text("Bicisendas "); brad_bs = false;
         $('.rad_bp').text("Bicipuntos "); brad_bp = false;
         $('.rad_pm').text("Plan Movete"); brad_pm = false;         
            $('.rad_cv').text("Ciclovías"); brad_cv = false;
            $('.rad_z30').text("Zona 30"); brad_z30 = false;
            $('.rad_sp').text("Seccionales de policía"); brad_sp = false; 
            $('.rad_ba').text("Bici amigos"); brad_ba = false;
            $('.rad_es').text("Estaciones de Servicio"); brad_es = false;  
            nearestBicicleteria();            
            if (!bchk_pm)
              clearInterval(idPM);                        
            
  });

 }


function loadPaseosTuristicos()
{
  /// copiado
  

  routing = false;
  // Paseo Ciudad Vieja - Parque Rodó
  $('.chk_pq').on("click", function() 
      {
        

         bchk_pq = !bchk_pq;   
         if (!bchk_pq)  
         {
            mapa.removeLayer(geoCvPR);
            $('.chk_pq').text("Ciudad Vieja - Pque Rodó");
         } 
         else
         {           
            loadCVPqueRodo();
            $('.chk_pq').text("Ciudad Vieja - Pque Rodó  ✔");          
         }        
    });

  // Paseo Romántico del Prado
  $('.chk_pr').on("click", function() 
      {      

         bchk_pr = !bchk_pr;   
         if (!bchk_pr)  
         {
            mapa.removeLayer(geoPaseoPrado);
            $('.chk_pr').text("Paseo romántico - Prado");
         } 
         else
         {
             loadPaseoPrado(); 
            $('.chk_pr').text("Paseo romántico - Prado  ✔");          
         }        
    });

  // Paseo Peñarol

  $('.chk_pe').on("click", function() 
      {      

         bchk_pe = !bchk_pe;   
         if (!bchk_pe)  
         {
            mapa.removeLayer(geoPaseoPeniarol);
            $('.chk_pr').text("Barrio Peñarol");
         } 
         else
         {
             loadPaseoPeniarol(); 
            $('.chk_pe').text("Barrio Peñarol  ✔");          
         }        
    });
  
}















  