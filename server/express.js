const Escher = require('escher-auth');
const express = require('express');

const app = express();

const escher = new Escher();
const keyDB = function(accessKeyId) {
  return {'EscherExample': 'TheBeginningOfABeautifulFriendship'}[accessKeyId];
}

app.get('/', function (req, res) {
  res.send("Escher Example");
})

app.get('/validate_request', function(req, res){
  try {
    escher.authenticate(req, keyDB);
    res.send("OK from Express");
  } catch(e) {
    res.send("ERROR from express: " + e.message);
  }
});

app.listen(8080);
