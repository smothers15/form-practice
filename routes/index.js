var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res, next) {

  console.log(req.body.colors);
  console.log("underlined" + req.body.underlined);
  res.render('result',{
    color: req.body.colors,
    text: req.body.textInput,
    underlined: req.body.underlined
  });
});

module.exports = router;
