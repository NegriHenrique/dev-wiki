---
title: Boas Práticas de Segurança para Desenvolvedores
description: Diretrizes essenciais de segurança defensiva para proteger aplicações contra vazamento de credenciais, injeção de dados e vulnerabilidades comuns.
sidebar:
  order: 1
  badge:
    text: Disponível
    variant: success
---

Segurança de software não é uma etapa isolada no final do projeto, mas uma responsabilidade contínua em cada linha de código escrita: pequenos descuidos no desenvolvimento são a principal porta de entrada para invasões e vazamentos em sistemas reais.

:::caution[A Regra Número Um da Segurança]
**Nunca confie nas entradas enviadas pelo usuário.** Todos os dados vindos de formulários, parâmetros de URL, cabeçalhos ou arquivos externos devem ser rigorosamente validados e sanitizados antes de serem processados.
:::

## 1. Gestão Segura de Credenciais e Segredos

Um dos erros mais frequentes entre desenvolvedores iniciantes é enviar senhas, chaves de API ou segredos de banco de dados diretamente para o histórico do Git no GitHub.

* **Use Variáveis de Ambiente**: Mantenha credenciais em arquivos locais `.env`.
* **Adicione ao `.gitignore`**: Certifique-se de que o arquivo `.env` nunca seja rastreado pelo Git.
* **Exemplo de Configuração**: Disponibilize apenas um arquivo `.env.example` sem valores reais para orientar outros colaboradores.

```bash
# Conteúdo seguro de um arquivo .env local (nunca comitado)
DATABASE_URL=postgresql://usuario:senha_secreta@localhost:5432/app_db
JWT_SECRET=chave_criptografica_super_longa_e_aleatoria
```

<!-- TODO: Adicionar explicação e ferramentas para varredura de segredos no git (ex: git-secrets, gitleaks) aqui -->

## 2. Prevenção Contra Injeção de Código (SQL Injection)

Injeção de SQL ocorre quando dados maliciosos digitados pelo usuário são concatenados diretamente em comandos executados no banco de dados, permitindo que invasores leiam ou apaguem tabelas inteiras.

```javascript
// PERIGOSO: Concatenação direta de strings permite SQL Injection
const query = `SELECT * FROM usuarios WHERE email = '${emailUsuario}'`;

// SEGURO: Utilização de Queries Parametrizadas (Prepared Statements)
const query = "SELECT * FROM usuarios WHERE email = $1";
await db.query(query, [emailUsuario]);
```

<!-- TODO: Escrever a explicação sobre Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF) aqui -->

## 3. Gestão e Auditoria de Dependências

Bibliotecas de terceiros trazem agilidade, mas podem conter vulnerabilidades críticas conhecidas.

* Mantenha as dependências sempre atualizadas.
* Execute rotinas periódicas de checagem no terminal com `npm audit`.

```bash
# Analisa vulnerabilidades nas dependências do package.json
npm audit

# Tenta corrigir vulnerabilidades compatíveis automaticamente
npm audit fix
```

:::tip[Princípio do Menor Privilégio]
Conceda apenas o nível mínimo de acesso necessário para cada usuário, serviço ou chave de API desempenhar sua respectiva função.
:::

<!-- TODO: Escrever a explicação sobre princípios de criptografia em trânsito (HTTPS/TLS) e criptografia em repouso (hashing com bcrypt/argon2) aqui -->

## Leituras Recomendadas e Referências

* [OWASP Top 10](https://owasp.org/www-project-top-ten/) — O guia global de referência sobre os 10 riscos e vulnerabilidades de segurança mais críticos em aplicações web.
* [GitHub: Boas Práticas de Segurança em Repositórios](https://docs.github.com/pt/code-security) — Recomendações oficiais do GitHub para manter o código-fonte livre de credenciais e dependências vulneráveis.
<!-- TODO: Adicionar recomendações de artigos sobre autenticação com OAuth 2.0 e boas práticas de JWT aqui -->

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/dev-wiki/git-e-github/ramificacoes-e-colaboracao/como-fazer-seu-primeiro-pull-request/)
:::
