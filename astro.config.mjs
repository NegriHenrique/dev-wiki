// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://seu-usuario-github.github.io',
	integrations: [
		starlight({
			title: 'Dev Wiki',
			defaultLocale: 'pt-br',
			locales: {
				root: {
					label: 'Português',
					lang: 'pt-BR',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/seu-usuario-github/dev-wiki' },
			],
			sidebar: [
				{
					label: 'Git e GitHub',
					items: [{ autogenerate: { directory: 'git-e-github' } }],
				},
				{
					label: 'Lógica de Programação',
					items: [{ autogenerate: { directory: 'logica-de-programacao' } }],
				},
				{
					label: 'Boas Práticas',
					items: [{ autogenerate: { directory: 'boas-praticas' } }],
				},
				{
					label: 'Frontend',
					items: [{ autogenerate: { directory: 'frontend' } }],
				},
				{
					label: 'Backend',
					items: [{ autogenerate: { directory: 'backend' } }],
				},
				{
					label: 'Segurança',
					items: [{ autogenerate: { directory: 'seguranca' } }],
				},
			],
		}),
	],
});
