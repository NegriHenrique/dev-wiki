---
title: O Que É uma API e Como Ela Funciona?
description: Entenda o conceito de API (Application Programming Interface), o padrão cliente-servidor e a troca de dados em formato JSON.
---

Uma **API (Application Programming Interface)** é um conjunto padronizado de regras, protocolos e rotas que permite a dois sistemas de software diferentes conversarem e trocarem dados entre si de forma segura e desacoplada.

:::note[A Analogia do Restaurante]
Imagine que você está em um restaurante. Você é o **cliente (frontend)**, a cozinha é o **servidor (backend)** e o garçom é a **API**. Você escolhe um prato do cardápio e faz o pedido ao garçom, que leva a solicitação à cozinha e retorna com a comida pronta. Você não precisa saber como a cozinha funciona por dentro.
:::

## O Modelo Cliente-Servidor e o Protocolo HTTP

A imensa maioria das APIs web modernas opera sobre o protocolo **HTTP/HTTPS**, utilizando o ciclo de Requisição (*Request*) e Resposta (*Response*):

* **Cliente**: Dispara uma requisição HTTP contendo uma URL, cabeçalhos (*headers*) e opcionalmente um corpo de dados (*body*).
* **Servidor**: Processa a regra de negócio, consulta o banco de dados e retorna uma resposta com um código de status HTTP e dados (geralmente em formato JSON).

<!-- TODO: Inserir diagrama esquemático ilustrando o ciclo de Request e Response entre Cliente e Servidor aqui -->

## Métodos HTTP Mais Utilizados

Em APIs RESTful, os verbos HTTP indicam a ação semântica que o cliente deseja executar sobre um recurso:

* **`GET`**: Consulta e recupera informações (ex: listar produtos). Não deve alterar dados no servidor.
* **`POST`**: Cria um novo registro (ex: cadastrar um novo usuário).
* **`PUT`**: Atualiza todos os dados de um registro existente.
* **`PATCH`**: Atualiza parcialmente campos específicos de um registro.
* **`DELETE`**: Remove um registro existente.

```bash
# Exemplo de requisição HTTP GET usando cURL
curl -X GET https://api.exemplo.com/v1/usuarios
```

<!-- TODO: Adicionar tabela com os códigos de status HTTP essenciais (200, 201, 400, 401, 403, 404, 500) aqui -->

## Formato de Dados: JSON

O formato predominante para tráfego de dados em APIs web é o **JSON (JavaScript Object Notation)**, por ser leve e interpretável por praticamente qualquer linguagem de programação moderna.

```json
{
  "id": 101,
  "nome": "Dev Wiki",
  "publico": true,
  "topicos": ["git", "frontend", "backend"]
}
```

:::tip[Autenticação e Segurança em APIs]
APIs protegidas costumam exigir tokens de autorização (como Bearer Tokens ou JWT) enviados no cabeçalho `Authorization` da requisição para validar a identidade do cliente.
:::

<!-- TODO: Escrever a explicação sobre as diferenças conceituais entre APIs RESTful, GraphQL e RPC aqui -->

## Leituras Recomendadas e Referências

* [MDN Web Docs: Uma Visão Geral do HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview) — Explicação aprofundada sobre arquitetura HTTP, cabeçalhos, requisições e respostas.
* [Red Hat: O Que É uma API?](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces) — Artigo conceitual claro explicando tipos de APIs e integrações empresariais.
<!-- TODO: Adicionar recomendações de documentações de APIs públicas para praticar (ex: GitHub REST API, PokeAPI) aqui -->

:::note[Comunidade e Aprendizado Contínuo]
Este conteúdo foi construído de forma colaborativa pela comunidade. O objetivo deste projeto é compartilhar conhecimento prático, mas não nos consideramos especialistas absolutos nos tópicos — somos apenas pessoas desenvolvedoras aprendendo e se ajudando mutuamente. Encontrou algum erro, imprecisão técnica ou tem uma sugestão de melhoria? [Toda correção é bem-vinda, envie seu Pull Request!](/git-e-github/como-fazer-seu-primeiro-pull-request/)
:::
