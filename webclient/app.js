var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + "/public"));

// Algumas rotas (Marketing)
// Algumas rotas (App - Single Page App)
app.get('/', function(req,res) {
  res.render('index');
});

// Rotas de API

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
