var express = require('express');
var app = express();
var path = require('path');
const PORT = 3000;

console.log("Listening on port:" + PORT);

app.use('/static', express.static(__dirname + '/dist/scss'));
app.use('/static', express.static(__dirname + '/dist/js'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT);