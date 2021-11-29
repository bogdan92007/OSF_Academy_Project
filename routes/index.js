var express = require('express');
var router = express.Router();
var orice = require('./orice.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var mainCatalog = await orice.getRootCategories();
  res.render('index', {  title: "Home", apiResponse: mainCatalog });
});

/* GET catalog page */
router.get('/catalog/:category', async function(req, res, next) {
  var catalogItems = await orice.getCatalogItems(req.params.category);
  res.render('catalog', { title: req.params.category, apiResponse: catalogItems });
});

/* Get and Post for the registry process */
router.get('/register', async function(req, res, next) {
  
  return res.render('register', { title: 'Sign up'});
});

// router.get('./register', function(req, res, next) {
//   if (req.body.email &&
//     req.body.name &&
//     req.body.password &&
//     req.body.confirmPassword) {
//       if (req.body.password !== req.body.confirmPassword) {
//         var err = new Error ('Passwords do not match.');
//         err.status = 400;
//         return next(err);
//       }
//       var userData = {
//         email: req.body.email,
//         name: req.body.name,
//         password: req.body.password
//       };
//     } else {
//       var err = new Error ('All fields must be completed');
//       err.status = 400;
//       return (next(err));
//     }
//   })
module.exports = router;
