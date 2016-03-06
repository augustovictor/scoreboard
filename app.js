// > MODULES
var express    = require('express');
var bodyParser = require('body-parser');

// -------------------------------------------------
// > DEFINITIONS
var app        = express();

// -------------------------------------------------
// > MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// -------------------------------------------------
// > FILES IMPORT
var teamRoutes = require('./routes/teamRoutes.js')(app);

// -------------------------------------------------
// > SERVER
var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});
