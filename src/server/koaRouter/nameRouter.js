const router = require('koa-router')();
router.prefix("/name");
const koaController = require('../koaController/index');

router.get('/:id', koaController);
router.post('/:id', koaController);

module.exports = router.routes();