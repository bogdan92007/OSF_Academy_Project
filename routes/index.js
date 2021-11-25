var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alibazon' });
});
/* GET catalog page */
router.get('/products-page', function(req, res, next) {
  res.render('products-page', { title: 'Alibazon' });
});

router.get('/product-page', function(req, res, next) {
  res.render('product-page', { title: 'Alibazon' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Alibazon' });
});

router.get('/log-in', function(req, res, next) {
  res.render('log-in', { title: 'Alibazon' });
});

router.get('/modal', function(req, res, next) {
  res.render('modal', { title: 'Alibazon' });
});

router.get('/wishlist', function(req, res, next) {
  res.render('wishlist', { title: 'Alibazon' });
});

router.get('/shopping-cart', function(req, res, next) {
  res.render('shopping-cart', { title: 'Alibazon' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Alibazon' });
});

module.exports = router;
