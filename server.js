var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/router.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '.')));

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))