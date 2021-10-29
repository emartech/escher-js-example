const Escher = require('escher-auth');
const http = require('http');

const escher = new Escher();

const keyDB = function(accessKeyId) {
  return {'EscherExample': 'TheBeginningOfABeautifulFriendship'}[accessKeyId];
}

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  if (req.url === "/validate_request") {
    try {
      escher.authenticate(req, keyDB);
      res.end("OK");
    } catch(e) {
      res.end("ERROR: " + e.message);
    }
  } else {
    res.end("Escher Example");
  }
}).listen(8080);
