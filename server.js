var http = require('http');
/*var fs = require('fs');
var mod1 = require('./module1');
var mod2 = require('./module2');*/
var app = require('./app');
http.createServer(app.onRequest).listen(8000);