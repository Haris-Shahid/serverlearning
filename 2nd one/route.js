var express = require('express') ;
var app = express() ;
var route = require('./server.js')
app.use('/page', route ) ;

app.listen(3000 , function(){
    console.log('server running...')
})