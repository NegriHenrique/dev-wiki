---
title: Segurança da Informação
description: Trilha fundamental sobre segurança defensiva em aplicações, proteção contra vulnerabilidades comuns e gestão segura de segredos.
sidebar:
  order: 0
  badge:
    text: Trilha
    variant: tip
---

Segurança de software (AppSec) é a disciplina que abrange práticas, padrões e ferramentas aplicadas durante todo o ciclo de desenvolvimento para identificar, corrigir e mitigar vulnerabilidades e prevenir vazamentos de dados em aplicações.

:::caution[Segurança não é Opcional]
Uma única brecha de segurança ou chave de API vazada em um repositório público pode comprometer a privacidade de milhares de usuários ou gerar custos astronômicos em serviços de nuvem.
:::

## Por Que Aprender Segurança Desde o Início?

A segurança moderna segue a filosofia *Shift-Left*: em vez de testar a segurança apenas momentos antes de colocar a aplicação no ar, cada desenvolvedor aplica higiene de segurança a cada commit escrito. Entender esta área permite:

* **Desenvolver código defensivo:** Tratar todas as entradas de usuários, cabeçalhos e arquivos externos como potencialmente perigosos.
* **Proteger credenciais sensíveis:** Garantir que segredos de banco de dados, chaves privadas e senhas nunca fiquem expostos no histórico do Git.
* **Proteger a privacidade dos usuários:** Atender a regulamentações de proteção de dados (como LGPD e GDPR) de forma ética e técnica.

## Percurso Recomendado

Nossa trilha de Segurança conduz você pelos princípios defensivos mais urgentes do desenvolvimento moderno:

1. **Gestão Segura de Segredos:** Como isolar credenciais em variáveis de ambiente `.env` e usar `.gitignore` adequadamente. Leia o artigo [Boas Práticas de Segurança para Desenvolvedores](/dev-wiki/seguranca/fundamentos-e-higiene/boas-praticas-de-seguranca/).
2. **Prevenção de Injeção de Código:** Como evitar ataques como SQL Injection utilizando consultas parametrizadas (*prepared statements*) e ORMs seguros.
3. **OWASP Top 10:** Compreensão dos dez riscos e falhas de segurança mais comuns na web (como quebra de autenticação, XSS e controle de acesso quebrado).
4. **Segurança de Dependências:** Varredura contínua de pacotes externos desatualizados ou com vulnerabilidades conhecidas (via `npm audit` ou Dependabot).
5. **Criptografia e Hashes:** Como armazenar senhas com segurança utilizando algoritmos robustos de derivação de chave (como bcrypt ou Argon2).

:::tip[A Regra de Ouro da Segurança]
Nunca confie em dados que vêm do cliente (navegador ou aplicativo). Valide o formato, o tamanho e o tipo de cada informação no servidor antes de processá-la ou salvá-la em banco de dados.
:::

## Leituras Recomendadas

* [OWASP Foundation](https://owasp.org/) — Organização internacional de referência e catálogo aberto de riscos e padrões de segurança de software.
* [GitHub: Diretrizes de Segurança em Código](https://docs.github.com/pt/code-security) — Recomendações práticas da equipe do GitHub para proteger repositórios e dependências.
* [Guia OWASP Top 10](https://owasp.org/www-project-top-ten/) — O ranking definitivo dos riscos mais críticos para aplicações web modernas.

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/dev-wiki/git-e-github/ramificacoes-e-colaboracao/como-fazer-seu-primeiro-pull-request/)
:::
