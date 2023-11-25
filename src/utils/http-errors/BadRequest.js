export default class BadRequest extends Error {
	constructor(message, body) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = 400;
		this.body = body;
		Error.captureStackTrace(this, this.constructor);
	}
}
