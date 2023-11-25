export default class InternalServerError extends Error {
	constructor(message, body) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = 500;
		this.body = body;
		Error.captureStackTrace(this, this.constructor);
	}
}
