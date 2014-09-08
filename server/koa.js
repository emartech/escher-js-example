var Escher = require('escher-auth'),
    koa = require('koa'),
    router = require('koa-router'),
    app = koa();

var escher = new Escher({
  accessKeyId: 'EscherExample',
  apiSecret: 'TheBeginningOfABeautifulFriendship'
});

var keyDB = function(secretKey) {
  return "TheBeginningOfABeautifulFriendship";
}

app.use(router(app));

app.get('/', function *(next) {
  this.body = 'Escher Example';
});

app.get('/validate_request', function *(next) {
  try {
    escher.validateRequest(this.req, keyDB);
    this.body = "OK";
  } catch(e) {
    this.body = "ERROR: " + e.message;
  }
});

app.listen(8080);