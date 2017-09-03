var express = require("express");
var logger = require("morgan");
var http = require("http");
var app = express();
var port = process.env.PORT || 3000

app.use(logger("short"));

app.use(function (request, response, next) {
    var minute = new Date().getMinutes();
    console.log(minute)
    if ((minute % 2) === 0) {
        next();
    }
    else {
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});
app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("User Authanticated :)");
});
http.createServer(app).listen(port , function (){
    console.log('server running on :' + port)
});