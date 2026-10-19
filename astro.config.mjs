// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
	site: 'https://seu-usuario-github.github.io',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		mermaid(),
		starlight({
			title: 'Dev Wiki',
			customCss: ['./src/styles/katex.css'],
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
					label: 'Estrutura de Dados',
					items: [
						{ label: 'Visão geral', link: '/estrutura-de-dados/' },
						{
							label: 'Fundamentos',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/fundamentos' } }],
						},
						{
							label: 'Estruturas básicas',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/estruturas-elementares' } }],
						},
						{
							label: 'Buscas',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/pesquisa-e-busca' } }],
						},
						{
							label: 'Recursão',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/pensamento-recursivo' } }],
						},
						{
							label: 'Ordenação',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/algoritmos-de-ordenacao' } }],
						},
						{
							label: 'Estruturas intermediárias',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/estruturas-intermediarias' } }],
						},
						{
							label: 'Grafos',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/teoria-e-grafos' } }],
						},
						{
							label: 'Tópicos avançados',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/topicos-avancados' } }],
						},
						{
							label: 'Projetos práticos',
							collapsed: true,
							items: [{ autogenerate: { directory: 'estrutura-de-dados/aplicacoes-e-projetos' } }],
						},
						{
							label: 'Guia editorial',
							items: [{ autogenerate: { directory: 'estrutura-de-dados/guia' } }],
						},
					],
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
