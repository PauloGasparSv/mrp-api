import Koa from 'koa';
const api = new Koa();
const PORT = process.env.port ?? 3000;

api.use(async (ctx) => {
	ctx.body = 'Hello World';
});

api.listen(PORT);
