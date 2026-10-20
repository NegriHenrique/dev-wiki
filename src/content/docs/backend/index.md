---
title: Desenvolvimento Backend
description: Trilha prática sobre servidores, bancos de dados, regras de negócio, arquitetura de APIs e integração entre sistemas.
sidebar:
  order: 0
  badge:
    text: Trilha
    variant: tip
---

O desenvolvimento Backend é o ramo da computação responsável por toda a lógica de negócio, persistência de dados, autenticação e comunicação entre serviços que ocorrem nos bastidores de uma aplicação, fora do alcance visual direto do usuário final.

:::note[A Cozinha dos Sistemas]
Se o Frontend é o cardápio e a mesa bem posta de um restaurante, o Backend é a cozinha: onde os ingredientes (dados) são preparados, as regras sanitárias (segurança) são seguidas e os pratos são servidos de maneira consistente a todos os clientes.
:::

## Por Que Aprender Backend?

O Backend sustenta as operações críticas de qualquer empresa moderna. Compreender esta área capacita você a:

* **Manipular e proteger dados:** Gerenciar transações com segurança em bancos de dados relacionais (SQL) e não relacionais (NoSQL).
* **Integrar sistemas heterogêneos:** Construir pontes padronizadas para que aplicativos móveis, sistemas bancários e páginas web conversem sem ruídos.
* **Projetar para escala e disponibilidade:** Construir serviços que suportem milhares ou milhões de requisições por segundo mantendo estabilidade.

## Percurso Recomendado

Nossa trilha de Backend aborda a engenharia de servidores nos seguintes passos:

1. **O Modelo Cliente-Servidor:** Como clientes disparam requisições e como servidores respondem com dados.
2. **Arquitetura de APIs e HTTP:** Entenda verbos, rotas e payloads JSON lendo o artigo [O Que É uma API e Como Ela Funciona?](/dev-wiki/backend/fundamentos-e-redes/o-que-e-api/).
3. **Bancos de Dados e Modelagem:** Como organizar tabelas, relacionamentos, chaves primárias e garantir integridade de dados.
4. **Autenticação e Autorização:** Controle de acesso com senhas com hash criptográfico, tokens (JWT) e sessões seguras.
5. **Estrutura de Microsserviços e Mensageria:** Como decompor sistemas monolíticos em serviços desacoplados e resilientes.

:::tip[Como Estudar Backend]
Para aprender Backend com solidez, use clientes HTTP (como cURL, Bruno ou Postman) para inspecionar os cabeçalhos (*headers*), códigos de status e respostas brutas retornadas pelas suas rotas. Compreender o protocolo HTTP em profundidade simplifica o aprendizado de qualquer framework de servidor.
:::

## Leituras Recomendadas

* [MDN Web Docs: Primeiros Passos no Servidor](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side) — Conceitos essenciais sobre arquitetura de servidores e dinâmica web.
* [Red Hat: O Que É uma API?](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces) — Visão de mercado sobre integração e governança de serviços.
* [Node.js Docs](https://nodejs.org/pt) — Referência oficial de um dos ambientes de execução backend mais populares do ecossistema JavaScript.

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/dev-wiki/git-e-github/ramificacoes-e-colaboracao/como-fazer-seu-primeiro-pull-request/)
:::
