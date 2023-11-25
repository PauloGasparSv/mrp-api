import auth from './auth';
import healthCheck from './health-check';

const routers = [auth, healthCheck];

export default function routes(api) {
	routers.forEach((router) => {
		api.use(router.routes()).use(router.allowedMethods());
	});
}
