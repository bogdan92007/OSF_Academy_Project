var express = require('express');
var router = express.Router();
var orice = require('./orice.js');
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

const app = express();

Sentry.init({
    dsn: "https://5adcaed153d240308efcd8ddc6401d31@o1081206.ingest.sentry.io/6088329",
    tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
  
  setTimeout(() => {
    try {
      foo();
    } catch (e) {
      Sentry.captureException(e);
    } finally {
      transaction.finish();
    }
  }, 99);

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "You should not be here...");
});




/* GET home page. */
router.get('/', async function(req, res, next) {
    var mainCatalog = await orice.getRootCategories();
    res.render('index', {  title: "Home", apiResponse: mainCatalog });
});

/* GET catalog page */
router.get('/catalog/:category', async function(req, res, next) {
    var catalogItems = await orice.getCatalogItems(req.params.category);
    if (catalogItems.length === 0) {
        try {
            catalogItems = await orice.getProducts(req.params.category);
        } catch (e) {
            res.send("No product in this category");
        }
        res.render('products', { title: req.params.category, apiResponse: catalogItems });
    } else {
        res.render('catalog', { title: req.params.category, apiResponse: catalogItems });
    }
});

router.get('/wishlist', async function(req, res, next) {
    let token = req.cookies.token;
    var wishlist = await orice.wishlist(token);
    res.render('wishlist', { title: "wishlist", apiResponse: wishlist });
});

router.get('/products/:productId', async function(req, res, next) {
    var product = await orice.getProduct(req.params.productId);
    res.render("product", {title: req.params.productId, apiResponse: product});
});

/* Get and Post for the registry process */

router.post('/login', async function(req, res, next) {
    let payload = {
        "email": req.body.email,
        "password": req.body.password
    };
    let token = await orice.login(payload);
    res.cookie('token', token);
    res.render("login", {title: "Login status", action: "login", token: token});
});

router.post('/shoppingCart', async function (req, res, next) {
    res.render('shoppingCart', {title : "Shopping Cart"})
})

module.exports = router;
