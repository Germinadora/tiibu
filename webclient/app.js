var express = require("express");
var logfmt = require("logfmt");
var sass = require('node-sass');

var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.use(require("merge-js").middleware({ 
  src: __dirname + "/client", 
  dest: __dirname + "/public"
}));

app.use(sass.middleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public/css',
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css'
}));

app.get('/app', function(req,res) { res.render('app/index.html') });
app.get('/app/*', function(req,res) { res.render('app/index.html') });

// Rotas de API
//

// Start App
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
