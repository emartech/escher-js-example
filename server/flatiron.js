var Escher = require('escher-auth'),
    flatiron = require('flatiron'),
    app = flatiron.app;

var escher = new Escher({
  accessKeyId: 'EscherExample',
  apiSecret: 'TheBeginningOfABeautifulFriendship'
});

var keyDB = function(secretKey) {
  return "TheBeginningOfABeautifulFriendship";
}

app.use(flatiron.plugins.http);

app.router.get('/', function () {
  this.res.end('Escher Example');
});

app.router.get('/validate_request', function () {
  try {
    escher.validateRequest(this.req, keyDB);
    this.res.end("OK");
  } catch(e) {
    this.res.end("ERROR: " + e.message);
  }
});

app.start(8080);
