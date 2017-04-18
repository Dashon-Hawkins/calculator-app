var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Calculator'
  });

});
router.get('/calc', function(req, res, next) {
  res.redirect(`/calc/${req.body.operation}/${req.body.num1}/ ${req.body.num2}`);
  });

router.post('/calc/:operation/:num1/:num2', function(req, res, next) {
  var result = "Operation not supported, try again...";
  if (req.params.operation === 'add') {
    result = Number(req.params.num1) + Number(req.params.num2);
  } else if (req.params.operation === 'subtract') {
    result = Number(req.params.num1) - Number(req.params.num2);
  } else if (req.params.operation === 'multiply') {
    result = Number(req.params.num1) * Number(req.params.num2);
  } else if (req.params.operation === 'divide') {
    result = Number(req.params.num1) / Number(req.params.num2);
  } else {
    return(result);
  }

  res.render('result', {
    title: 'Your Answer',
    operation: req.params.operation,
    num1: req.params.num1,
    num2: req.params.num2,
    result: result });
});

module.exports = router;
