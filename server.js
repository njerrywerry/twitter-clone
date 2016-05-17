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

// user get route
router.get('/users', function(req, res) {
  res.json({ username: 'njerrywerry', email: 'sylviakieha@gmail.com'})
})

// user post route
router.post('/users', function(req, res) {
  res.send('Got a POST request');
})

// user put route
router.put('/users', function(req, res) {
  res.send('Got a PUT request');
})

// user delete route
router.delete('/users', function(req, res) {
  res.send('Got a DELETE request');
})

// route registration
app.use('/api', router);

// start the server
app.listen(port);
console.log('Connect to port ' + port);
