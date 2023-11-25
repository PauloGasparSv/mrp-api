import Router from '@koa/router';
import { healthCheck } from './health-check.controller.js';

const router = new Router();

// Routes
router.get('/', healthCheck);

export default router;
