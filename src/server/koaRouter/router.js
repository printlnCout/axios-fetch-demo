const router = require('koa-router')();

const bookRouter = require('./bookRouter');
const nameRouter = require('./nameRouter');

router.use(bookRouter).use(nameRouter);

module.exports = router;