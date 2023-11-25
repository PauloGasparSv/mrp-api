export default class NotFound extends Error {
	constructor(message, body) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = 401;
		this.body = body;
		Error.captureStackTrace(this, this.constructor);
	}
}
