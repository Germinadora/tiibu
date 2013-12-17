// Load the TCP Library
net = require('net');
 
// Keep track of the chat clients
var clients = [];
var debug = 0;  // 1 Modo Debug ON / 0 Modo Debug OFF


// Start a TCP Server
net.createServer(function (socket) {
 

  socket.name = socket.remoteAddress + ":" + socket.remotePort 


  socket.write("Welcome " + socket.name + "\n");
   

  socket.on('data', function (data) {
    var dados = data.toString('ascii', 0, data.length);
    var info;
    var data=new Array();
    var count=0;
    var a;
  
//db.testData.insert({name:"Luiz Sales", idade:"38"})

  for (var i=0; i < 10; i++){

        while(true){
          info = dados.substr(count,1);   

          if( info == "#"){
            count++;
            info = dados.substr(count,1);
            data[i] = info;

            while(true){
              count++;
              info = dados.substr(count,1);
              data[i] = data[i]+info;
                         
                if( info == "#"){

                    if( i == 0){
                      var imei = data[i].replace("#","");
	
			if (debug == 1)
	                    console.log("IMEI: " + imei);
                    }


                    if( i == 1){
                      var device_user = data[i].replace("#","");

			if (debug == 1)
                           console.log("Device_user:  " + device_user );
                    }


                    if( i == 2){
                      var  velocidade = data[i].replace("#","");

			if (debug == 1)
                           console.log("Velocidade: " + velocidade );
                    }


                    if( i == 7){
                      var positionData = data[i].replace("#","");


			var LongDegree = new Number(positionData.substr(0,3));
			var aLongMin   = new Number(positionData.substr(3,2));
			var aLongSeg   = new Number(positionData.substr(6,4));
      var bLongMin   = parseFloat(aLongMin/60);
      var bLongSeg   = parseFloat(aLongSeg/1000);
      var cLongSeg   = parseFloat(bLongSeg/3600);
			var Longitude  = LongDegree+bLongMin+cLongSeg;


      


			var LatDegree  = new Number(positionData.substr(13,2));
			var aLatMin     = new Number(positionData.substr(15,2));
			var aLatSeg    = new Number(positionData.substr(18,4));
      var bLatMin    = parseFloat(aLatMin/60);
      var bLatSeg    = parseFloat(aLatSeg/1000);
      var cLatSeg    = parseFloat(bLatSeg/3600);
			var Latitude   = LatDegree+ bLatMin+cLatSeg;

      
			if (debug == 1){
          console.log("Longitude: \n");
          console.log("A: " + LongDegree + " B: " + aLongMin + " C: " + aLongSeg );
          console.log("\n");
          console.log("Latitude: \n");
          console.log("A : " + LatDegree + " B: " + aLatMin + " C: " + aLatSeg );
          console.log("\n");
  
          console.log("Position Data: " + positionData );
          console.log("Longitude : " + LongDegree + " - " + bLongMin + " - " + bLongSeg);
          console.log("Longitude int : " + Longitude);

          console.log("--------------------- ");
			    console.log("Latitude : " + LatDegree + " - " + bLatMin + " - " + bLatSeg);
          console.log("Latitude int : " + Latitude);
				
			
			}
                    }



                  break;
                }

              }
          
          if( info == "#"){
            break;
          }


        

          }


        }


        //console.log(info); 
  }


var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '61188',
  key: 'f340e74bee71beefe7a1',
  secret: '9fc2b90853ba634a4403'
});

pusher.trigger('public', 'setPosition', {"latitude":-Latitude,"longitude":-Longitude,"velocidade":velocidade});




 
 





  });
}).listen(9400);


if (debug == 1)
   console.log("Porta 9400 " );


