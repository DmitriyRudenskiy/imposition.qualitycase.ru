const Koa = require('koa2');
const send = require('koa-send');
const PORT = process.env.PORT || 5000;
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.path === '/') {
        ctx.path = '/index.html';
    }
  await send(ctx, ctx.path, { root: __dirname + '/../public' });
});

app.listen(PORT);