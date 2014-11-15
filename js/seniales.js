
function addSeniales()
{
        var legend = L.control({position: 'bottomright'});            

        legend.onAdd = function (mapa) {

            var div = L.DomUtil.create('div', 'info legend')
                
            

            var labels = '<i style="background:' + '#FF9500' + '"></i> Ciclovias' + '<br>' + 
                '<i style="background:' + '#1DA90B' + '"></i> Bicisendas' + '<br>' + 
                 '<i style="background:' + '#1D1F9C' + '"></i> Tramos sugeridos' + '<br>' + 
                 '<i style="background:' + '#DB1417' + '"></i> Pendientes';
                 
            div.innerHTML = labels;
            return div;
        }
         legend.addTo(mapa);           
}

function addIconSenial()
{

    var overlayMaps = {
    "<img src='imagenes/uni2.png' height=24>Facultades": lmarkersFacs,
    "<img src='imagenes/bikeiconsemi.png' height=24>Plan Movete": lmarkersE,
    "<img src='imagenes/Police-Man.png' height=24>Secc. Policiales": lmarkersS};
    var legend = L.control().layers(null, overlayMaps, {
        collapsed: false
    }).addTo(mapa);
    legend.setPosition('bottomleft');
};    

