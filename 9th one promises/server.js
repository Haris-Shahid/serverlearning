var express = require('express');
var myMod = require('./module')
var app = express();

app.get('/', function (req, res) {
	myMod.myRandom()
		.then(function (random) {
            console.log(random)
			res.send('This is Your Number ' + random)
		})
	console.log('Run..')
}).listen(3000)
