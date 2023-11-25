import Router from '@koa-router';
import { healthCheck } from './health-check.controller';

const router = new Router({ prefix: '' });

// Routes
router.get('/', healthCheck);

export default router;
