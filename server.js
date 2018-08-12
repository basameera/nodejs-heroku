var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')

// set port
var port = process.env.PORT || 8080

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/login.html');
})

// ---------- Server ----------
var server = app.listen(port, function () {
    //var host = ip.address();
    var host = '127.0.0.1';
    var PORT = server.address().port

    console.log('Example app listening at http://' + host + ':' + PORT)
});
