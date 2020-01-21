var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('../Models/mongooseModels');
var uri = "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/tutorias?retryWrites=true&w=majority";
router.post('/', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  var kittySchema = new mongoose.Schema({usr:String, act:String, content:{} });
    let usr = req.body.usr;
    let Kitten = mongoose.model('Actividad', kittySchema, 'actCom');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(err) {
    let Snow = new Kitten({usr:req.body.usr, act:"Blah", content:req.body.act});
    console.log(Snow)
    Snow.save()
    res.send('ok')
  });
});

module.exports = router;
