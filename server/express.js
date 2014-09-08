var Escher = require('escher-auth'),
    express = require('express'),
    app = express();

var escher = new Escher({
  accessKeyId: 'EscherExample',
  apiSecret: 'TheBeginningOfABeautifulFriendship'
});

var keyDB = function(secretKey) {
  return "TheBeginningOfABeautifulFriendship";
}

app.get('/', function (req, res) {
  res.send("Escher Example");
})

app.get('/validate_request', function(req, res){
  try {
    escher.validateRequest(req, keyDB);
    res.send("OK");
  } catch(e) {
    res.send("ERROR: " + e.message);
  }
});

app.listen(8080);
