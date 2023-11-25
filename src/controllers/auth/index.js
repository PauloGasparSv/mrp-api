import Router from '@koa-router';
import { login } from './auth.controller';

const router = new Router({ prefix: 'auth' });

// Routes
router.post('/login', login);

export default router;
