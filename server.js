var express = require('express');
var app = express();
var request = require('request');

app.get('/api/glassdoor/:name', function(req, res) {
  var apiId = '56941';
  var apiKey = 'bPTsEIdyLXk';
  var apiUrl = 'http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=' + apiId +
               '&t.k=' + apiKey +
               '&action=employers&q=' + req.params.name;
  request(apiUrl, function(err, request, body) {
    res.send(body);
  });
});

app.use('/', express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
