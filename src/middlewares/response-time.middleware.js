export default async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('Response-Time', `${ms}ms`);
};
