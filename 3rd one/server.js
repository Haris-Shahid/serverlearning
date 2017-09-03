var express = require("express");
var http = require("http");
var app = express();

app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("<h1>wow its working</h1>");
});


http.createServer(app).listen(3000 , function (){
    console.log('server running ..')
} );