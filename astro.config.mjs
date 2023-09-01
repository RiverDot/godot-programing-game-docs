import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'http://riverdot.tech/godot-programing-game-docs',
	integrations: [
		starlight({
			title: 'Godot Programming Game',
			defaultLocale: 'root', // optional
			locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				}
			},
			social: {
				github: 'https://github.com/RiverDot/godot-programing-game-docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
	},
});
