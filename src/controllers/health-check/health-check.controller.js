import knex from '../../data/index.js';

function healthCheck(ctx) {
	ctx.body = {
		success: true,
	};
}

async function dataBaseCheck(ctx) {
	await knex
		.raw('Select 1')
		.then(() => {
			ctx.body = {
				success: true,
			};
		})
		.catch((e) => {
			ctx.body = {
				success: false,
				message: e,
			};
		});
}

export { healthCheck, dataBaseCheck };
