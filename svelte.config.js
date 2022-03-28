/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// Options below are defaults
			pages: 'build',
			assets: 'build'
		}),
		prerender: {
			enabled: production,
			default: production
		},
		paths: {
			assets: production ? 'http://theojolliffe.github.io/sk-whats-changed' : '',
			base: production ? '/sk-whats-changed' : ''
		},
		appDir: 'internal'
	}
};

export default config;
