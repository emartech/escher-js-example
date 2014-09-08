var Escher = require('escher-auth'),
    http = require('http');

var escher = new Escher({
  accessKeyId: 'EscherExample',
});

var keyDB = function(secretKey) {
  return "TheBeginningOfABeautifulFriendship";
}

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  if (req.url === "/validate_request") {
    try {
      escher.validateRequest(req, keyDB);
      res.end("OK");
    } catch(e) {
      res.end("ERROR: " + e.message);
    }
  } else {
    res.end("Escher Example");
  }
}).listen(8080);
