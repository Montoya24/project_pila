var express = require('express');
var router = express.Router();

/* GET users. */
router.get('/', function(req, res, next) {
  res.render('author',{author: "Espinoza Montoya Aylen"});
});

module.exports = router;
