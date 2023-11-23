import Koa from 'koa';
const api = new Koa();

api.use(async (ctx) => {
	ctx.body = 'Hello World';
});

api.listen(3000);
