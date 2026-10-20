// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
	site: 'https://negrihenrique.github.io',
	base: '/dev-wiki',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		mermaid(),
		starlight({
			title: 'Dev Wiki',
			favicon: '/favicon.ico',
			logo: {
				src: './public/logo.png',
				alt: 'Dev Wiki',
				replacesTitle: true,
			},
			customCss: ['./src/styles/katex.css', './src/styles/brand.css'],
			defaultLocale: 'pt-br',
			locales: {
				root: {
					label: 'Português',
					lang: 'pt-BR',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NegriHenrique/dev-wiki' },
			],
			sidebar: [
				{
					label: '1. Primeiros Passos & Ferramental',
					items: [
						{ label: 'Guia do Iniciante & Roadmap', link: '/comece-aqui/' },
						{
							label: 'Ambiente de Desenvolvimento',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/ambiente-de-desenvolvimento/' },
								{
									label: 'Conceitos fundamentais',
									collapsed: true,
									items: [{ autogenerate: { directory: 'ambiente-de-desenvolvimento/conceitos-fundamentais' } }],
								},
								{
									label: 'Ferramental diário',
									collapsed: true,
									items: [{ autogenerate: { directory: 'ambiente-de-desenvolvimento/ferramental-diario' } }],
								},
							],
						},
						{
							label: 'Git e GitHub',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/git-e-github/' },
								{
									label: 'Fundamentos e configuração',
									collapsed: true,
									items: [{ autogenerate: { directory: 'git-e-github/fundamentos-e-configuracao' } }],
								},
								{
									label: 'Ramificações e colaboração',
									collapsed: true,
									items: [{ autogenerate: { directory: 'git-e-github/ramificacoes-e-colaboracao' } }],
								},
								{
									label: 'Fluxos avançados',
									collapsed: true,
									items: [{ autogenerate: { directory: 'git-e-github/fluxos-avancados' } }],
								},
							],
						},
					],
				},
				{
					label: '2. Fundamentos da Programação',
					items: [
						{
							label: 'Lógica de Programação',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/logica-de-programacao/' },
								{
									label: 'Fundamentos',
									collapsed: true,
									items: [{ autogenerate: { directory: 'logica-de-programacao/fundamentos' } }],
								},
								{
									label: 'Controle de fluxo',
									collapsed: true,
									items: [{ autogenerate: { directory: 'logica-de-programacao/controle-de-fluxo' } }],
								},
								{
									label: 'Modularização e estruturas',
									collapsed: true,
									items: [{ autogenerate: { directory: 'logica-de-programacao/modularizacao-e-estruturas' } }],
								},
								{
									label: 'Depuração e paradigmas',
									collapsed: true,
									items: [{ autogenerate: { directory: 'logica-de-programacao/depuracao-e-paradigmas' } }],
								},
							],
						},
						{
							label: 'Estrutura de Dados e Algoritmos',
							collapsed: true,
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
							],
						},
					],
				},
				{
					label: '3. Desenvolvimento de Aplicações',
					items: [
						{
							label: 'Frontend',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/frontend/' },
								{
									label: 'Fundamentos web',
									collapsed: true,
									items: [{ autogenerate: { directory: 'frontend/fundamentos-web' } }],
								},
								{
									label: 'Layout e estilização',
									collapsed: true,
									items: [{ autogenerate: { directory: 'frontend/layout-e-estilizacao' } }],
								},
								{
									label: 'JavaScript e navegador',
									collapsed: true,
									items: [{ autogenerate: { directory: 'frontend/javascript-e-navegador' } }],
								},
								{
									label: 'Qualidade e ecossistema',
									collapsed: true,
									items: [{ autogenerate: { directory: 'frontend/qualidade-e-ecossistema' } }],
								},
							],
						},
						{
							label: 'Backend',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/backend/' },
								{
									label: 'Fundamentos e redes',
									collapsed: true,
									items: [{ autogenerate: { directory: 'backend/fundamentos-e-redes' } }],
								},
								{
									label: 'Bancos de dados',
									collapsed: true,
									items: [{ autogenerate: { directory: 'backend/bancos-de-dados' } }],
								},
								{
									label: 'Arquitetura e serviços',
									collapsed: true,
									items: [{ autogenerate: { directory: 'backend/arquitetura-e-servicos' } }],
								},
							],
						},
						{
							label: 'Infraestrutura e DevOps',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/devops/' },
								{
									label: 'Fundamentos e sistemas',
									collapsed: true,
									items: [{ autogenerate: { directory: 'devops/fundamentos-e-sistemas' } }],
								},
								{
									label: 'Automação e nuvem',
									collapsed: true,
									items: [{ autogenerate: { directory: 'devops/automacao-e-nuvem' } }],
								},
								{
									label: 'Operação e escala',
									collapsed: true,
									items: [{ autogenerate: { directory: 'devops/operacao-e-escala' } }],
								},
							],
						},
					],
				},
				{
					label: '4. Engenharia e Qualidade',
					items: [
						{
							label: 'Boas Práticas',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/boas-praticas/' },
								{
									label: 'Código limpo',
									collapsed: true,
									items: [{ autogenerate: { directory: 'boas-praticas/codigo-limpo' } }],
								},
								{
									label: 'Princípios e design',
									collapsed: true,
									items: [{ autogenerate: { directory: 'boas-praticas/principios-e-design' } }],
								},
								{
									label: 'Testes e arquitetura',
									collapsed: true,
									items: [{ autogenerate: { directory: 'boas-praticas/testes-e-arquitetura' } }],
								},
							],
						},
						{
							label: 'Segurança',
							collapsed: true,
							items: [
								{ label: 'Visão geral', link: '/seguranca/' },
								{
									label: 'Fundamentos e higiene',
									collapsed: true,
									items: [{ autogenerate: { directory: 'seguranca/fundamentos-e-higiene' } }],
								},
								{
									label: 'Vulnerabilidades web',
									collapsed: true,
									items: [{ autogenerate: { directory: 'seguranca/vulnerabilidades-web' } }],
								},
								{
									label: 'Redes e governança',
									collapsed: true,
									items: [{ autogenerate: { directory: 'seguranca/redes-e-governanca' } }],
								},
							],
						},
					],
				},
				{
					label: '5. Carreira e Comunidade',
					collapsed: true,
					items: [
						{ label: 'Visão geral', link: '/carreira/' },
						{
							label: 'Primeiros passos',
							collapsed: true,
							items: [{ autogenerate: { directory: 'carreira/primeiros-passos' } }],
						},
						{
							label: 'Inserção no mercado',
							collapsed: true,
							items: [{ autogenerate: { directory: 'carreira/insercao-no-mercado' } }],
						},
						{
							label: 'Crescimento e comunidade',
							collapsed: true,
							items: [{ autogenerate: { directory: 'carreira/crescimento-e-comunidade' } }],
						},
					],
				},
			],
		}),
	],
});
