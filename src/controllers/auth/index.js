import Router from '@koa/router';
import { login } from './auth.controller.js';

const router = new Router();

// Routes
router.post('/login', login);

export default router;
