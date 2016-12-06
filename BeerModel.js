var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
  name: String,
  style: String,
  image_url: String,
  abv: Number
});

var Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;