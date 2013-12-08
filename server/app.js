// Load the TCP Library
net = require('net');
 
// Keep track of the chat clients
var clients = [];
 
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

  for (var i=0; i < 4; i++){

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
                  var latitude;
                  var longitude;
                  var velocidade;

                    if( i == 0){
                      latitude = data[i].replace("#","");
                      console.log(latitude);
                    }


                    if( i == 1){
                      longitude = data[i].replace("#","");
                      console.log(longitude);
                    }


                    if( i == 2){
                      velocidade = data[i].replace("#","");
                      console.log(velocidade);
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
  });
}).listen(9400);
