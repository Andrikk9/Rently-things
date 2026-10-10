import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Every page of the site, so `npm run build` bundles all of them (not only index.html).
const pages = ['index', 'catalog', 'car', 'owners', 'renters', 'safety', 'pricing', 'company', 'legal'];

export default defineConfig({
	build: {
		rollupOptions: {
			input: Object.fromEntries(pages.map((name) => [name, resolve(__dirname, `${name}.html`)])),
		},
	},
});
