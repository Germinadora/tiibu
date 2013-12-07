window.appMarkers = [];

function removeAllMarkers() {
  for (var i = 0; i < appMarkers.length; i++) {
    appMarkers[i].setMap(null);
  }
  appMarkers = []; 
}

function changePosition( Lat, Long ) {
  var newPosition = new google.maps.LatLng( Lat, Long );
  if (window.appMap == undefined) return;

  removeAllMarkers();

  var marker = new google.maps.Marker({
    position: newPosition,
    map: appMap,
  });

  appMap.setZoom(16);
  appMap.setCenter(newPosition);
}


$(document).ready( function() {
  // Rodar App Aqui

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8
    };
    window.appMap = new google.maps.Map(document.getElementById("map-canvas"),
                                  mapOptions);

    var currentPosition = new google.maps.LatLng(-23.571007, -46.647210);

    appMarkers.push(
      new google.maps.Marker({
        position: currentPosition,
        map: appMap,
      })
    );

    appMap.setZoom(16);
    appMap.setCenter(currentPosition);

  }
  google.maps.event.addDomListener(window, 'load', initialize);

  

  // center = new google.maps.LatLng(-34.397, 150.644)
});
