var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alibazon' });
});
/* GET products page */
router.get('/products-page', function(req, res, next) {
  res.render('products-page', { title: 'Alibazon' });
});

router.get('/product-page', function(req, res, next) {
  res.render('product-page', { title: 'Alibazon' });
});

module.exports = router;
