var express = require('express');
var path = require('path');
var profileModel = require('../model/profile');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', profileModel);
});

module.exports = router;
