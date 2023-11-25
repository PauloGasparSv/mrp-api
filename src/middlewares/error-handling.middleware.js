export default async function (ctx, next) {
	try {
		await next();
	} catch (err) {
		ctx.status = err.statusCode || err.status || 500;
		ctx.body = {
			message: err.message,
			data: err.body,
		};
	}
}
