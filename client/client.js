var Escher = require('escher-auth'),
    http = require('http');

var escher = new Escher({
  accessKeyId: 'EscherExample',
  apiSecret: 'TheBeginningOfABeautifulFriendship'
});

var requestDate = (new Date())
  .toISOString()
  .replace(/-/g, '')
  .replace(/:/g, '')
  .replace(/\..*Z/, 'Z');

var options = {
  host: 'localhost',
  path: '/validate_request',
  port: 8080,
  method: 'GET',
  url: '/validate_request',
  headers: [
    ['Host', 'localhost'],
    ['X-Escher-Date', requestDate]
  ]
}

options = escher.signRequest(options, '');

http.get(options, function(resp){
  resp.on('data', function(chunk){
    console.log(chunk.toString());
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});