---
title: Boas Práticas e Engenharia de Software
description: Trilha sobre Clean Code, legibilidade, refatoração e padrões de projeto para escrever código sustentável em equipe.
sidebar:
  order: 0
  badge:
    text: Trilha
    variant: tip
---

Boas práticas de desenvolvimento são convenções e padrões consolidados pela indústria para garantir que o código-fonte seja simples de ler, fácil de testar e seguro de manter e evoluir ao longo dos anos por qualquer pessoa da equipe.

:::note[Código é Escrito para Humanos]
Qualquer pessoa consegue escrever código que um computador entenda. Bons programadores escrevem código que outros humanos consigam compreender com facilidade.
:::

## Por Que Adotar Boas Práticas?

Em ambientes profissionais, o código passa muito mais tempo sendo lido e alterado do que sendo escrito do zero. Praticar engenharia de qualidade permite:

* **Reduzir o débito técnico:** Evitar acúmulo de soluções improvisadas que travam a entrega de novas funcionalidades no futuro.
* **Agilizar o onboarding de novos colegas:** Permitir que quem acabou de entrar no projeto entenda o fluxo sem depender de reuniões intermináveis de explicação.
* **Diminuir a taxa de bugs:** Códigos desacoplados e com responsabilidade única falham menos e facilitam diagnósticos rápidos em caso de incidentes.

## Percurso Recomendado

Nossa trilha de Boas Práticas está organizada nas seguintes etapas:

1. **Legibilidade e Nomenclatura:** Como escolher nomes expressivos para variáveis e evitar abreviações crípticas. Leia o artigo [Clean Code Básico: Legibilidade e Simplicidade](/dev-wiki/boas-praticas/codigo-limpo/clean-code-basico/).
2. **Funções Pequenas e Coesas:** Como dividir rotinas em funções curtas que realizam apenas uma tarefa bem definida.
3. **Princípios SOLID:** Fundamentos de orientação a objetos para criar arquiteturas flexíveis e modulares.
4. **Refatoração Contínua:** Técnicas para melhorar a estrutura interna de um código legado sem alterar seu comportamento externo.
5. **Automação e Testes de Software:** Como escrever testes unitários e de integração para validar regras de negócio com tranquilidade.

:::tip[A Regra do Escoteiro]
Adote sempre o princípio de deixar o código mais limpo do que quando você o encontrou. Se você precisou corrigir um bug em um arquivo, aproveite para melhorar o nome de uma variável confusa ou remover uma dependência morta.
:::

## Leituras Recomendadas

* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) — Padrão oficial de estilo adotado pelos times de engenharia do Google.
* [Refactoring Guru: Padrões de Projeto](https://refactoring.guru/pt-br) — Catálogo didático e visual sobre princípios de refatoração e design patterns.
* [Martin Fowler: Artigos sobre Arquitetura e Engenharia](https://martinfowler.com/) — Reflexões essenciais de uma das maiores referências globais em engenharia de software.

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/dev-wiki/git-e-github/ramificacoes-e-colaboracao/como-fazer-seu-primeiro-pull-request/)
:::
