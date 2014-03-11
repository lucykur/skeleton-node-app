var express = require('express');
var app = express();

require('./app/routes/home-routes')(app);

app.listen(3000);
