var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());
var buf,str;
app.get('/', function(request, response) {
  buf=fs.readFileSync('index.html','utf8');
  //console.log(buf);	
  var buffer=new Buffer(buf); 
 str=buffer.toString();
 response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
