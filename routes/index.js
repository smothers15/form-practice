var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res, next) {


  //console.log(size);
  res.render('result',{
    color: req.body.colors,
    text: req.body.textInput||"This is an example of something you could type here.",
    underlined: req.body.underlined,
    size: req.body.size,

  });
});

module.exports = router;
