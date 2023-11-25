import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from '@koa/bodyparser';
import dotenv from 'dotenv';

import errorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import responseTimeMiddleware from './middlewares/response-time.middleware.js';
import routes from './routes.js';

if (process.env.NODE_ENV !== 'production') {
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
	.use(bodyParser())
	.use(router.routes())
	.use(errorHandlingMiddleware)
	.use(responseTimeMiddleware)
	.use(router.allowedMethods());

routes(api);

api.listen(process.env.port ?? 5001);
