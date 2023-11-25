import authService from './auth.service.js';

export function login(ctx) {
	const { email, password } = ctx.request.body;
	ctx.body = authService.login(email, password);
}
