// call needed packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// lets us get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// API routes
var router = express.Router();

// STATIC ROUTES
// tweet route
router.get('/tweets', function(req, res) {
  res.json({ tweet: "Yippee!" });
});

// user route
router.get('/users', function(req, res) {
  res.json({ username: 'njerrywerry', email: 'sylviakieha@gmail.com'})
})

// route registration
app.use('/api', router);

// start the server
app.listen(port);
console.log('Connect to port ' + port);
