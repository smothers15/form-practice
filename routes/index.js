var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res, next) {

  //console.log("Width: " + borderWidth + " Color: " + borderColor);
  //console.log(size);
  res.render('result',{
    color: req.body.colors,
    text: req.body.textInput||"Type something and see it here.",
    underlined: req.body.underlined,
    size: req.body.size,
    borderWidth: req.body.borderWidth,
    borderColor: req.body.border,
    textColor: req.body.textColor

  });

});

/*function getBorderColor(border){
  if(border === "black"){
    return "#000000"
  }else if(type === "blue"){
    return "#0000FF"
  }else if(type === "red"){
    return "#FF0000"
  }else if(type === "purple"){
    return "#800080"
  }else{
    return "#008000"
  }
}*/

module.exports = router;
