var map;
jQuery(document).ready(function(){
    map = new GMaps({
        div: '#map',
        lat: 42.052236, 
        lng: -1.597827,
        zoom: 14
    });
    map.addMarker({
        lat: 42.0598579,
        lng: -1.6099736,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Taller</h5><p><span class="region">C/ Donantes, 19</span><br><span class="postal-code">31500 - Tudela</span><br><span class="phone">Tél. 948 41 08 35</span></p>'
        }
    });
    map.addMarker({
        lat: 42.041582,
        lng: -1.590675,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Exposición y venta</h5><p><span class="region">Polígono la Barrena (Junto a Día)</span><br><span class="postal-code">31500 - Tudela</span><br><span class="phone">Tél. 948 82 64 21</span></p>'
        }
        
    });
});
