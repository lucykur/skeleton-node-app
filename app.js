var express = require('express');
var app = express();

require('./routes/home-routes')(app);

app.listen(3000);
