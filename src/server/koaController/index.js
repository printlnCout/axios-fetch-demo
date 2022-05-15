const koaController = async (ctx) => {
  ctx.response.body = {
    params: ctx.params,
    query: ctx.query,
    body: ctx.request.body,
  };
};

module.exports = koaController;