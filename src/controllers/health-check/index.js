import Router from '@koa/router';
import { healthCheck, dataBaseCheck } from './health-check.controller.js';

const router = new Router();

// Routes
router.get('/', healthCheck);
router.get('/base', dataBaseCheck);

export default router;
