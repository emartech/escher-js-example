const Escher = require('escher-auth');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const escher = new Escher();
const keyDB = function(accessKeyId) {
  return {'EscherExample': 'TheBeginningOfABeautifulFriendship'}[accessKeyId];
}

const router = new Router();

router.get('/', function(ctx, next) {
  ctx.body = 'Escher Example';
  next();
});

router.get('/validate_request', function(ctx, next) {
  try {
    escher.authenticate(ctx.req, keyDB);
    ctx.body = "OK";
  } catch(e) {
    ctx.body = "ERROR: " + e.message;
  }
  next();
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8080);