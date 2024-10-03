var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// Create a new instance of the Express app
const app = express();

// Import the kontakRouter
const kontakRouter = require('./routes/kontak');

// Use the kontakRouter for the /kontak route
app.use('/kontak', kontakRouter);

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});