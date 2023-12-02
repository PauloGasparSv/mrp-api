import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from '@koa/bodyparser';
import dotenv from 'dotenv';
import helmet from 'koa-helmet';

import errorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import responseTimeMiddleware from './middlewares/response-time.middleware.js';
import routes from './routes.js';

const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
	dotenv.config();
}

const api = new Koa();
const router = new Router();

api.use(
	cors({
		origin: '*',
		allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowHeaders: ['Authorization', 'Content-Type', 'Accept'],
	})
)
	.use(helmet())
	.use(bodyParser())
	.use(router.routes())
	.use(errorHandlingMiddleware)
	.use(responseTimeMiddleware)
	.use(router.allowedMethods());

routes(api);

api.listen(process.env.port ?? 5001);

// eslint-disable-next-line no-console
console.log(
	`[index.js] Server is running at http://127.0.0.1:${
		process.env.port ?? 5001
	}`
);
