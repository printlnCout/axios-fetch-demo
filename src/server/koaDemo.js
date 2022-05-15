const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./koaRouter/router');
const cors = require('koa2-cors');
const app = new Koa();

// app.use('*', async ctx => {
//   console.log(ctx.request.url);
// });

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
