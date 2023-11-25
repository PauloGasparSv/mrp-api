import BadRequest from '../../utils/http-errors/BadRequest.js';

export default {
	login(email, password) {
		if (email === 'test@gmail.com' && password === '1234') {
			return {
				token: '<TOKEN_HERE>',
				refresh_token: '<REFRESH_TOKEN_HERE>',
			};
		}
		throw new BadRequest('F### you');
	},
};
