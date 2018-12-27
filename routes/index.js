var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'El webo mio' });
});

module.exports = router;
//https://www.youtube.com/watch?v=mAOxWf36YLo