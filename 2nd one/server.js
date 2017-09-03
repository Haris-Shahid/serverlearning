// app.use( '/home' ,function( req ,res ,next ) {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Hello, World!");
//     console.log('its a middleweare');
//     next();
// })
// app.get( '/home' ,function( req ,res) {
//     console.log('its a route');
//     res.send('its a home page')
// })
// app.listen(3000 , function(){
//     console.log('server runing')
// })

// var express = require('express') // Import express module from node_modules
// var http = require('http') // Import http module from node_modules
// var app = express() // call express function which means return req.handlerFunction




// app.use(function (request, response, next) {
//     // response.writeHead(200, { "Content-Type": "text/plain" });
//     // response.end("Hello, World!");
//     console.log("run middleware")
//     next()
// })
// app.get('/', (request, response) => {
//     response.send("helle world")
// })

// app.use(function (request, response,next) {
//     // response.writeHead(200, { "Content-Type": "text/plain" });
//     // response.end("Hello, World!");
//     console.log("run middleware2121121")
//     next()
// })


// app.use((request, response, next) => {
//     console.log("Logging done")
//     next()
// })
// app.use((request, response, next) => {
//     console.log("After Login")
//     next()
// })
//      app.get('/about', (request, response) => {
//         response.send("Render about page")
//      })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//     if ((minuts % 2) === 0) {
//         next()
//     } else {
//         response.send("User Not Authorized")
//     }
// })

// app.use((request, response) => {
//     response.send("Auth Success Send Informission")
// })

// http.createServer(app).listen(3000 , function (){
//     console.log('server start running')
// });

var express = require('express') ;
var route = express.Router() ;

route.get('/', function(req ,res ,next){
    console.log('route page console') ;
    res.send('route page')
})

module.exports = route ;