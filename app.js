var express = require('express')
var cors = require('cors')
var app = express()

/*var whitelist = ['http://localhost:3000', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}*/
var whitelist = ['http://localhost:3000', 'http://example2.com']

// Enable CORS and set correct mime type/content encoding
var header = {
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type":"application/x-protobuf",
  "Content-Encoding":"gzip"
};

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  var h = whitelist.indexOf(req.header('Origin'));
  corsOptions = { origin: false }
  callback(null, corsOptions)
  //console.log('corsOptionsDelegate header= '+h)
}

app.options('*', cors())

app.get('/', cors(), function (req, res, next) {
  //res.json({msg: 'This is CORS-enabled for all origins!'})
  res.sendFile('D:/Ddesk/poolchess/flood-demo/index.html');
})


app.listen(3000, function () {
  console.log('web server listening on port 3000')
})