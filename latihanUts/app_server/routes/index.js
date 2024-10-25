var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Import Controller
const mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.index);
router.get('/kontak',mainController.kontak);

module.exports = router;