import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

async function loadControllers() {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const controllersPath = path.join(__dirname, 'controllers');
	const folders = await fs.readdir(controllersPath);

	const controllers = await Promise.all(
		folders.map(async (folder) => {
			const folderPath = path.join(controllersPath, folder);
			const indexFilePath = `file://${path.join(folderPath, 'index.js')}`;
			const controller = await import(indexFilePath);
			return controller.default;
		})
	);

	return controllers;
}

export default async function routes(api) {
	const controllers = await loadControllers();
	controllers.forEach((router) => {
		api.use(router.routes()).use(router.allowedMethods());
	});
}
