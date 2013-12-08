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

  // appMarkers.push(marker);

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

  Pusher.log = function(message) {
    if (window.console && window.console.log) {
      window.console.log(message);
    }
  };

  var pusher = new Pusher('f340e74bee71beefe7a1');
  // public
  // Depois que tiver user.account, transformar no canal do cliente, ex:
  // ID Cliente: 575
  // Chave Publica: ahdsga187261767da6
  // ID do Canal: MD5 ou Hash (ID do cliente com Chave Publica)
  var channel = pusher.subscribe('public');
  channel.bind('setPosition', function(data) {
    console.log(data);
    // data.long
    // data.lat
    // changePosition( data.long, data.lat );
    changePosition( data.latitude, longitude );
  }); 

  // center = new google.maps.LatLng(-34.397, 150.644)
});
