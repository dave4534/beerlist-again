var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beers');

var Beer = require("./BeerModel");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.use('/node_modules', express.static('node_modules'));

app.post('/beers', function (req, res) {
  var beer = new Beer(req.body);
  beer.save(function (err, beer) {
    res.send(beer);
  });
});

app.get('/beers', function(req, res){
  Beer.find(function(error, beers){
    res.send(beers);
  });
});

app.listen(8000);