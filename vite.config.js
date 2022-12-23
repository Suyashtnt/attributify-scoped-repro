import { sveltekit } from '@sveltejs/kit/vite';
import { presetAttributify, presetUno } from 'unocss';
import Unocss from 'unocss/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			mode: 'svelte-scoped',
			presets: [
				presetAttributify(),
				presetUno()
			]
		}),
		sveltekit()
	]
};

export default config;
